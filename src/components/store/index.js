import {createStore, combineReducers} from 'redux';
import { dataReducer } from './dataReduser';
import { tokenReducer } from './tokenReducer';

const rootRedusers = combineReducers({
    data: dataReducer,
    token: tokenReducer,
})


export const store = createStore(rootRedusers)