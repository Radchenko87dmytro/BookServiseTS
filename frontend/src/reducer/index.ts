import { createSlice } from '@reduxjs/toolkit';

const booksSlicer = createSlice({
    name: 'bookState',
    initialState: { books: [] },
    reducers: {
        setBooks: (state, action) => {
            state.books = action.payload;
        },
    },
});

export const {
    actions: { setBooks },
    reducer: booksReducer,
} = booksSlicer;
