import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'es', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  localeDetection: false,
  localeCookie: {name: 'WJ_LOCALE', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax'}
});

export type AppLocale = (typeof routing.locales)[number];
export const htmlLocale: Record<AppLocale, string> = {en: 'en-US', es: 'es-419', pt: 'pt-BR'};
