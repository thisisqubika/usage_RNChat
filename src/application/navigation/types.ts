import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamList = {
	Home: undefined;
	Settings: undefined;
	Products: undefined;
	ProductDetails: { id: number };
};

export type AuthStackParamList = {
	Login: undefined;
};

type AppStackNavigatorScreenProps<T extends keyof AppStackParamList> =
	NativeStackScreenProps<AppStackParamList, T>;

type AuthNavigatorScreenProps<T extends keyof AuthStackParamList> =
	NativeStackScreenProps<AuthStackParamList, T>;

export type HomeScreenProps = AppStackNavigatorScreenProps<'Home'>;
export type LoginScreenProps = AuthNavigatorScreenProps<'Login'>;
export type SettingsScreenProps = AppStackNavigatorScreenProps<'Settings'>;
export type ProductsScreenProps = AppStackNavigatorScreenProps<'Products'>;
export type ProductDetailsScreenProps =
	AppStackNavigatorScreenProps<'ProductDetails'>;

export type ProductsScreenNavigationProp = ProductsScreenProps['navigation'];

type AppParamList = AppStackParamList & AuthStackParamList;

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace ReactNavigation {
		interface RootParamList extends AppParamList {}
	}
}
