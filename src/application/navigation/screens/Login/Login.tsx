import { useSessionContext } from '../../../../features/session/SessionContext';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from '../../../../ui/Button/index';
import { InputAndTitle } from '../../../../ui/InputAndTitle';

const Login = () => {
	const [inputUserId, setInputUserId] = useState('');

	const { logIn } = useSessionContext();

	return (
		<View style={styles.container}>
			<View style={styles.inputsContainer}>
				<InputAndTitle
					title="UserId"
					currentValue={inputUserId}
					onChange={setInputUserId}
				/>

				<View style={styles.separator} />
				<Button
					title="Login"
					onPress={() => logIn(inputUserId)}
					extraStyle={styles.button}
				/>
			</View>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	inputsContainer: {
		width: '100%',
		paddingHorizontal: 30,
	},
	button: {
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: 'gray',
	},
	separator: {
		height: 24,
	},
});
