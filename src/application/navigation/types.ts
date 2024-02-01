import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ChatThread } from 'react-native-chat-sdk/methods/chatHooks/getThreadData';

export type RootStackParamList = {
	Login: undefined;
	ChatsList: undefined;
	Chat: ChatThread;
};

export type HomeScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'Login'
>;

export type ChatsListScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'ChatsList'
>;

export type ChatScreenProps = NativeStackScreenProps<
	RootStackParamList,
	'Chat'
>;
declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
