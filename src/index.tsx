import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import { history, configureAppStore } from '@store';
import { ConnectedRouter } from "connected-react-router";


const store = configureAppStore();

ReactDOM.render(
  <Provider
    store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

