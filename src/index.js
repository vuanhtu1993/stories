import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './components/Global';
import App from './App';
import { ThemeProvider } from "styled-components";

import {lightTheme} from './theme'
import '@zach.codes/react-calendar/dist/calendar-tailwind.css';

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles/>
    <App />
  </ThemeProvider>
  , document.getElementById('root'));
