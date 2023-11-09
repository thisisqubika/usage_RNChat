import { useTheme } from '@react-navigation/native';
import { shadows, spacing } from 'application/theme';
import { radius } from 'application/theme/dimens';
import { Todo } from 'features/examples/todos/types';
import React, { useCallback } from 'react';
import {
	Pressable,
	PressableStateCallbackType,
	StyleProp,
	StyleSheet,
	ViewStyle,
} from 'react-native';
import { Body, H2 } from 'ui/text';

interface TodoCardProps {
	todo: Todo;
	onPress: () => void;
}

const TodoCard: React.FC<TodoCardProps> = ({ todo, onPress }) => {
	const { colors } = useTheme();

	const cardStyle = useCallback(
		({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> => [
			styles.card,
			shadows.primary,
			{
				backgroundColor: colors.card,
				shadowColor: todo.completed ? colors.primary : colors.error,
			},
			pressed ? shadows.pressed : {},
		],
		[colors, todo.completed],
	);

	return (
		<Pressable style={cardStyle} onPress={onPress}>
			<H2>{todo.title}</H2>
			{/* eslint-disable-next-line react-native/no-raw-text */}
			<Body>ID: {todo.id}</Body>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: radius.l,
		padding: spacing.l,
	},
});

export default TodoCard;
