import { createSlice } from "@reduxjs/toolkit";

const initialStat = {
    todo: [
        {
            id: 1,
            title: 'Todo 1',
            completed: false
        },
        {
            id: 2,
            title: 'Todo 2',
            completed: false
        },
        {
            id: 3,
            title: 'Todo 3',
            completed: false    
        }
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialStat,
    reducers: {
        addTodo: (state, action) => {
            state.todo.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todo = state.todo.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todo.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
