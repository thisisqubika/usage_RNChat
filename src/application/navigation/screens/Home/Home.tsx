import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Config } from 'react-native-config';
import { useDispatch } from 'react-redux';

import { HomeScreenProps } from 'application/navigation/types';
import { logout } from 'features/session/slice';
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

const Home: React.FC<HomeScreenProps> = () => {
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text>{'Hello world! Build Variant: ' + Config.BUILD_VARIANT}</Text>
			</View>
			<Button title="Logout" onPress={handleLogout} testID="LogoutButton" />
		</View>
	);
};

export default Home;
