import type{Metadata}from'next';
import{getLocale,getTranslations}from'next-intl/server';
import Link from'@/components/site-link';
import{Catalog}from'@/components/catalog';
import{content,pick}from'@/lib/static-content';
import{localizedMetadata}from'@/lib/metadata';
import type{AppLocale}from'@/i18n/routing';
export async function generateMetadata({params}:{params:Promise<{locale:AppLocale}>}):Promise<Metadata>{const{locale}=await params;return localizedMetadata(locale,'/products',pick(content.products.metaTitle,locale),pick(content.products.metaDescription,locale));}
export default async function Page(){const locale=await getLocale()as AppLocale;const t=await getTranslations('Products');const c=content.products;const title=pick(c.title,locale).split('\n');return <main><div className="page-intro"><p className="eyebrow">{pick(c.eyebrow,locale)}</p><h1>{title[0]}<br/>{title[1]}</h1><p>{pick(c.intro,locale)}</p><div className="category-nav"><Link aria-current="page" href="/products/">{t('all')}</Link><Link href="/products/hotel-bedding/">{t('bedding')}</Link><Link href="/products/bath-linen/">{t('bath')}</Link></div></div><section className="section catalog-section"><Catalog/></section></main>}
