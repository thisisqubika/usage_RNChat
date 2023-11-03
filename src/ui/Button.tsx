import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { radius, spacing } from 'application/theme/dimens';

interface ButtonProps {
	title: string;
	onPress: () => void;
	testID?: string;
}

const styles = StyleSheet.create({
	container: {
		borderRadius: radius.s,
		paddingVertical: spacing.s,
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
