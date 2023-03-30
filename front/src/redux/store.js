import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const composeEnHancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const store = createStore(
  reducer,
  composeEnHancer(applyMiddleware(thunkMiddleware))
);

export default store;