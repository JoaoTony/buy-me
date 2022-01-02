/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { store, persistor } from '../store';
import NavBar from '../components/navbar';
import { LIGHT } from '../styles/themes/light';
import { usePersistedState } from '../utils/usePersistedState';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme] = usePersistedState<DefaultTheme>('theme', LIGHT);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <NavBar />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
