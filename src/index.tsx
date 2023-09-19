import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeColorProvider } from './contexts/theme'
import { createTheme, ThemeProvider } from '@mui/material/styles';

import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const theme = createTheme({
  typography: {
    fontFamily: 'Kanit, sans-serif', // กำหนดฟอนต์เป็น Kanit และฟอนต์สำรอง sans-serif
  },
});

root.render(
  <ThemeColorProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ThemeColorProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
