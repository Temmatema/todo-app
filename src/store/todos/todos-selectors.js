import {filterTodos} from "../filters/filter-reducer";
export const selectTodos = state => filterTodos(state, state.filterReducer);
