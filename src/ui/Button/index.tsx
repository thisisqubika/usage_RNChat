import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';

interface ButtonProps {
	title: string;
	onPress: () => void;
	extraStyle?: ViewStyle;
}

export const Button = (props: ButtonProps) => {
	return (
		<TouchableOpacity style={props.extraStyle} onPress={props.onPress}>
			<Text>{props.title}</Text>
		</TouchableOpacity>
	);
};
