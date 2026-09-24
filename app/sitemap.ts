import type{MetadataRoute}from'next';
import{products,categories}from'@/lib/products';

const origin='https://www.wjstay.com';
const staticPaths=['/','/products','/about','/contact','/customization','/for-distributors','/for-hotels','/match-my-linen','/privacy','/business-notice','/quality','/request-a-quote'];
const paths=[...staticPaths,...categories.map(c=>`/products/${c.slug}`),...products.map(p=>`/product/${p.slug}`)];
const withLocale=(path:string,locale:'en'|'es'|'pt')=>`${origin}${locale==='en'?'':`/${locale}`}${path==='/'?'':path}/`;

export default function sitemap():MetadataRoute.Sitemap{return paths.map(path=>({url:withLocale(path,'en'),lastModified:new Date(),changeFrequency:path.startsWith('/product/')?'monthly':'weekly',priority:path==='/'?1:path.startsWith('/product/')?0.7:0.8,alternates:{languages:{'en-US':withLocale(path,'en'),'es-419':withLocale(path,'es'),'pt-BR':withLocale(path,'pt'),'x-default':withLocale(path,'en')}}}));}
