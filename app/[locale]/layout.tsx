import type {Metadata} from 'next';
import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getTranslations, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {SiteHeader} from '@/components/site-header';
import {SiteFooter} from '@/components/site-footer';
import {htmlLocale, routing, type AppLocale} from '@/i18n/routing';
import {localizedMetadata} from '@/lib/metadata';
import '../globals.css';

export function generateStaticParams(){return routing.locales.map(locale=>({locale}));}

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{
  const {locale}=await params;
  if(!hasLocale(routing.locales,locale)) notFound();
  const t=await getTranslations({locale,namespace:'Meta'});
  return {metadataBase:new URL('https://www.wjstay.com'),applicationName:'Hotel Linen | WJ Stay',icons:{icon:'/favicon.svg'},...localizedMetadata(locale as AppLocale,'/',t('homeTitle'),t('homeDescription'))};
}

export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){
  const {locale}=await params;
  if(!hasLocale(routing.locales,locale)) notFound();
  setRequestLocale(locale);
  return <html lang={htmlLocale[locale as AppLocale]}><body><NextIntlClientProvider><a className="skip" href="#content">{locale==='es'?'Saltar al contenido':locale==='pt'?'Ir para o conteúdo':'Skip to content'}</a><SiteHeader/><div id="content">{children}</div><SiteFooter/></NextIntlClientProvider></body></html>;
}
