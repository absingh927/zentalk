import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createAppStore } from './store';
import { Provider } from 'react-redux';

import './styles/css/zentalk.css'

const store = createAppStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('zentalk-root') as HTMLElement
);
