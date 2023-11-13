import AsyncStorage from '@react-native-async-storage/async-storage';
import type { PreloadedState } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
} from 'redux-persist';

import { sessionSlice } from 'features/session/slice';
import EncryptedStorage from 'react-native-encrypted-storage';

const rootPersistConfig = {
	key: 'root',
	storage: AsyncStorage,
	blacklist: ['session'],
};

const sessionPersistConfig = {
	key: 'session',
	storage: EncryptedStorage,
};

const rootReducer = combineReducers({
	session: persistReducer(sessionPersistConfig, sessionSlice.reducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: persistedReducer,
		// Specify application middlewares, i.e. Logging, Additional API services
		middleware: (getDefaultMiddleware) => {
			const middleware = getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
				},
			});

			if (__DEV__ && !process.env.JEST_WORKER_ID) {
				// eslint-disable-next-line @typescript-eslint/no-var-requires
				const createDebugger = require('redux-flipper').default;
				middleware.push(createDebugger());
			}

			return middleware;
		},
		preloadedState,
	});
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
