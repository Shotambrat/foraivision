import {createStore, combineReducers} from 'redux';
import filesReducer from './filesReducer';
import photosReducer from './photoReducer.js';
import { tokenReducer } from './tokenReducer';

const rootRedusers = combineReducers({
    photos: photosReducer,
    files: filesReducer,
    token: tokenReducer
})


export const store = createStore(rootRedusers)