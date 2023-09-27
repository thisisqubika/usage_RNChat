import React from 'react';
import {
	StyleSheet,
	TextInput as RNTextInput,
	TextInputProps,
} from 'react-native';

const styles = StyleSheet.create({
	input: {
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
	},
});

export const TextInput: React.FC<TextInputProps> = ({ style, ...props }) => (
	<RNTextInput style={[styles.input, style]} {...props} />
);
