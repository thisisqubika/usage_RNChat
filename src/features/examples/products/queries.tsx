import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { default as ProductService } from 'services/api/endpoints/products';

const PAGINATION_LIMIT = 10;

export const useProducts = () =>
	useInfiniteQuery({
		initialPageParam: 0, // `skip` param
		queryKey: ['products', 'list'],
		queryFn: ({ pageParam: skip }) =>
			ProductService.fetchProductList({
				skip,
				limit: PAGINATION_LIMIT,
			}),
		// ..................  v last page v
		getNextPageParam: ({ total, limit, skip }) =>
			total > skip + limit ? skip + limit : undefined,
		select: (data) => data.pages.flatMap((page) => page.products),
	});

export const useProductDetails = (id: number) =>
	useQuery({
		queryKey: ['products', 'details', id],
		queryFn: () => ProductService.fetchProductDetails({ id }),
	});
