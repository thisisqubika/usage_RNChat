import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from './screens/Home/Home';
import Settings from './screens/Settings/Settings';
import TodoDetails from './screens/Todos/TodoDetails';
import Todos from './screens/Todos/Todos';
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
					fontWeight: 'bold',
				},
			}}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Settings" component={Settings} />
			<Stack.Screen name="Todos" component={Todos} />
			<Stack.Screen name="TodoDetails" component={TodoDetails} />
		</Stack.Navigator>
	);
};
