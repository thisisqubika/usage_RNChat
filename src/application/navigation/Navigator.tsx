import React from 'react';
import { useSelector } from 'react-redux';
import BootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';

import { selectUser } from 'features/session/slice';

import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';

export const Navigator: React.FC = () => {
	const user = useSelector(selectUser);

	return (
		<NavigationContainer onReady={() => BootSplash.hide()}>
			{user ? <AppStack /> : <AuthStack />}
		</NavigationContainer>
	);
};
