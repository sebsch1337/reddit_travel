import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './app/app';
import store from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);