import type {Metadata} from 'next';
import type {AppLocale} from '@/i18n/routing';

const prefix: Record<AppLocale,string>={en:'',es:'/es',pt:'/pt'};

export function localizedMetadata(locale:AppLocale,path:string,title:string,description:string):Metadata{
  const clean=path==='/'?'':path.replace(/\/$/,'');
  const url=(l:AppLocale)=>`${prefix[l]}${clean||'/'}`;
  return {
    title,
    description,
    alternates:{canonical:url(locale),languages:{'en-US':url('en'),'es-419':url('es'),'pt-BR':url('pt'),'x-default':url('en')}},
    openGraph:{type:'website',siteName:'Hotel Linen | WJ Stay',title,description,url:url(locale),locale:locale==='en'?'en_US':locale==='es'?'es_419':'pt_BR'},
    twitter:{card:'summary',title,description}
  };
}
