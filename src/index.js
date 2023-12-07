import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

ReactDOM.render(
  <Provider store={store}>
    <Router basename='Vadim-Kudin-06-12-2023'>
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
