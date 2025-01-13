// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';  // Ensure the correct path to the store

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>  // Provide the Redux store to the app
      <App />
    </Provider>
  </BrowserRouter>
);
