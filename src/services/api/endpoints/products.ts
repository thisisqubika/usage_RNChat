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
		const { data } = await api.get<ProductListResponse>('/auth/products', {
			params: req,
		});
		return data;
	},
	fetchProductDetails: async (req: ProductDetailsRequest) => {
		const { data } = await api.get<Product>(`/auth/products/${req.id}`);
		return data;
	},
};

export default ProductService;
