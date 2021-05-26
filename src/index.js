import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Orderpage from './Component/Orderpage';
import { Provider } from 'react-redux';
import Store from './Component/Store';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Orderpage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
