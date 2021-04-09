import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
const mongoose = require('mongoose');
// fix teh config error 
//const config = require('../config');
uri = config.URI;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => {
        console.error('Failed to connect to mongoDB:', e.message);
    })

const db = mongoose.connection;

module.exports = db;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
