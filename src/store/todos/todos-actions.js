export const ADD_TODO = 'ADD_TODO';
export const DONE_TODO = 'DONE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const addTodo = (text) => ({
    type: ADD_TODO,
    text,
    id: Date.now(),
    isActive: false
});

export const clearCompleted = () => ({
    type: CLEAR_COMPLETED,
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
});

export const doneTodo = (id, isActive) => ({
    type: DONE_TODO,
    id,
    isActive
});
