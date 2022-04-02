import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider ,createTheme } from '@mui/material';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import 'styles.css';

import App from 'App.jsx';

const queryClient = new QueryClient();
const theme = createTheme({
  typography: {
    fontFamily: 'Raleway, Roboto, -apple-system, Arial, sans-serif',
  },
  palette: {
    primary: {
      main: '#5457B6',
    },
    secondary: {
      main: '#68727e',
    },
    error: {
      main: '#ee6368',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
