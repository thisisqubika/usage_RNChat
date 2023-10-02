import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login/Login';
import { AuthStackParamList } from './types';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
		</Stack.Navigator>
	);
};
