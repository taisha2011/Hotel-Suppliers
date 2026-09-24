import {NextRequest, NextResponse} from 'next/server';
import type {AppLocale} from './i18n/routing';

const spanishCountries = new Set(['MX','CO','AR','CL','PE','EC','UY','PY','BO','VE','CR','PA','GT','HN','SV','NI','DO']);

function preferredLocale(request: NextRequest): AppLocale {
  const country = request.headers.get('x-vercel-ip-country')?.toUpperCase();
  if (country === 'BR') return 'pt';
  if (country && spanishCountries.has(country)) return 'es';
  const language = request.headers.get('accept-language')?.toLowerCase() ?? '';
  if (/(^|,)\s*pt(?:-|;|,|$)/.test(language)) return 'pt';
  if (/(^|,)\s*es(?:-|;|,|$)/.test(language)) return 'es';
  return 'en';
}

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if(request.headers.get('x-wj-locale-rewrite')==='1')return NextResponse.next();
  const match=pathname.match(/^\/(en|es|pt)(?:\/|$)/);
  const prefix=match?.[1]as AppLocale|undefined;
  const savedLocale = request.cookies.get('WJ_LOCALE')?.value;
  if(prefix){
    if(prefix==='en'){
      const url=request.nextUrl.clone();
      url.pathname=pathname.replace(/^\/en(?=\/|$)/,'')||'/';
      const response=NextResponse.redirect(url);
      response.cookies.set('WJ_LOCALE','en',{path:'/',maxAge:60*60*24*365,sameSite:'lax'});
      return response;
    }
    const headers=new Headers(request.headers);
    headers.set('X-NEXT-INTL-LOCALE',prefix);
    const response=NextResponse.next({request:{headers}});
    if(savedLocale!==prefix)response.cookies.set('WJ_LOCALE',prefix,{path:'/',maxAge:60*60*24*365,sameSite:'lax'});
    return response;
  }
  {
    const locale = savedLocale === 'en' || savedLocale === 'es' || savedLocale === 'pt'
      ? savedLocale
      : preferredLocale(request);
    if (locale !== 'en') {
      const url = request.nextUrl.clone();
      url.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;
      const response = NextResponse.redirect(url);
      response.cookies.set('WJ_LOCALE', locale, {path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax'});
      return response;
    }
    const url=request.nextUrl.clone();
    url.pathname=`/en${pathname==='/'?'':pathname}`;
    const headers=new Headers(request.headers);
    headers.set('x-wj-locale-rewrite','1');
    headers.set('X-NEXT-INTL-LOCALE','en');
    const response=NextResponse.rewrite(url,{request:{headers}});
    if (!savedLocale) response.cookies.set('WJ_LOCALE', 'en', {path: '/', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax'});
    return response;
  }
}

export const config = {matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']};
