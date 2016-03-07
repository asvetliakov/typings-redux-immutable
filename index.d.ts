import {IReducer, IReducerMap} from "redux";

export function combineReducers(reducers: IReducerMap): IReducer<any>;
export function combineReducers<TState>(reducers: IReducerMap): IReducer<TState>;
