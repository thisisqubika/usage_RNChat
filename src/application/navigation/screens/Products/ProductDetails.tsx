import React, { useState } from 'react';
import { ActivityIndicator, Image, StyleSheet, View } from 'react-native';

import { ProductDetailsScreenProps } from 'application/navigation/types';
import { spacing } from 'application/theme';
import { radius } from 'application/theme/dimens';
import { useProductDetails } from 'features/examples/products/queries';
import { strings } from 'services/localization';
import { Body, H1 } from 'ui/text';

const ProductDetails: React.FC<ProductDetailsScreenProps> = ({ route }) => {
	const {
		data: product,
		isSuccess,
		isLoading,
		isError,
	} = useProductDetails(route.params.id);
	const [loadingImage, setLoadingImage] = useState(false);

	if (!isSuccess) {
		return (
			<View style={styles.container}>
				{isLoading && <ActivityIndicator />}
				{isError && <Body>{strings.products.error}</Body>}
			</View>
		);
	}

	const image = product.images[0];
	const brandText = `${strings.products.brand}: ${product.brand}`;

	return (
		<View style={styles.container}>
			{loadingImage && <ActivityIndicator size="small" />}
			{image && (
				<Image
					style={loadingImage ? styles.hiddenImage : styles.image}
					source={{ uri: image }}
					onLoadStart={() => setLoadingImage(true)}
					onLoadEnd={() => setLoadingImage(false)}
				/>
			)}
			{product.title && <H1>{product.title}</H1>}
			{product.brand && <Body>{brandText}</Body>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		gap: spacing.m,
		justifyContent: 'center',
		padding: spacing.xl,
	},
	hiddenImage: {
		height: 0,
	},
	image: {
		aspectRatio: 1,
		borderRadius: radius.l,
		height: 200,
	},
});

export default ProductDetails;
