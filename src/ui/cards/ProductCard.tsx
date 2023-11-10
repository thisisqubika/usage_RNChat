import { useTheme } from '@react-navigation/native';
import { shadows, spacing } from 'application/theme';
import { radius } from 'application/theme/dimens';
import { Product } from 'features/examples/products/types';
import React, { useCallback } from 'react';
import {
	Pressable,
	PressableStateCallbackType,
	StyleProp,
	StyleSheet,
	ViewStyle,
} from 'react-native';
import { Body, H2 } from 'ui/text';

interface ProductCardProps {
	product: Product;
	onPress: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress }) => {
	const { colors } = useTheme();

	const cardStyle = useCallback(
		({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> => [
			styles.card,
			shadows.primary,
			{
				backgroundColor: colors.card,
			},
			pressed ? shadows.pressed : {},
		],
		[colors],
	);

	return (
		<Pressable style={cardStyle} onPress={onPress}>
			<H2>{product.title}</H2>
			{/* eslint-disable-next-line react-native/no-raw-text */}
			<Body>ID: {product.id}</Body>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: radius.l,
		padding: spacing.l,
	},
});

export default ProductCard;
