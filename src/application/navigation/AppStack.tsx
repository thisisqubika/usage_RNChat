/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

import { ChatsList } from './screens/ChatList/ChatList';
import { Chat } from './screens/Chat/Chat';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStack = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="ChatsList" component={ChatsList} />
			<Stack.Screen name="Chat" component={Chat} />
		</Stack.Navigator>
	);
};
