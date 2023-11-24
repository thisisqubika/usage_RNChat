import { fireEvent, render } from '@testing-library/react-native';
import { LoginScreenProps } from 'application/navigation/types';
import React from 'react';
import SessionService from 'services/api/endpoints/session';
import { strings } from 'services/localization';
import withProviders from 'testing/utils/render';
import { partial } from 'types/utils';
import Login from './Login';

jest.mock('services/api/session', () => ({
	logIn: jest.fn(),
}));

test('sends correct information to backend when logging in', () => {
	const testUsername = 'testUser';
	const testPassword = 'testPass';
	const loginProps = partial<LoginScreenProps>({});

	const { getByPlaceholderText, getByText } = render(
		withProviders(<Login {...loginProps} />),
	);

	fireEvent.changeText(
		getByPlaceholderText(strings.login.username),
		testUsername,
	);
	fireEvent.changeText(
		getByPlaceholderText(strings.login.password),
		testPassword,
	);
	fireEvent.press(getByText(strings.login.button));

	expect(SessionService.logIn).toHaveBeenCalledWith({
		username: testUsername,
		password: testPassword,
	});
});
