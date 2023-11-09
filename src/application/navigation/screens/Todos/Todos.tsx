import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { TodosScreenProps } from 'application/navigation/types';
import { spacing } from 'application/theme';
import { useTodos } from 'features/examples/todos/queries';
import { strings } from 'services/localization';
import { Body } from 'ui/text';

const styles = StyleSheet.create({
	centered: {
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		flex: 1,
		padding: spacing.xl,
	},
	fetchingNextPageIndicator: {
		alignSelf: 'center',
		marginVertical: 8,
	},
});

const Todos: React.FC<TodosScreenProps> = () => {
	const {
		data: todos,
		isFetching,
		isFetchingNextPage,
		isError,
		isSuccess,
	} = useTodos();

	if (!isSuccess) {
		return (
			<View style={[styles.container, styles.centered]}>
				{isFetching && <ActivityIndicator />}
				{isError && <Body>{strings.todos.error}</Body>}
			</View>
		);
	}

	console.log(`todos: ${JSON.stringify(todos)}`);

	return (
		<View style={styles.container}>
			{/* TODO Flashlist */}
			<></>
			{isFetchingNextPage && (
				<ActivityIndicator style={styles.fetchingNextPageIndicator} />
			)}
		</View>
	);
};

export default Todos;
