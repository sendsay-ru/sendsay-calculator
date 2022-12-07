import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';
import './assets/index.scss';
import App from './components/App/App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5D5FEF',
    },
    secondary: {
      main: '#F3F4F6',
    },
  },
  typography: {
    htmlFontSize: 10,
  },
});

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
