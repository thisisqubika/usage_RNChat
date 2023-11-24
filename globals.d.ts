import { Theme } from 'application/theme/themes';

declare module '@react-navigation/native' {
	export function useTheme(): Theme;
}
