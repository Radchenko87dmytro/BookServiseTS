import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes';
import { Books } from './screens/Books';
import { Book } from './screens/Book';
import { book } from './types';
import './index.css';

const mock: book[] = [
    { id: 1, name: 'book1' },
    { id: 2, name: 'book2' },
    { id: 3, name: 'book3' },
    { id: 4, name: 'book4' },
    { id: 5, name: 'book5' },
];

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/books',
        element: <Books />,
    },
    {
        path: '/book/:id',
        element: <Book books={mock} />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
