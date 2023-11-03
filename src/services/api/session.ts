import { User } from 'features/session/slice';
import { api } from './axiosInstance';

interface LogInRequest {
	username: string;
	password: string;
}

interface LogInResponse {
	id: number;
	username: string;
	email: string;
	firstName: string;
	lastName: string;
	gender: string;
	image?: string;
	token: string;
}

// Sample login: username=kminchelle password=0lelplR
const SessionService = {
	logIn: async (req: LogInRequest): Promise<User> => {
		const {
			data: { email },
		} = await api.post<LogInResponse>('https://dummyjson.com/auth/login', req);
		return { email };
	},
	logOut: async () => {
		return new Promise((resolve) => setTimeout(resolve, 1000));
	},
};

export default SessionService;
