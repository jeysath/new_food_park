import { Reducer } from './Reducer';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"


const middleware = [thunk];

const Store = createStore(Reducer, composeWithDevTools(applyMiddleware(...middleware)))

export default Store;