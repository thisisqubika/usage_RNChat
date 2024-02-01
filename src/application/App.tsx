import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SessionProvider } from 'features/session/SessionProvider';
import { Navigator } from './navigation';
import { QueryProvider } from '../services/query';

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<QueryProvider>
			<SessionProvider>
				<>
					<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
					<Navigator />
				</>
			</SessionProvider>
		</QueryProvider>
	);
}

export default App;
