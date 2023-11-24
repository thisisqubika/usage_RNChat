import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import SessionService from 'services/api/endpoints/session';
import { logIn } from './slice';

export const useLogIn = () => {
	const dispatch = useDispatch();

	return useMutation({
		mutationFn: SessionService.logIn,
		onSuccess: (newUser) => dispatch(logIn(newUser)),
	});
};
