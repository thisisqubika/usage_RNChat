import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home/Home';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
};
