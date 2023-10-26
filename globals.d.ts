import { Theme } from 'application/navigation/themes';

declare module '@react-navigation/native' {
	export function useTheme(): Theme;
}
