import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';

import { LoginScreenProps } from 'application/navigation/types';
import { login } from 'features/session/slice';
import SessionService from 'services/api/session';
import { Button, TextInput } from 'ui';
import { strings } from 'services/localization';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'stretch',
	},
	error: {
		color: 'red',
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
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>();
	const dispatch = useDispatch();
	const { colors } = useTheme();

	const handleLogin = async () => {
		try {
			const user = await SessionService.login({
				email,
				password,
			});
			dispatch(login(user));
		} catch (err: any) {
			setError(err);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={[styles.title, { color: colors.text }]}>
					{strings.login.header}
				</Text>
				<TextInput
					placeholder={strings.login.email}
					onChangeText={setEmail}
					style={styles.input}
					testID="email-input"
				/>
				<TextInput
					placeholder={strings.login.password}
					onChangeText={setPassword}
					style={styles.input}
					testID="password-input"
					secureTextEntry
				/>
				{!!error && <Text style={styles.error}>{error}</Text>}
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
