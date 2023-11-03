import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, type TextProps, type TextStyle } from 'react-native';
import bodyStyle from './bodyStyle';
import buttonLabelStyle from './buttonLabelStyle';
import h1Style from './h1Style';
import h2Style from './h2Style';

const makeText = (textStyle: TextStyle) => {
	const TextComponent = ({ children, style, ...props }: TextProps) => {
		const { colors } = useTheme();
		return (
			<Text {...props} style={[{ color: colors.text }, textStyle, style]}>
				{children}
			</Text>
		);
	};
	return TextComponent;
};

const Body = makeText(bodyStyle);
const ButtonLabel = makeText(buttonLabelStyle);
const H1 = makeText(h1Style);
const H2 = makeText(h2Style);

export { Body, ButtonLabel, H1, H2 };
