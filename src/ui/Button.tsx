import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
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
			<Text style={[styles.text, { color: colors.text }]}>{title}</Text>
		</TouchableOpacity>
	);
};
