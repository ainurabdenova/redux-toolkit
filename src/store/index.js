import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../store/slice/todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
})

