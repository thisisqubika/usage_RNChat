import { Product } from 'features/examples/products/types';
import { api } from '../axiosInstance';

interface ProductListRequest {
	limit: number;
	skip: number;
}

interface ProductListResponse {
	limit: number;
	products: Product[];
	skip: number;
	total: number;
}

interface ProductDetailsRequest {
	id: number;
}

const ProductService = {
	fetchProductList: async (
		req: ProductListRequest,
	): Promise<ProductListResponse> => {
		const { data } = await api.get<ProductListResponse>(
			'https://dummyjson.com/auth/products', // TODO use baseURL
			{
				params: req,
			},
		);
		return data;
	},
	fetchProductDetails: async (req: ProductDetailsRequest) => {
		const { data } = await api.get<Product>(
			`https://dummyjson.com/auth/products/${req.id}`, // TODO use baseURL
		);
		return data;
	},
};

export default ProductService;
