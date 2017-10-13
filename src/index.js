import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware  } from 'redux'
import { fetchPosts, fetchCategories } from './actions/'
import {  } from './reducers'
import MainApp from './mainApp'
import reducer from './reducers'
import  'bootstrap/dist/css/bootstrap.css'
import './index.css';

import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware
    )
)

store.dispatch(fetchPosts()).then(()=>console.log(store.getState()))
store.dispatch(fetchCategories()).then(()=>console.log(store.getState()))


ReactDOM.render(
    <Provider store={store}>
            <MainApp />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();


