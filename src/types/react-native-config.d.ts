declare module 'react-native-config' {
	export interface NativeConfig {
		API_BASE_URL?: string;
		BUILD_VARIANT?: string;
	}

	export const Config: NativeConfig;
	export default Config;
}
