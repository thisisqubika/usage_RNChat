import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

const styles = StyleSheet.create({
	container: {
		borderRadius: 10,
		height: 100,
	},
	flex: {
		flex: 1,
	},
});

const ReanimatedComponent = () => {
	const width = useSharedValue(100);
	const { colors } = useTheme();

	const handlePress = () => {
		width.value = withSpring(width.value + 50);
	};

	const handleLongPress = () => {
		width.value = withSpring(100);
	};

	return (
		<>
			<Animated.View
				style={[
					styles.container,
					{ width, backgroundColor: colors.secondary },
				]}>
				<TouchableOpacity
					style={styles.flex}
					onPress={handlePress}
					onLongPress={handleLongPress}
				/>
			</Animated.View>
		</>
	);
};

export default ReanimatedComponent;
