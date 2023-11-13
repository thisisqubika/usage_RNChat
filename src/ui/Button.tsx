import { useTheme } from '@react-navigation/native';
import { radius, spacing } from 'application/theme/dimens';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonLabel } from 'ui/text';
interface ButtonProps {
	title: string;
	onPress: () => void;
	testID?: string;
	disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	title,
	onPress,
	testID,
	disabled,
}) => {
	const { colors } = useTheme();

	return (
		<TouchableOpacity
			style={[styles.container, { backgroundColor: colors.primary }]}
			onPress={onPress}
			testID={testID}
			disabled={disabled}>
			<ButtonLabel>{title}</ButtonLabel>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		borderRadius: radius.s,
		paddingVertical: spacing.s,
	},
});
