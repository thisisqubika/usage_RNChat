import LocalizedStrings from 'react-native-localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setDefaultOptions } from 'date-fns';
import {
	LanguageOptions,
	languages,
	languagesLocales,
} from 'services/localization/languages';

const LANGUAGE_KEY = 'language';

export const strings = new LocalizedStrings(languages);

export const setLanguage = (language: LanguageOptions) => {
	strings.setLanguage(language);
	AsyncStorage.setItem(LANGUAGE_KEY, language);
};

export const getPreferredLanguage =
	async (): Promise<LanguageOptions | null> => {
		const language = await AsyncStorage.getItem(LANGUAGE_KEY);
		return language as LanguageOptions;
	};

export const getLanguage = () => {
	return strings.getLanguage() as LanguageOptions;
};

export const getLanguageLocale = (language: LanguageOptions) => {
	return languagesLocales[language];
};

export const setPreferredLanguage = async () => {
	const preferredLanguage = await getPreferredLanguage();
	if (preferredLanguage) {
		setLanguage(preferredLanguage);
	}
	const language = getLanguage();
	setDefaultOptions({
		locale: getLanguageLocale(language),
	});
};
