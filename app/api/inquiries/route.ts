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

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    if (getText(form, 'website_confirm')) {
      return Response.json({ error: 'Unable to submit.' }, { status: 400 });
    }

    const fields = {
      name: getText(form, 'name', 120),
      email: getText(form, 'email', 200),
      company: getText(form, 'company', 200),
      jobTitle: getText(form, 'jobTitle', 120),
      buyerType: getText(form, 'buyerType', 100),
      volume: getText(form, 'volume', 160),
      destination: getText(form, 'destination', 250),
      category: getText(form, 'productCategory', 100),
      quantity: getText(form, 'estimatedQuantity', 160),
      timing: getText(form, 'targetTiming', 100),
      customLogo: getText(form, 'customLogo', 20),
      privateLabel: getText(form, 'privateLabel', 20),
      startingSpec: getText(form, 'startingSpec', 120),
      supplierReference: getText(form, 'supplierReference', 180),
      targetUnitCost: getText(form, 'targetUnitCost', 120),
      source: getText(form, 'source', 20),
      notes: getText(form, 'notes'),
    };

    if (
      !fields.name ||
      !fields.email ||
      !fields.company ||
      !fields.buyerType ||
      !fields.destination ||
      !fields.category ||
      !fields.quantity ||
      !fields.timing ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
    ) {
      return Response.json(
        { error: 'Please complete all required procurement fields.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.INQUIRY_TO_EMAIL;
    const from = process.env.INQUIRY_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      return Response.json(
        { error: 'Inquiry service is temporarily unavailable.' },
        { status: 503 },
      );
    }

    const id =
      'HL-' +
      new Date().toISOString().slice(0, 10).replaceAll('-', '') +
      '-' +
      crypto.randomUUID().slice(0, 8).toUpperCase();
    const file = form.get('attachment');
    const attachments: Array<{ filename: string; content: string }> = [];

    if (file instanceof File && file.size) {
      if (file.size > 10 * 1024 * 1024 || !allowedTypes.has(file.type)) {
        return Response.json(
          { error: 'Use a PDF, JPG, PNG or WebP file under 10 MB.' },
          { status: 400 },
        );
      }

      attachments.push({
        filename: file.name.slice(0, 180),
        content: Buffer.from(await file.arrayBuffer()).toString('base64'),
      });
    }

    const rows = [
      ['Reference', id],
      ['Source', fields.source],
      ['Name', fields.name],
      ['Business email', fields.email],
      ['Company / property', fields.company],
      ['Job title', fields.jobTitle],
      ['Business type', fields.buyerType],
      ['Rooms / order volume', fields.volume],
      ['Product category', fields.category],
      ['Starting specification', fields.startingSpec],
      ['Estimated quantity', fields.quantity],
      ['Delivery location', fields.destination],
      ['Target timing', fields.timing],
      ['Custom logo', fields.customLogo],
      ['Private label', fields.privateLabel],
      ['Supplier reference', fields.supplierReference],
      ['Target unit cost', fields.targetUnitCost],
      ['Project notes', fields.notes],
    ];
    const plainText = rows.map(([label, value]) => `${label}: ${value || '—'}`).join('\n');
    const html = `<h1>New Hotel Linen inquiry</h1><table style="border-collapse:collapse">${rows
      .map(
        ([label, value]) =>
          `<tr><th style="padding:8px 16px 8px 0;text-align:left;vertical-align:top">${escapeHtml(label)}</th><td style="padding:8px 0;white-space:pre-wrap">${escapeHtml(value || '—')}</td></tr>`,
      )
      .join('')}</table>`;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: fields.email,
        subject: `${id} · ${fields.company} · ${fields.category}`,
        text: plainText,
        html,
        attachments,
      }),
    });

    if (!response.ok) {
      return Response.json(
        { error: 'Inquiry service is temporarily unavailable.' },
        { status: 502 },
      );
    }

    return Response.json({ reference: id }, { status: 201 });
  } catch {
    return Response.json(
      { error: 'Your request could not be submitted. Please try again.' },
      { status: 500 },
    );
  }
}
