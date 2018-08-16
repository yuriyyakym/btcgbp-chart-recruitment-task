import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import registerServiceWorker from './registerServiceWorker';
import {
  reducer as rootReducer,
  saga as rootSaga
} from './store';
import App from 'modules/app';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const reduxMiddlewares = [ sagaMiddleware ];
const store = createStore(rootReducer, applyMiddleware(...reduxMiddlewares));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
