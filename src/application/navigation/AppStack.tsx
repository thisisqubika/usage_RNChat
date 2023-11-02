import React from 'react';
import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home/Home';
import { AppStackParamList } from './types';
import Settings from './screens/Settings/Settings';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
	const { colors } = useTheme();
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: colors.background,
				},
				headerShadowVisible: false,
				headerTintColor: colors.text,
				headerTitleStyle: {
					fontWeight: 'bold',
				},
			}}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Settings" component={Settings} />
		</Stack.Navigator>
	);
};
