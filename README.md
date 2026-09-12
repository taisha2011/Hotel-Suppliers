# Hotel Linen | WJ Stay

The production website for Hotel Linen | WJ Stay, presenting specification-led hotel bedding and bath linen sourcing for U.S. hospitality buyers.

## Local development

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` when testing the inquiry form locally.

## Production build

```bash
npm ci
npm run build
npm start
```

The production build uses Next.js with Webpack for compatibility with the existing compiled stylesheet.

## Vercel deployment

1. Import this GitHub repository into Vercel as a Next.js project.
2. Add the environment variables shown in `.env.example`.
3. Verify the sending domain in Resend and set `INQUIRY_FROM_EMAIL` to an address on that domain.
4. Deploy, then submit a test quote request with and without an attachment.
5. Add `www.wjstay.com` in Vercel and apply the DNS records Vercel provides.

The quote form sends inquiries and optional PDF or image attachments to `INQUIRY_TO_EMAIL`. Uploaded files are limited to 10 MB.
