import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
interface ButtonProps {
	title: string;
	onPress: () => void;
	testID?: string;
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 8,
		paddingVertical: 10,
	},
	text: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

export const Button: React.FC<ButtonProps> = ({ title, onPress, testID }) => {
	const { colors } = useTheme();

	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor: colors.primary }]}
			onPress={onPress}
			testID={testID}>
			<Text style={styles.text}>{title}</Text>
		</TouchableOpacity>
	);
};
