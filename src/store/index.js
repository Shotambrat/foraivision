import {createStore, combineReducers} from 'redux';
import filesReducer from './filesReducer';
import photosReducer from './photoReducer.js';

const rootRedusers = combineReducers({
    photos: photosReducer,
    files: filesReducer,
})


export const store = createStore(rootRedusers)