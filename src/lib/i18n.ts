import ruSite from '../data/ru/site.json';
import enSite from '../data/en/site.json';

export const locales = ['ru', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ru';

const siteData = { ru: ruSite, en: enSite } as const;

export function getSiteData(lang: Locale) {
  return siteData[lang];
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function otherLocale(lang: Locale): Locale {
  return lang === 'ru' ? 'en' : 'ru';
}
