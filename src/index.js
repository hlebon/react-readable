import React from 'react';
import ReactDOM from 'react-dom';
import  'bootstrap/dist/css/bootstrap.css'
import './index.css';
import MainApp from './mainApp';
import reducer from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer
)


ReactDOM.render(
    <Provider store={store}>
        <MainApp />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
