import { configureStore } from '@reduxjs/toolkit';
import { booksReducer } from '../reducer';
import { contentReducer } from '../reducer';

export const store = configureStore({
    reducer: { booksReducer, contentReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
