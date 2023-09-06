import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Navigator } from './navigation';
import { Provider } from 'react-redux';
import { setupStore } from '../services/store/store';

const store = setupStore();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Navigator />
      </>
    </Provider>
  );
}

export default App;
