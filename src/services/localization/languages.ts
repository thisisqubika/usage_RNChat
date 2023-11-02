import { en } from './en';
import { es } from './es';
import { enUS as enUsLocale, es as esLocale } from 'date-fns/locale';

export const languages = { en, es };

export const english: LanguageOptions = 'en';
export const spanish: LanguageOptions = 'es';

export type LanguageOptions = keyof typeof languages;

export const languagesLocales: { [key in LanguageOptions]: Locale } = {
	en: enUsLocale,
	es: esLocale,
};
