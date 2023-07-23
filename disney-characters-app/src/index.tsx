import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import startBrowserMsw from 'mocks/browser.dev';

import App from './App';
import { setupStore } from './common/api/store/store';
import Toast from './common/components/Toast/Toast';
import reportWebVitals from './reportWebVitals';

import './index.scss';

startBrowserMsw();

const store = setupStore();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    <Toast />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
