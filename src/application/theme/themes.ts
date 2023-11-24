import {
	DarkTheme as RNDarkTheme,
	DefaultTheme as RNDefaultTheme,
	Theme as RNTheme,
} from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { colors } from './colors';

export type Theme = RNTheme & {
	colors: {
		secondary: string;
		error: string;
	};
};

export const DarkTheme: Theme = {
	...RNDarkTheme,
	colors: {
		...RNDarkTheme.colors,
		background: colors.blackPearl,
		primary: colors.gableGreen,
		secondary: colors.viridianGreen,
		text: colors.white,
		error: colors.red,
		border: colors.gray,
	},
};

export const DefaultTheme: Theme = {
	...RNDefaultTheme,
	colors: {
		...RNDefaultTheme.colors,
		background: colors.white,
		primary: colors.viridianGreen,
		secondary: colors.gableGreen,
		text: colors.black,
		error: colors.red,
		border: colors.gray,
	},
};

/*
 * generated with https://ethercreative.github.io/react-native-shadow-generator/
 * to get the same shadow on both platforms
 */
export const shadows = StyleSheet.create({
	pressed: {
		elevation: 15,
		shadowColor: colors.purple,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.75,
		shadowRadius: 3.84,
	},
	primary: {
		elevation: 5,
		shadowColor: colors.black,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
});
