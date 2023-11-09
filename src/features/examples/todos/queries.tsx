import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import TodoService from 'services/api/endpoints/todos';

const TODOS_PAGINATION_PAGE_SIZE = 10;

export const useTodos = () =>
	useInfiniteQuery({
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

export const useTodoDetails = (id: number) =>
	useQuery({
		queryKey: ['todos', 'detail', id],
		queryFn: () => TodoService.fetchTodoDetails({ id }),
	});
