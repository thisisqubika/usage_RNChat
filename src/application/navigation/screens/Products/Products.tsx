import { useTheme } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { FlashList, ListRenderItem } from '@shopify/flash-list';
import { ProductsScreenProps } from 'application/navigation/types';
import { spacing } from 'application/theme';
import { useProducts } from 'features/examples/products/queries';
import { Product } from 'features/examples/products/types';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { strings } from 'services/localization';
import ProductCard from 'ui/cards/ProductCard';
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
		marginVertical: spacing.xs,
	},
	itemSeparator: {
		height: spacing.l,
	},
});

const keyExtractor = (product: Product, index: number) =>
	`product-${product.id}-${index}`;

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

const Products: React.FC<ProductsScreenProps> = ({ navigation }) => {
	const { colors } = useTheme();
	const {
		data: products,
		isFetching,
		isFetchingNextPage,
		isError,
		isSuccess,
		fetchNextPage,
	} = useProducts();

	const onPress = useCallback(
		(id: number) => () => {
			navigation.navigate('ProductDetails', { id });
		},
		[navigation],
	);

	const renderItem: ListRenderItem<Product> = useCallback(
		({ item }) => (
			<>
				<ProductCard product={item} onPress={onPress(item.id)} />
				<ItemSeparator />
			</>
		),
		[onPress],
	);

	if (!isSuccess) {
		return (
			<View style={[styles.container, styles.centered]}>
				{isFetching && <ActivityIndicator />}
				{isError && <Body>{strings.products.error}</Body>}
			</View>
		);
	}

	return (
		<View style={{ ...styles.container, backgroundColor: colors.background }}>
			<FlashList
				data={products}
				renderItem={renderItem}
				keyExtractor={keyExtractor}
				contentContainerStyle={styles.contentContainer}
				estimatedItemSize={110}
				onEndReached={fetchNextPage}
				ListFooterComponent={<Footer isFetchingNextPage={isFetchingNextPage} />}
			/>
		</View>
	);
};

export default Products;
