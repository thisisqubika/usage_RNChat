import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TodoDetailsScreenProps } from 'application/navigation/types';
import { spacing } from 'application/theme';

const styles = StyleSheet.create({
	container: {
		padding: spacing.xl,
	},
});

const TodoDetails: React.FC<TodoDetailsScreenProps> = () => {
	// use query useTodoDetails(route.params.id)

	return (
		<View style={styles.container}>
			<></>
		</View>
	);
};

export default TodoDetails;
