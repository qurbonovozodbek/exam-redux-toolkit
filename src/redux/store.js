import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './createTodo';

const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});

export default store;
