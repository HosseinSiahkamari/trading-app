import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Modal from 'react-modal';

// const express = require('express');
// const cors = require('cors');

// const app = express();

// app.use(cors({
//   origin:"http://localhost:3000",
// }));






const root = ReactDOM.createRoot(document.getElementById('root'));

Modal.setAppElement('#root'); // یا انتخاب‌گر مناسب

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


