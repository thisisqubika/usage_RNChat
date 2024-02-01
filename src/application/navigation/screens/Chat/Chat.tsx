import { useSessionContext } from '../../../../features/session/SessionContext';
import { useChatDataPaginated } from 'react-native-chat-sdk/methods/chatHooks/getPaginationData';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GiftedChat, IMessage, SendProps } from 'react-native-gifted-chat';
import { useReadMessages } from 'react-native-chat-sdk/methods/chatHooks/readMessages';
import { useSendMessage } from 'react-native-chat-sdk/methods/chatHooks/threadUpdate';
import { ChatScreenProps } from '../../types';
import RenderSend from './GiftedChatRenders/RenderSend';
import RenderChatFooter from './GiftedChatRenders/RenderChatFooter';
import useSendImage from './useSendImage';

export const Chat = ({ route }: ChatScreenProps) => {
	const { userId } = useSessionContext();
	const chatId = route?.params?.id;

	const {
		attachedImage,
		textInput,
		isUploading,
		uploadProgress,
		deviceWidth,
		onSetTextInput,
		onOpenCamera,
		onOpenGallery,
		onRemoveAttached,
		onUploadImage,
	} = useSendImage();

	useReadMessages({ chatId, userId: `${userId}` });

	const { messages, GetMessages, showLoading, isLoadEarlier } =
		useChatDataPaginated(chatId, userId || '');

	const onSend = useSendMessage({
		chatId,
		imageUri: attachedImage,
		onUploadImage,
	});

	const openGalleryHandler = () => {
		onOpenGallery();
	};
	const openCameraHandler = () => {
		onOpenCamera();
	};

	return (
		<SafeAreaView style={styles.safeChatView}>
			<GiftedChat
				messages={messages}
				showAvatarForEveryMessage={false}
				showUserAvatar={false}
				onSend={onSend}
				textInputProps={{
					backgroundColor: '#fff',
					borderRadius: 20,
				}}
				user={{
					_id: `${userId}`,
				}}
				alwaysShowSend
				renderSend={(props: SendProps<IMessage>) =>
					RenderSend(
						props,
						openCameraHandler,
						openGalleryHandler,
						isUploading,
						'https://cdn-icons-png.flaticon.com/512/2956/2956744.png',
						'https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png',
						'https://cdn-icons-png.flaticon.com/512/3106/3106856.png',
					)
				}
				renderChatFooter={() =>
					RenderChatFooter(
						attachedImage,
						onRemoveAttached,
						isUploading,
						deviceWidth,
						uploadProgress,
						'https://cdn-icons-png.flaticon.com/512/5028/5028066.png',
					)
				}
				text={textInput}
				onInputTextChanged={onSetTextInput}
				infiniteScroll
				isLoadingEarlier={showLoading}
				loadEarlier={isLoadEarlier.current}
				onLoadEarlier={GetMessages}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeChatView: {
		flex: 1,
	},
});