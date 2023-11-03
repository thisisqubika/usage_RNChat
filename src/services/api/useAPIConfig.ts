import { useSetUpTokenWithAPI } from './useSetUpTokenWithAPI';
import { useSetUpUnauthorizedCallback } from './useSetUpUnauthorizedCallback';

interface APIConfiguration {
	token: string | undefined;
	onUnauthorized: () => void;
}

/**
 * Call this hook once at a top-level node in your hierarchy
 *
 * @param config the desired configuration of the API layer
 */
export const useAPIConfig = (config: APIConfiguration) => {
	useSetUpTokenWithAPI(config.token);
	useSetUpUnauthorizedCallback(config.onUnauthorized);
};
