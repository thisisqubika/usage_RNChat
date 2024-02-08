import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SessionProvider } from 'features/session/SessionProvider';
import { Navigator } from './navigation';
import { QueryProvider } from '../services/query';
import { db } from '../services/firebase/config';
import { initFirebaseSdk } from 'react-native-chat-sdk/methods/firebase/config';

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	initFirebaseSdk(db);

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
