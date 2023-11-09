/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { TodoDetailsScreenProps } from 'application/navigation/types';
import { spacing } from 'application/theme';
import { useTodoDetails } from 'features/examples/todos/queries';
import { strings } from 'services/localization';
import { Body, H1 } from 'ui/text';

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
		padding: spacing.xl,
	},
});

const TodoDetails: React.FC<TodoDetailsScreenProps> = ({ route }) => {
	const {
		data: todo,
		isSuccess,
		isLoading,
		isError,
	} = useTodoDetails(route.params.id);

	if (!isSuccess) {
		return (
			<View style={styles.container}>
				{isLoading && <ActivityIndicator />}
				{isError && <Body>{strings.todos.error}</Body>}
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<H1>{todo.title}</H1>
			<Body>ID: {todo.id}</Body>
			<Body>
				{strings.todos.completed} {strings.todos[`${todo.completed}`]}
			</Body>
		</View>
	);
};

export default TodoDetails;
