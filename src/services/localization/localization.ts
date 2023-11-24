import AsyncStorage from '@react-native-async-storage/async-storage';
import { setDefaultOptions as setDefaultDateOptions } from 'date-fns';
import LocalizedStrings from 'react-native-localization';
import {
	LanguageOptions,
	languages,
	languagesLocales,
} from 'services/localization/languages';

const LANGUAGE_KEY = 'language';

// if the os language is not supported, it will use the first language in the object
export const strings = new LocalizedStrings(languages);

export const setLanguage = (language: LanguageOptions) => {
	strings.setLanguage(language);
	AsyncStorage.setItem(LANGUAGE_KEY, language);
};

export const getCurrentLanguage = () => {
	return strings.getLanguage() as LanguageOptions;
};

const getLanguageLocale = (language: LanguageOptions) => {
	return languagesLocales[language];
};

const getPreferredLanguage = async (): Promise<LanguageOptions | null> => {
	const language = await AsyncStorage.getItem(LANGUAGE_KEY);
	return language as LanguageOptions;
};

export const loadAppLanguage = async () => {
	const preferredLanguage = await getPreferredLanguage();
	if (preferredLanguage) {
		setLanguage(preferredLanguage);
	}
	const language = getCurrentLanguage();
	setDefaultDateOptions({
		locale: getLanguageLocale(language),
	});
};
