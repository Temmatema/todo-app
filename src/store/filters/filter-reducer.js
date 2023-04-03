import {SET_STATE} from "./filter-actions";

export const filterReducer = (state = 'all', action) => {
    switch (action.type) {
        case SET_STATE: {
            return action.name;
        }
        default:
            return state;
    }
}

export const filterTodos = (state, filter) => {
    switch (filter) {
        case 'all': {
            return state.todoReducer;
        }
        case 'active': {
            return state.todoReducer.filter(el => !el.isActive);
        }
        case 'completed': {
            return state.todoReducer.filter(el => el.isActive)
        }
        default:
            return state;
    }
}
