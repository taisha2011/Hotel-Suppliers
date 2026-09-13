export const runtime = 'nodejs';

const allowedTypes = new Set([
  'application/pdf',
  'image/jpeg',
  'image/png',
  'image/webp',
]);

const getText = (form: FormData, key: string, max = 5000) => {
  const value = form.get(key);
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
};

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' })[
        character
      ]!,
  );

type SavedRfq = { rfq_id: string; opportunity_id: string };

async function saveToCrm(
  payload: Record<string, string | undefined>,
  file: File | null,
  fileBytes: Buffer | null,
): Promise<SavedRfq | null> {
  const url = (
    process.env.SUPABASE_URL ??
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    ''
  ).replace(/\/$/, '');
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  const request = (path: string, init: RequestInit) => {
    const headers = new Headers(init.headers);
    headers.set('apikey', key);
    headers.set('Authorization', `Bearer ${key}`);
    return fetch(`${url}${path}`, { ...init, headers });
  };

  try {
    let attachment_url: string | undefined;
    if (file && fileBytes) {
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-').slice(-160);
      attachment_url = `${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${safeName}`;
      const uploadBody = fileBytes.buffer.slice(
        fileBytes.byteOffset,
        fileBytes.byteOffset + fileBytes.byteLength,
      ) as ArrayBuffer;
      const upload = await request(
        `/storage/v1/object/rfq-private/${attachment_url}`,
        {
          method: 'POST',
          headers: { 'Content-Type': file.type, 'x-upsert': 'false' },
          body: uploadBody,
        },
      );
      if (!upload.ok) throw new Error(`Attachment upload returned ${upload.status}`);
    }

    const response = await request('/rest/v1/rpc/submit_website_rfq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify({ payload: { ...payload, attachment_url } }),
    });
    if (!response.ok) throw new Error(`CRM save returned ${response.status}`);
    return (await response.json()) as SavedRfq;
  } catch (error) {
    console.error('Optional CRM save failed', error instanceof Error ? error.message : error);
    return null;
  }
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();
    if (getText(form, 'website_confirm')) {
      return Response.json({ error: 'Unable to submit.' }, { status: 400 });
    }

    const fields = {
      fullName: getText(form, 'name', 120),
      businessEmail: getText(form, 'email', 200).toLowerCase(),
      companyName: getText(form, 'company', 200),
      jobTitle: getText(form, 'jobTitle', 120),
      businessType: getText(form, 'buyerType', 100),
      volume: getText(form, 'volume', 160),
      productCategory: getText(form, 'productCategory', 100),
      startingSpecification: getText(form, 'startingSpec', 120),
      estimatedQuantity: getText(form, 'estimatedQuantity', 160),
      deliveryLocation: getText(form, 'destination', 250),
      targetTiming: getText(form, 'targetTiming', 100),
      customLogo: getText(form, 'customLogo', 20),
      privateLabel: getText(form, 'privateLabel', 20),
      supplierReference: getText(form, 'supplierReference', 180),
      targetUnitCost: getText(form, 'targetUnitCost', 120),
      projectNotes: getText(form, 'notes'),
      source: getText(form, 'source', 20),
    };

    if (
      !fields.fullName ||
      !fields.businessEmail ||
      !fields.companyName ||
      !fields.businessType ||
      !fields.productCategory ||
      !fields.estimatedQuantity ||
      !fields.deliveryLocation ||
      !fields.targetTiming ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.businessEmail)
    ) {
      return Response.json(
        { error: 'Please complete all required procurement fields.' },
        { status: 400 },
      );
    }

    const attachment = form.get('attachment');
    const file = attachment instanceof File && attachment.size ? attachment : null;
    let fileBytes: Buffer | null = null;
    if (file) {
      if (file.size > 10 * 1024 * 1024 || !allowedTypes.has(file.type)) {
        return Response.json(
          { error: 'Use a PDF, JPG, PNG or WebP file under 10 MB.' },
          { status: 400 },
        );
      }
      fileBytes = Buffer.from(await file.arrayBuffer());
    }

    const saved = await saveToCrm(
      {
        full_name: fields.fullName,
        business_email: fields.businessEmail,
        company_name: fields.companyName,
        job_title: fields.jobTitle,
        business_type: fields.businessType,
        number_of_rooms: fields.volume,
        product_category: fields.productCategory,
        estimated_quantity: fields.estimatedQuantity,
        delivery_location: fields.deliveryLocation,
        delivery_zip:
          fields.deliveryLocation.match(/\b\d{5}(?:-\d{4})?\b/)?.[0] ?? '',
        target_purchase_timing: fields.targetTiming,
        custom_logo: fields.customLogo,
        private_label: fields.privateLabel,
        supplier_sku:
          fields.supplierReference || fields.startingSpecification,
        current_or_target_cost: fields.targetUnitCost,
        project_notes: fields.projectNotes,
      },
      file,
      fileBytes,
    );

    const reference = saved
      ? `RFQ-${saved.rfq_id.slice(0, 8).toUpperCase()}`
      : `RFQ-${new Date().toISOString().slice(0, 10).replaceAll('-', '')}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
    const rows = [
      ['Reference', reference],
      ['Source', fields.source],
      ['Full name', fields.fullName],
      ['Business email', fields.businessEmail],
      ['Company / property', fields.companyName],
      ['Job title', fields.jobTitle],
      ['Business type', fields.businessType],
      ['Rooms / approximate volume', fields.volume],
      ['Product category', fields.productCategory],
      ['Starting specification', fields.startingSpecification],
      ['Estimated quantity', fields.estimatedQuantity],
      ['Delivery location', fields.deliveryLocation],
      ['Target purchase timing', fields.targetTiming],
      ['Custom logo', fields.customLogo],
      ['Private label', fields.privateLabel],
      ['Supplier SKU / reference', fields.supplierReference],
      ['Current / target unit cost', fields.targetUnitCost],
      ['Project notes', fields.projectNotes],
    ];
    const opportunityUrl = saved?.opportunity_id
      ? `${process.env.CRM_BASE_URL ?? 'https://crm.wjstay.com'}/opportunities/${saved.opportunity_id}`
      : null;
    const text = [
      'New website RFQ received.',
      '',
      ...rows.map(([label, value]) => `${label}: ${value || '—'}`),
      ...(opportunityUrl ? ['', `View Opportunity: ${opportunityUrl}`] : []),
    ].join('\n');
    const html = `<h1>New website RFQ received</h1><table style="border-collapse:collapse">${rows
      .map(
        ([label, value]) =>
          `<tr><th style="padding:8px 16px 8px 0;text-align:left;vertical-align:top">${escapeHtml(label)}</th><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(value || '—')}</td></tr>`,
      )
      .join('')}</table>${
      opportunityUrl
        ? `<p><a href="${escapeHtml(opportunityUrl)}">View Opportunity</a></p>`
        : ''
    }`;

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.INQUIRY_FROM_EMAIL;
    const to = process.env.INQUIRY_TO_EMAIL?.trim() || 'sales@wjstay.com';
    const bcc = (process.env.INQUIRY_BCC_EMAIL ?? '')
      .split(',')
      .map((email) => email.trim())
      .filter(Boolean);
    if (!apiKey || !from || bcc.length === 0) {
      return Response.json(
        { error: 'Inquiry service is temporarily unavailable.' },
        { status: 503 },
      );
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        bcc,
        reply_to: fields.businessEmail,
        subject: `${reference} · ${fields.companyName} · ${fields.productCategory}`,
        text,
        html,
        attachments:
          file && fileBytes
            ? [
                {
                  filename: file.name.slice(0, 180),
                  content: fileBytes.toString('base64'),
                },
              ]
            : [],
      }),
    });
    if (!response.ok) {
      console.error('Notification provider returned', response.status);
      return Response.json(
        { error: 'Inquiry service is temporarily unavailable.' },
        { status: 502 },
      );
    }

    return Response.json({ reference }, { status: 201 });
  } catch (error) {
    console.error(
      'RFQ submission failed',
      error instanceof Error ? error.message : 'Unknown error',
    );
    return Response.json(
      {
        error:
          'Your request could not be submitted. Please try again or email sales@wjstay.com.',
      },
      { status: 500 },
    );
  }
}
