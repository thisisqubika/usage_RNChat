import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { LoginScreenProps } from 'application/navigation/types';
import { spacing } from 'application/theme';
import { useSessionContext } from 'features/session/SessionContext';
import { strings } from 'services/localization';
import { Button, TextInput } from 'ui';
import { Body, H1 } from 'ui/text';

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
		marginBottom: spacing.xl,
	},
});

const Login: React.FC<LoginScreenProps> = () => {
	const { logIn } = useSessionContext();
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [error, setError] = useState<string>();
	const { colors } = useTheme();

	const handleLogin = async () => {
		try {
			await logIn(username, password);
		} catch {
			setError(strings.login.error);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<H1 style={styles.title}>{strings.login.header}</H1>
				<TextInput
					placeholder={strings.login.username}
					onChangeText={setUsername}
					style={styles.input}
					testID="username-input"
					autoCapitalize="none"
				/>
				<TextInput
					placeholder={strings.login.password}
					onChangeText={setPassword}
					style={styles.input}
					testID="password-input"
					secureTextEntry
				/>
				{!!error && (
					<Body style={[styles.error, { color: colors.error }]}>{error}</Body>
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
