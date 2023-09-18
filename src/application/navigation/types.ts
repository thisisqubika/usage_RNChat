import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	Home: undefined;
	Login: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'Home',
	'Login'
>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
