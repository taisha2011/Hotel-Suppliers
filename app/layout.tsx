import type {Metadata} from 'next';
import {SiteHeader} from '@/components/site-header';
import {SiteFooter} from '@/components/site-footer';
import './globals.css';

export const metadata:Metadata={
  metadataBase:new URL('https://www.wjstay.com'),
  title:{default:'Hotel Linen Sourcing for U.S. Hospitality Buyers | WJ Stay',template:'%s | WJ Stay'},
  description:'Specification-led hotel bedding, towels and bath linen sourcing for hotels, management groups and hospitality distributors.',
  applicationName:'Hotel Linen | WJ Stay',
  alternates:{canonical:'/'},
  openGraph:{type:'website',siteName:'Hotel Linen | WJ Stay',title:'Hotel Linen Sourcing for U.S. Hospitality Buyers | WJ Stay',description:'Specification-led hotel bedding, towels and bath linen sourcing for hotels, management groups and hospitality distributors.',url:'https://www.wjstay.com'},
  twitter:{card:'summary',title:'Hotel Linen Sourcing for U.S. Hospitality Buyers | WJ Stay',description:'Specification-led hotel bedding, towels and bath linen sourcing for hotels, management groups and hospitality distributors.'},
  icons:{icon:'/favicon.svg'}
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><a className="skip" href="#content">Skip to content</a><SiteHeader/><div id="content">{children}</div><SiteFooter/></body></html>}
