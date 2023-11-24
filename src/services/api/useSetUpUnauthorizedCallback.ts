import { useEffect, useRef } from 'react';

import { api } from './axiosInstance';

/**
 * Sets `onUnauthorized` function in axios interceptor to run when a response's
 * status is 401. Make sure to invalidate or refresh the token inside the
 * `onUnauthorized` callback
 *
 * @param onUnauthorized 401 status handler callback
 */
export const useSetUpUnauthorizedCallback = (onUnauthorized: () => void) => {
	const onUnauthorizedRef = useRef(onUnauthorized);
	useEffect(() => {
		onUnauthorizedRef.current = onUnauthorized;
	});

	useEffect(() => {
		const httpUnauthorizedInterceptor = api.interceptors.response.use(
			(response) => response,
			(error) => {
				if (error.response.status === 401) {
					onUnauthorizedRef.current();
				}
				return Promise.reject(error);
			},
		);

		return () => {
			api.interceptors.response.eject(httpUnauthorizedInterceptor);
		};
	}, []);
};
