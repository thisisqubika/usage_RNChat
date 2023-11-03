import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { LoginScreenProps } from 'application/navigation/types';
import { login } from 'features/session/slice';
import SessionService from 'services/api/session';
import { strings } from 'services/localization';
import { Button, TextInput } from 'ui';
import { spacing } from 'application/theme';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: spacing.xl,
	},
	content: {
		alignItems: 'stretch',
		flex: 1,
		justifyContent: 'center',
	},
	error: {
		marginTop: spacing.s,
	},
	input: {
		marginTop: spacing.m,
	},
	title: {
		fontSize: 20,
		marginBottom: spacing.xl,
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
		} catch (err: unknown) {
			if (typeof err === 'string') {
				setError(err);
			} else {
				setError('Unknown error');
			}
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
