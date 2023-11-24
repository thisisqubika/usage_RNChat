import { User } from 'features/session/slice';
import { api } from '../axiosInstance';

interface LogInRequest {
	username: string;
	password: string;
}

interface LogInResponse {
	email: string;
	firstName: string;
	gender: string;
	id: number;
	image?: string;
	lastName: string;
	token: string;
	username: string;
}

// Sample login: username=kminchelle password=0lelplR
const SessionService = {
	logIn: async (req: LogInRequest): Promise<User> => {
		const { data } = await api.post<LogInResponse>('/auth/login', req);
		return data;
	},
	logOut: async () => {
		return new Promise((resolve) => setTimeout(resolve, 1000));
	},
};

export default SessionService;
