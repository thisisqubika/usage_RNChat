import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home/Home';
import { AppStackParamList } from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
};
