import { User } from 'features/session/slice';

const SessionService = {
	login: async ({ email = '', password = '' }): Promise<User> => {
		return new Promise((resolve, reject) => {
			if (email && password) {
				resolve({ email });
			} else {
				reject('Please enter email and password');
			}
		});
	},
	logout: async () => {
		return new Promise(resolve => setTimeout(resolve, 1000));
	},
};

export default SessionService;
