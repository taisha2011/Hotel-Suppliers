'use client';
import {useTranslations} from 'next-intl';
import Link from '@/components/site-link';
import {LanguageSelector} from '@/components/language-selector';
import {Menu} from 'lucide-react';
import {Sheet,SheetContent,SheetTitle,SheetTrigger} from '@/components/ui/sheet';
const routes=['/products','/match-my-linen','/for-distributors','/for-hotels','/customization','/quality'];
const keys=['products','match','distributors','hotels','customization','quality'] as const;
export function SiteHeader(){const t=useTranslations('Common');return <><div className="topbar"><span>{t('topbar')}</span><span>{t('topbarDetail')}</span></div><header className="header"><Link className="brand" href="/">HOTEL LINEN<span>{t('brandTag')}</span></Link><nav className="desktop-nav" aria-label={t('mainNavigation')}>{routes.map((href,index)=><Link key={href} href={href}>{t(`nav.${keys[index]}`)}</Link>)}</nav><LanguageSelector/><Link href="/request-a-quote" className="button compact desktop-quote">{t('requestQuote')} ↗</Link><Sheet><SheetTrigger className="mobile-menu-button" aria-label={t('openNavigation')}><Menu size={24}/></SheetTrigger><SheetContent side="right" className="mobile-menu-panel"><SheetTitle className="mobile-menu-title">HOTEL LINEN</SheetTitle><nav aria-label={t('mobileNavigation')}>{routes.map((href,index)=><Link key={href} href={href}>{t(`nav.${keys[index]}`)}</Link>)}</nav><LanguageSelector mobile/><Link href="/request-a-quote" className="button">{t('requestQuote')} ↗</Link></SheetContent></Sheet></header></>}
