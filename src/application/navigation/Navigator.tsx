import React from 'react';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';

import { selectUser } from 'features/session/slice';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { DarkTheme, DefaultTheme, Theme } from './themes';

export const Navigator: React.FC = () => {
	const user = useSelector(selectUser);
	const scheme = useColorScheme();
	const theme: Theme = scheme === 'dark' ? DarkTheme : DefaultTheme;

	return (
		<NavigationContainer theme={theme} onReady={() => BootSplash.hide()}>
			{user ? <AppStack /> : <AuthStack />}
		</NavigationContainer>
	);
};
