import { createContext, useContext } from 'react';

export interface Session {
	isAuthenticated: boolean;
	logIn: (username: string, password: string) => Promise<void>;
	logOut: () => void;
}

const initialSession: Session = {
	isAuthenticated: false,
	logIn: async () => {}, // logIn should be set up in SessionProvider
	logOut: () => {}, // logOut should be set up in SessionProvider
};

export const SessionContext = createContext<Session>(initialSession);
export const useSessionContext = () => useContext(SessionContext);
