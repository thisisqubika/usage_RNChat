import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from './screens/Login/Login';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
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
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
};
