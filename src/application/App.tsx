import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';

import { setupStore } from 'services/store/store';

import { Navigator } from './navigation';

const store = setupStore();

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<Provider store={store}>
			<>
				<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
				<Navigator />
			</>
		</Provider>
	);
}

export default App;
