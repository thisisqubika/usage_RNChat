import { useTheme } from '@react-navigation/native';
import React from 'react';
import {
	TextInput as RNTextInput,
	StyleSheet,
	TextInputProps,
} from 'react-native';

const styles = StyleSheet.create({
	input: {
		borderBottomWidth: 1,
	},
});

export const TextInput: React.FC<TextInputProps> = ({ style, ...props }) => {
	const { colors } = useTheme();
	return (
		<RNTextInput
			style={[
				styles.input,
				{ color: colors.text, borderBottomColor: colors.border },
				style,
			]}
			{...props}
		/>
	);
};
