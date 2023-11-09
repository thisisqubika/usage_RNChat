import { createContext, useContext } from 'react';

export interface Session {
	isAuthenticated: boolean;
	isPendingLogIn: boolean;
	logIn: (username: string, password: string) => void;
	logInError: Error | null;
	logOut: () => void;
}

const initialSession: Session = {
	isAuthenticated: false,
	isPendingLogIn: false,
	logIn: async () => {}, // logIn should be set up in SessionProvider
	logInError: null,
	logOut: () => {}, // logOut should be set up in SessionProvider
};

export const SessionContext = createContext<Session>(initialSession);
export const useSessionContext = () => useContext(SessionContext);
