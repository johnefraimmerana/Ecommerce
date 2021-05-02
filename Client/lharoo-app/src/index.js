import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.js';
import 'popper.js/dist/umd/popper.js';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));

