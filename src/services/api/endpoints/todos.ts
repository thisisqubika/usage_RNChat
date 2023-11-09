import { todosApi } from '../axiosInstance';

interface TodoListRequest {
	page: number;
	limit: number;
}

interface TodoDetailsRequest {
	id: number;
}

interface Todo {
	completed: boolean;
	id: number;
	title: string;
	userId: number;
}

interface TodoListResponse {
	todos: Todo[];
	nextPage?: number;
}

const TodoService = {
	fetchTodoList: async (req: TodoListRequest): Promise<TodoListResponse> => {
		const { data } = await todosApi.get<Todo[]>('/todos', {
			params: { _page: req.page, _limit: req.limit },
		});
		// `nextPage` is mocking a real use case, in which the endpoint returns the next page
		return { todos: data, nextPage: req.page > 19 ? undefined : req.page + 1 }; // Assumes limit is 10
	},
	fetchTodoDetails: async (req: TodoDetailsRequest) => {
		const { data } = await todosApi.get<Todo>(`/todos/${req.id}`);
		return data;
	},
};

export default TodoService;
