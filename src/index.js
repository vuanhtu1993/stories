import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './components/Global';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { AuthProvider } from './contexts/AuthContext';

import { lightTheme } from './theme';
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    <AuthProvider>
      <App />
    </AuthProvider>
  </ThemeProvider>
  , document.getElementById('root'));
