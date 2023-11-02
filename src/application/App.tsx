import React from 'react';
import { StatusBar, StyleSheet, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { setupStore } from 'services/store/store';

import { setPreferredLanguage } from 'services/localization';
import { Navigator } from './navigation';

const store = setupStore();
const persistor = persistStore(store);

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const onBeforeLift = async () => {
		await setPreferredLanguage();
	};

	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} onBeforeLift={onBeforeLift}>
				<>
					<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
					<Navigator />
				</>
			</PersistGate>
		</Provider>
	);
}

const styles = StyleSheet.create({
	newStyle: { color: 'red' },
});

export default App;
