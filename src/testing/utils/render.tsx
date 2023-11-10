import React from 'react';
import { Provider } from 'react-redux';
import { createTestStore } from '../customMocks/redux/createTestStore';

function withProviders(
	component: React.ReactNode,
	initialState = {},
): JSX.Element {
	const store = createTestStore(initialState);
	return <Provider store={store}>{component}</Provider>;
}

export default withProviders;
