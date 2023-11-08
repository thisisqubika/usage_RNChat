import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from './screens/Home/Home';
import Settings from './screens/Settings/Settings';
import { AppStackParamList } from './types';

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
					fontFamily: 'BeVietnam-Bold',
				},
				headerBackTitleStyle: {
					fontFamily: 'BeVietnam-Regular',
				},
			}}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Settings" component={Settings} />
		</Stack.Navigator>
	);
};
