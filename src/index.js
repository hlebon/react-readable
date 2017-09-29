import React from 'react';
import ReactDOM from 'react-dom';
import  'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/App';

import reducer from './reducers'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
        <App />,
    document.getElementById('root'));
registerServiceWorker();
