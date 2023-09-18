import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { login } from 'features/session/slice';
import { Button } from 'ui';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export function Login(): JSX.Element {
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(login({ email: 'user@example.com' }));
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text>{'Welcome'}</Text>
			</View>
			<Button title="Login" onPress={handleLogin} testID="LoginButton" />
		</View>
	);
}
