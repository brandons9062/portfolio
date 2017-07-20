import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './index.css'

import App from './App'
import Navbar from './Navbar'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <a name="#top">
                    <App />
                </a>
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
