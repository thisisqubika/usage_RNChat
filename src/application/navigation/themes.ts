import {
	DarkTheme as RNDarkTheme,
	DefaultTheme as RNDefaultTheme,
	Theme as RNTheme,
} from '@react-navigation/native';

export type Theme = RNTheme & {
	colors: {
		secondary: string;
		error: string;
		border: string;
	};
};

export const DarkTheme: Theme = {
	...RNDarkTheme,
	colors: {
		...RNDarkTheme.colors,
		background: '#040D12',
		primary: '#183D3D',
		secondary: '#5C8374',
		text: '#FFFFFF',
		error: '#FF0000',
		border: '#808080',
	},
};

export const DefaultTheme: Theme = {
	...RNDefaultTheme,
	colors: {
		...RNDefaultTheme.colors,
		background: '#FFFFFF',
		primary: '#5C8374',
		secondary: '#183D3D',
		text: '#000000',
		error: '#FF0000',
		border: '#808080',
	},
};
