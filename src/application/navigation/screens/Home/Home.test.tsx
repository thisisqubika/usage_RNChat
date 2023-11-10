import { fireEvent, render } from '@testing-library/react-native';
import { HomeScreenProps } from 'application/navigation/types';
import React from 'react';
import { strings } from 'services/localization';
import withProviders from 'testing/utils/render';
import { partial } from 'types/utils';
import Home from './Home';

describe('<Home />', () => {
	it('navigates to settings when the settings text is pressed', () => {
		const homeProps = partial<HomeScreenProps>({
			navigation: {
				navigate: jest.fn(),
			},
		});

		const { getByText } = render(withProviders(<Home {...homeProps} />));

		fireEvent.press(getByText(strings.home.goToSettings));

		expect(homeProps.navigation.navigate).toHaveBeenCalledWith('Settings');
	});
});
