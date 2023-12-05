import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes';
import { Books } from './screens/Books';
import './index.css';
import { BookDetails } from './screens/BookDetails';
import { store } from './store';
import { Provider } from 'react-redux';
import { Login } from './screens/Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/books',
        element: <Books />, //bookHandler={bookHandler}
    },
    {
        path: '/book/:authorTitle', //'/book/:id/:page'
        element: <BookDetails />,
    },
    {
        path: '/login',
        element: <Login />,
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
