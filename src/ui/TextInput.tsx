import React from 'react';
import {
	StyleSheet,
	TextInput as RNTextInput,
	TextInputProps,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

const styles = StyleSheet.create({
	input: {
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
	},
});

export const TextInput: React.FC<TextInputProps> = ({ style, ...props }) => {
	const { colors } = useTheme();
	return (
		<RNTextInput
			style={[styles.input, { color: colors.text }, style]}
			{...props}
		/>
	);
};
