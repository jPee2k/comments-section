import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import FontStyles from './fonts/fontStyles.js';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import 'styles.css';

import App from 'App.jsx';

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <FontStyles/>
      <App/>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
