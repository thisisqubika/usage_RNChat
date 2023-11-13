import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { PropsWithChildren, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAPIConfig } from 'services/api/useAPIConfig';
import { SessionContext } from './SessionContext';
import { useLogIn } from './queries';
import { logOut as logOutAction, selectUser } from './slice';

export const SessionProvider = ({ children }: PropsWithChildren) => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const { mutate, isPending: isPendingLogIn, error: logInError } = useLogIn();

	const onUnauthorized = () => dispatch(logOutAction());
	const token = user ? user.token : undefined;

	useAPIConfig({ token, onUnauthorized });

	// Logs out the user when loading the app for the first time
	useEffect(() => {
		(async () => {
			try {
				const isFirstTimeRunningTheApp =
					!(await AsyncStorage.getItem('HAS_RUN_BEFORE'));
				if (isFirstTimeRunningTheApp) {
					await AsyncStorage.setItem('HAS_RUN_BEFORE', 'true');
					dispatch(logOutAction());
				}
			} catch (error) {
				console.error('Error on first time running the app: ', error);
				dispatch(logOutAction());
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const logOut = () => {
		dispatch(logOutAction());
	};

	const logIn = (username: string, password: string) =>
		mutate({ username, password });

	return (
		<SessionContext.Provider
			value={{
				isAuthenticated: !!token,
				isPendingLogIn,
				logIn,
				logInError,
				logOut,
			}}>
			{children}
		</SessionContext.Provider>
	);
};
