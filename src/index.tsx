import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes';
import { Books } from './screens/Books';
import { Book } from './screens/Book';
import { book } from './types';
import './index.css';
import { Hyperlink } from './components/Hyperlink';

const mock: book[] = [
    {
        id: 1,
        name: 'book1',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem in urna feugiat vulputate. Sed cursus, quam nec posuere gravida, massa lectus pretium tellus, egestas laoreet magna sapien sed arcu. Nullam nunc tellus, venenatis sit amet nibh consectetur, posuere accumsan nulla. Donec vel pretium leo. Nam blandit iaculis auctor. Nunc lobortis purus quis velit malesuada, vitae elementum erat malesuada. Donec luctus mollis elit, sed vestibulum quam consequat vel. Aliquam mattis dolor neque, eu malesuada velit volutpat facilisis. Suspendisse potenti. Quisque tempor blandit lacus nec dignissim. Duis enim tellus, consequat non ultrices non, vestibulum sit amet sapien. In hac habitasse platea dictumst.',
    },
    {
        id: 2,
        name: 'book2',
        content:
            'Fusce ac orci velit. Vivamus varius hendrerit finibus. Praesent iaculis convallis quam, eu varius ex tempus in.',
    },
    {
        id: 3,
        name: 'book3',
        content:
            'Mauris tincidunt bibendum commodo. Donec eu lacinia mi. Aliquam erat volutpat.',
    },
    {
        id: 4,
        name: 'book4',
        content:
            'Aenean vitae vestibulum mauris, ac dignissim odio. Nullam feugiat mi enim.',
    },
    {
        id: 5,
        name: 'book5',
        content:
            'Sed dictum tempus est, vitae malesuada magna facilisis sit amet. Nunc a scelerisque sapien.',
    },
];

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
    {
        path: '/books',
        element: <Books books={mock} />,
    },
    {
        path: '/book/:id/:page',
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
