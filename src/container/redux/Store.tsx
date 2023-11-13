import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { rootReducers } from './reducers';
const Store  =  createStore(rootReducers);
export default Store