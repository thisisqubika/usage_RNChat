import { useInfiniteQuery } from '@tanstack/react-query';
import TodoService from 'services/api/endpoints/todos';

const TODOS_PAGINATION_PAGE_SIZE = 10;

export const useTodos = () => {
	return useInfiniteQuery({
		initialPageParam: 1,
		queryKey: ['todos', 'list'],
		queryFn: ({ pageParam }) =>
			TodoService.fetchTodoList({
				page: pageParam,
				limit: TODOS_PAGINATION_PAGE_SIZE,
			}),
		getNextPageParam: ({ nextPage }) => nextPage,
		select: (data) => data.pages.flatMap((page) => page.todos),
	});
};
