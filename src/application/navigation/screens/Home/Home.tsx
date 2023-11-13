import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Config } from 'react-native-config';

import { HomeScreenProps } from 'application/navigation/types';
import { spacing } from 'application/theme';
import DateShowCaseComponent from 'features/examples/dateShowcase';
import ReanimatedComponent from 'features/examples/reanimated';
import { useSessionContext } from 'features/session/SessionContext';
import { strings } from 'services/localization';
import { Button } from 'ui';
import { Body, H1 } from 'ui/text';

const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
	const { logOut } = useSessionContext();

	const goToInfiniteQueryExample = () => {
		navigation.navigate('Products');
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
				<View style={styles.divider} />
				<TouchableOpacity onPress={goToInfiniteQueryExample}>
					<Body>{strings.home.goToInfiniteQuery}</Body>
				</TouchableOpacity>
			</View>
			<Button title={strings.home.button} onPress={logOut} />
		</View>
	);
};

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
		height: spacing.xxl,
	},
	title: {
		marginBottom: spacing.xxl,
	},
});

export default Home;
