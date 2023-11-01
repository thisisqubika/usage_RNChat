import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamList = {
	Home: undefined;
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

type AppParamList = AppStackParamList & AuthStackParamList;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends AppParamList {}
	}
}
