import { HomeScreenProps } from 'application/navigation/types';
import { spacing } from 'application/theme';
import DateShowCaseComponent from 'features/examples/dateShowcase';
import ReanimatedComponent from 'features/examples/reanimated';
import { logout } from 'features/session/slice';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Config } from 'react-native-config';
import { useDispatch } from 'react-redux';
import { strings } from 'services/localization';
import { Button } from 'ui';
import { H1 } from 'ui/text';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: spacing.xl,
	},
	content: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	divider: {
		height: 40,
	},
	title: {
		marginBottom: spacing.xxl,
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
				<H1 style={styles.title}>
					{strings.home.message + Config.BUILD_VARIANT}
				</H1>
				<ReanimatedComponent />
				<View style={styles.divider} />
				<DateShowCaseComponent />
			</View>
			<Button title={strings.home.button} onPress={handleLogout} />
		</View>
	);
};

export default Home;
