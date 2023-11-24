import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { setupStore } from 'services/store/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'features/session/SessionProvider';
import { loadAppLanguage } from 'services/localization';
import { Navigator } from './navigation';

const store = setupStore();
const persistor = persistStore(store);
const queryClient = new QueryClient();

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const onBeforeLift = async () => {
		await loadAppLanguage();
	};

	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
					<SessionProvider>
						<>
							<StatusBar
								barStyle={isDarkMode ? 'light-content' : 'dark-content'}
							/>
							<Navigator />
						</>
					</SessionProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	);
}

export default App;
