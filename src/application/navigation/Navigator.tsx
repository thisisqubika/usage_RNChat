import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import BootSplash from 'react-native-bootsplash';

import { DarkTheme, DefaultTheme, Theme } from 'application/theme';
import { useSessionContext } from 'features/session/SessionContext';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export const Navigator: React.FC = () => {
	const { userId } = useSessionContext();
	const scheme = useColorScheme();
	const theme: Theme = scheme === 'dark' ? DarkTheme : DefaultTheme;

	return (
		<NavigationContainer theme={theme} onReady={() => BootSplash.hide()}>
			{userId ? <AppStack /> : <AuthStack />}
		</NavigationContainer>
	);
};
