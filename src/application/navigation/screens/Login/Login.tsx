import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { LoginScreenProps } from 'application/navigation/types';
import { login } from 'features/session/slice';
import SessionService from 'services/api/session';
import { strings } from 'services/localization';
import { Button, TextInput } from 'ui';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
	},
	content: {
		alignItems: 'stretch',
		flex: 1,
		justifyContent: 'center',
	},
	error: {
		marginTop: 12,
	},
	input: {
		marginTop: 16,
	},
	title: {
		fontSize: 20,
		marginBottom: 30,
	},
});

const Login: React.FC<LoginScreenProps> = () => {
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>();
	const dispatch = useDispatch();
	const { colors } = useTheme();

	const handleLogin = async () => {
		try {
			const user = await SessionService.logIn({
				username,
				password,
			});
			dispatch(login(user));
		} catch {
			setError(strings.login.error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={[styles.title, { color: colors.text }]}>
					{strings.login.header}
				</Text>
				<TextInput
					placeholder={strings.login.username}
					onChangeText={setUsername}
					style={styles.input}
					testID="username-input"
				/>
				<TextInput
					placeholder={strings.login.password}
					onChangeText={setPassword}
					style={styles.input}
					testID="password-input"
					secureTextEntry
				/>
				{!!error && (
					<Text style={[styles.error, { color: colors.error }]}>{error}</Text>
				)}
			</View>
			<Button
				title={strings.login.button}
				onPress={handleLogin}
				testID="LoginButton"
			/>
		</View>
	);
};

export default Login;
