import LocalizedStrings from 'react-native-localization';
import { en } from './en';
import { es } from './es';

// if the os language is not supported, it will use the first language in the object
export const strings = new LocalizedStrings({ en, es });
