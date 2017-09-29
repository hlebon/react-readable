import React from 'react';
import ReactDOM from 'react-dom';
import  'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './components/App';

import reducer from './reducers'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';


const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }
  
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer
)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
