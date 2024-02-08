import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import Config from 'react-native-config';

const app = initializeApp({
	apiKey: Config.API_KEY,
	authDomain: Config.AUTH_DOMAIN,
	projectId: Config.PROJECT_ID,
	storageBucket: Config.STORAGE_BUCKET,
	messagingSenderId: Config.MESSAGING_SENDER_ID,
	appId: Config.APP_ID,
});

export const db = getFirestore(app);
export const fstorage = getStorage(app);
