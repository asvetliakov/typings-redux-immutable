/// <reference path="../bundle.d.ts" />

import {combineReducers} from 'redux-immutable';
import {createStore} from 'redux';

let store = createStore(combineReducers({
    one: (state = {}, action) => state
}));
