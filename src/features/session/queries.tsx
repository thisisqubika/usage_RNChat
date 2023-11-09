import { useMutation } from '@tanstack/react-query';
import SessionService from 'services/api/endpoints/session';

export const useLogIn = () => useMutation({ mutationFn: SessionService.logIn });
