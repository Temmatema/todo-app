import {combineReducers} from "@reduxjs/toolkit";
import {todoReducer} from "./todos/todos-reducer";
import {filterReducer} from "./filters/filter-reducer";

const reducer = combineReducers({todoReducer, filterReducer});

export {reducer};
