import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/assets/styles/theme';
import AppNavigator from './navigation/AppNavigator';
import AppContextProvider from './src/context/AppProvider';

export default function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <AppNavigator/>
      </ThemeProvider>
    </AppContextProvider>
  );
}
