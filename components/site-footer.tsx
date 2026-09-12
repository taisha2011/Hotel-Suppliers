import Link from '@/components/site-link';
import {site} from '@/lib/site';

export function SiteFooter(){return <footer className="site-footer">
  <div className="footer-brand"><Link className="brand" href="/">HOTEL LINEN<span>U.S. HOSPITALITY PROGRAMS</span></Link><p>Specification-led bedding and bath linen sourcing for hospitality buyers.</p><p className="footer-company">Operated by:<br/><strong>{site.company}</strong></p></div>
  <div><p className="eyebrow">PRODUCTS</p><Link href="/products/hotel-bedding">Hotel Bedding</Link><Link href="/products/bath-linen">Towels & Bath Linen</Link><Link href="/#programs">Core Programs</Link><Link href="/match-my-linen">Match a Spec</Link></div>
  <div><p className="eyebrow">WORK WITH US</p><Link href="/for-distributors">For Distributors</Link><Link href="/for-hotels">For Hotels</Link><Link href="/customization">Customization</Link><Link href="/quality">Quality Process</Link><Link href="/request-a-quote">Request a Quote</Link></div>
  <div><p className="eyebrow">COMPANY</p><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy">Privacy</Link><Link href="/business-notice">Business Notice</Link></div>
  <div className="footer-bottom"><span>© 2026 {site.company}</span><span><a href={`mailto:${site.email}`}>{site.email}</a> · <a href="https://www.wjstay.com">{site.website}</a></span><span>Specifications, pricing, availability, minimum quantities and lead times are confirmed with each written quotation.</span></div>
</footer>}
