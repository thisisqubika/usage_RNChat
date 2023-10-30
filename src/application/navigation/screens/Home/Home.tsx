import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Config } from 'react-native-config';
import { useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';

import { HomeScreenProps } from 'application/navigation/types';
import ReanimatedComponent from 'features/examples/reanimated';
import { logout } from 'features/session/slice';
import { Button } from 'ui';
import { strings } from 'localization';

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
	title: {
		marginBottom: 40,
	},
});

const Home: React.FC<HomeScreenProps> = () => {
	const dispatch = useDispatch();
	const { colors } = useTheme();

	const handleLogout = () => {
		dispatch(logout());
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={[styles.title, { color: colors.text }]}>
					{strings.home.message + Config.BUILD_VARIANT}
				</Text>
				<ReanimatedComponent />
			</View>
			<Button
				title={strings.home.button}
				onPress={handleLogout}
				testID="LogoutButton"
			/>
		</View>
	);
};

export default Home;
