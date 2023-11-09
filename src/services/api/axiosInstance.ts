import axios from 'axios';
import Config from 'react-native-config';

// Auth set up is done inside useAPIConfig
export const api = axios.create({ baseURL: Config.API_BASE_URL });

// Sample todos api
export const todosApi = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});
