import { useTheme } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { TodosScreenProps } from 'application/navigation/types';
import { spacing } from 'application/theme';
import { useTodos } from 'features/examples/todos/queries';
import { Todo } from 'features/examples/todos/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { strings } from 'services/localization';
import TodoCard from 'ui/cards/TodoCard';
import { Body } from 'ui/text';

const styles = StyleSheet.create({
	centered: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		flex: 1,
	},
	contentContainer: {
		padding: spacing.xl,
	},
	fetchingNextPageIndicator: {
		alignSelf: 'center',
		marginVertical: 8,
	},
	itemSeparator: {
		height: spacing.l,
	},
});

const keyExtractor = (todo: Todo, index: number) => `todo-${todo.id}-${index}`;

interface FooterProps {
	isFetchingNextPage: boolean;
}

const Footer: React.FC<FooterProps> = ({ isFetchingNextPage }) => {
	const { bottom } = useSafeAreaInsets();
	return (
		<View style={{ marginBottom: bottom }}>
			{isFetchingNextPage && (
				<ActivityIndicator style={styles.fetchingNextPageIndicator} />
			)}
		</View>
	);
};

const ItemSeparator = () => <View style={styles.itemSeparator} />;

const Todos: React.FC<TodosScreenProps> = ({ navigation }) => {
	const { colors } = useTheme();
	const {
		data: todos,
		isFetching,
		isFetchingNextPage,
		isError,
		isSuccess,
		fetchNextPage,
	} = useTodos();

	const onPress = useCallback(
		(id: number) => () => {
			navigation.navigate('TodoDetails', { id });
		},
		[navigation],
	);

	const renderItem: ListRenderItem<Todo> = useCallback(
		({ item }) => (
			<>
				<TodoCard todo={item} onPress={onPress(item.id)} />
				<ItemSeparator />
			</>
		),
		[onPress],
	);

	if (!isSuccess) {
		return (
			<View style={[styles.container, styles.centered]}>
				{isFetching && <ActivityIndicator />}
				{isError && <Body>{strings.todos.error}</Body>}
			</View>
		);
	}

	return (
		<View style={{ ...styles.container, backgroundColor: colors.background }}>
			<FlashList
				data={todos}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				contentContainerStyle={styles.contentContainer}
				estimatedItemSize={116}
				onEndReached={fetchNextPage}
				ListFooterComponent={<Footer isFetchingNextPage={isFetchingNextPage} />}
			/>
		</View>
	);
};

export default Todos;
