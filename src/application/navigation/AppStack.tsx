import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Home from './screens/Home/Home';
import ProductDetails from './screens/Products/ProductDetails';
import Products from './screens/Products/Products';
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
					fontWeight: 'bold',
				},
			}}>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="Settings" component={Settings} />
			<Stack.Screen name="Products" component={Products} />
			<Stack.Screen name="ProductDetails" component={ProductDetails} />
		</Stack.Navigator>
	);
};
