import { useTheme } from '@react-navigation/native';
import { spacing } from 'application/theme';
import { radius } from 'application/theme/dimens';
import { shadows } from 'application/theme/themes';
import { Todo } from 'features/examples/todos/types';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import { Body, H2 } from 'ui/text';

interface TodoCardProps {
	todo: Todo;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
	const { colors } = useTheme();
	const shadowColor: ViewStyle = {
		shadowColor: todo.completed ? colors.error : colors.primary,
	};
	const cardStyle: ViewStyle = { backgroundColor: colors.card };

	return (
		<View style={[styles.card, cardStyle, shadows.primary, shadowColor]}>
			<H2>{todo.title}</H2>
			{/* eslint-disable-next-line react-native/no-raw-text */}
			<Body>ID: {todo.id}</Body>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: radius.l,
		padding: spacing.l,
	},
});

export default TodoCard;
