import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Config } from 'react-native-config';
import { useDispatch } from 'react-redux';

import { HomeScreenProps } from 'application/navigation/types';
import DateShowCaseComponent from 'features/examples/dateShowcase';
import ReanimatedComponent from 'features/examples/reanimated';
import { logout } from 'features/session/slice';
import { strings } from 'services/localization';
import { Button } from 'ui';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
	},
	content: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	divider: {
		height: 30,
	},
	title: {
		marginBottom: 40,
	},
});

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
	const dispatch = useDispatch();
	const { colors } = useTheme();

	const handleLogout = () => {
		dispatch(logout());
	};

	const goToSettings = () => {
		navigation.navigate('Settings');
	};

	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text style={[styles.title, { color: colors.text }]}>
					{strings.home.message + Config.BUILD_VARIANT}
				</Text>
				<ReanimatedComponent />
				<View style={styles.divider} />
				<DateShowCaseComponent />
				<View style={styles.divider} />
				<TouchableOpacity onPress={goToSettings}>
					<Text style={{ color: colors.text }}>
						{strings.home.goToSettings}
					</Text>
				</TouchableOpacity>
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
