/* eslint-disable no-duplicate-case */
/* eslint-disable no-unreachable */
import { createStore, combineReducers } from 'redux';

import numerosReducer from './reducers/numeros'

const reducers = combineReducers({
    numeros: numerosReducer,
    
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig