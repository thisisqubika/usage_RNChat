import { en } from 'localization/en';
import { es } from 'localization/es';
import { enUS as enUsLocale, es as esLocale } from 'date-fns/locale';

export const languages = { en, es };

export type LanguageOptions = keyof typeof languages;

export const languagesLocales: { [key in LanguageOptions]: Locale } = {
	en: enUsLocale,
	es: esLocale,
};
