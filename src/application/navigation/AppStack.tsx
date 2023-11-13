/* eslint-disable react/no-unstable-nested-components */
import { useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { GearIcon } from 'assets/icons';
import { TouchableOpacity } from 'react-native';
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
					fontFamily: 'BeVietnam-Bold',
				},
				headerBackTitleStyle: {
					fontFamily: 'BeVietnam-Regular',
				},
			}}>
			<Stack.Screen
				name="Home"
				component={Home}
				options={({ navigation }) => {
					return {
						headerRight: ({ tintColor }) => (
							<TouchableOpacity onPress={() => navigation.navigate('Settings')}>
								<GearIcon height={20} width={20} fill={tintColor} />
							</TouchableOpacity>
						),
					};
				}}
			/>
			<Stack.Screen name="Settings" component={Settings} />
			<Stack.Screen name="Products" component={Products} />
			<Stack.Screen name="ProductDetails" component={ProductDetails} />
		</Stack.Navigator>
	);
};
