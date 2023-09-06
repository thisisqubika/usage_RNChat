import { loginSlice } from '@/features/Login/slice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const rootReducer = combineReducers({
  login: loginSlice.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    // Specify application middlewares, i.e. Logging, Additional API services
    middleware: getDefaultMiddleware => {
      const middleware = getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      });

      if (__DEV__ && !process.env.JEST_WORKER_ID) {
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
