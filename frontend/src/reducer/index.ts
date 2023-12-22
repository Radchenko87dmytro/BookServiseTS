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

const getContentSlicer = createSlice({
    name: 'getContentState',
    initialState: { content: [] },
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload;
        },
    },
});

export const {
    actions: { setBooks },
    reducer: booksReducer,
} = booksSlicer;

export const {
    actions: { setContent },
    reducer: contentReducer,
} = getContentSlicer;
