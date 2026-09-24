'use client';
import {useLocale} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';
const options: Array<{locale: AppLocale; label: string; title: string}> = [
  {locale:'en',label:'EN',title:'English'},{locale:'es',label:'ES',title:'Español'},{locale:'pt',label:'PT',title:'Português'}
];
export function LanguageSelector({mobile=false}:{mobile?:boolean}) {const current=useLocale();const pathname=usePathname();const ariaLabel=current==='es'?'Idioma':current==='pt'?'Idioma':'Language';return <nav className={mobile?'language-selector mobile-language-selector':'language-selector'} aria-label={ariaLabel}>{options.map(({locale,label,title})=><Link key={locale} href={pathname as '/'} locale={locale} hrefLang={locale==='en'?'en-US':locale==='es'?'es-419':'pt-BR'} aria-current={current===locale?'page':undefined} title={title} onClick={()=>{document.cookie=`WJ_LOCALE=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;}}>{label}</Link>)}</nav>;}
