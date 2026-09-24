import type{Metadata}from'next';
import{getLocale,getTranslations}from'next-intl/server';
import Link from'@/components/site-link';
import{notFound}from'next/navigation';
import{categories}from'@/lib/products';
import{localizeCategory}from'@/lib/product-localization';
import{Catalog}from'@/components/catalog';
import{localizedMetadata}from'@/lib/metadata';
import type{AppLocale}from'@/i18n/routing';
export function generateStaticParams(){return categories.map(c=>({category:c.slug}))}export const dynamicParams=false;
export async function generateMetadata({params}:{params:Promise<{locale:AppLocale;category:string}>}):Promise<Metadata>{const{locale,category}=await params;const found=categories.find(c=>c.slug===category);if(!found)return{};const c=localizeCategory(found,locale);return localizedMetadata(locale,`/products/${category}`,c.name,c.description);}
export default async function Page({params}:{params:Promise<{category:string}>}){const{category}=await params;const locale=await getLocale()as AppLocale;const found=categories.find(c=>c.slug===category);if(!found)notFound();const c=localizeCategory(found,locale);const t=await getTranslations('Products');return <main><div className="page-intro"><p className="eyebrow">{c.subtitle}</p><h1>{c.name}</h1><p>{c.description}</p><div className="category-nav"><Link href="/products/">{t('all')}</Link>{categories.map(item=>{const x=localizeCategory(item,locale);return <Link aria-current={x.slug===category?'page':undefined} key={x.slug} href={'/products/'+x.slug+'/'}>{x.name}</Link>})}</div></div><section className="section catalog-section"><Catalog category={category}/></section></main>}
