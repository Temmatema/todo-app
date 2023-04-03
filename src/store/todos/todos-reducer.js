import {ADD_TODO, DONE_TODO, DELETE_TODO, CLEAR_COMPLETED} from "./todos-actions";

export const todoReducer = (state = [], action) =>  {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, {
                id: action.id,
                text: action.text,
                isActive: action.isActive
            }];
        }
        case DONE_TODO: {
            return state.map(el => el.id === action.id ? {...el, isActive: action.isActive} : el)
        }
        case DELETE_TODO: {
            return state.filter(el => el.id !== action.id);
        }
        case CLEAR_COMPLETED: {
            return state.filter(el => !el.isActive);
        }
        default:
            return state;
    }
}
