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
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem in urna feugiat vulputate. Sed cursus, quam nec posuere gravida, massa lectus pretium tellus, egestas laoreet magna sapien sed arcu. Nullam nunc tellus, venenatis sit amet nibh consectetur, posuere accumsan nulla. Donec vel pretium leo. Nam blandit iaculis auctor. Nunc lobortis purus quis velit malesuada, vitae elementum erat malesuada. Donec luctus mollis elit, sed vestibulum quam consequat vel. Aliquam mattis dolor neque, eu malesuada velit volutpat facilisis. Suspendisse potenti. Quisque tempor blandit lacus nec dignissim. Duis enim tellus, consequat non ultrices non, vestibulum sit amet sapien. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem in urna feugiat vulputate. Sed cursus, quam nec posuere gravida, massa lectus pretium tellus, egestas laoreet magna sapien sed arcu. Nullam nunc tellus, venenatis sit amet nibh consectetur, posuere accumsan nulla. Donec vel pretium leo. Nam blandit iaculis auctor. Nunc lobortis purus quis velit malesuada, vitae elementum erat malesuada. Donec luctus mollis elit, sed vestibulum quam consequat vel. Aliquam mattis dolor neque, eu malesuada velit volutpat facilisis. Suspendisse potenti. Quisque tempor blandit lacus nec dignissim. Duis enim tellus, consequat non ultrices non, vestibulum sit amet sapien. In hac habitasse platea dictumst.',
    },
    {
        id: 2,
        name: 'book2',
        content:
            'Fusce ac orci velit. Vivamus varius hendrerit finibus. Praesent iaculis convallis quam, eu varius ex tempus in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies enim nisl, et pulvinar mauris consectetur eleifend. Maecenas eros lectus, consequat eget vulputate a, venenatis in metus. Maecenas ante lorem, ornare vitae nibh eu, vulputate imperdiet sem. Integer tristique urna id interdum maximus. Aenean ut sollicitudin lectus. Aenean tristique non felis at fermentum. Integer egestas dictum tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem in urna feugiat vulputate. Sed cursus, quam nec posuere gravida, massa lectus pretium tellus, egestas laoreet magna sapien sed arcu. Nullam nunc tellus, venenatis sit amet nibh consectetur, posuere accumsan nulla. Donec vel pretium leo. Nam blandit iaculis auctor. Nunc lobortis purus quis velit malesuada, vitae elementum erat malesuada. Donec luctus mollis elit, sed vestibulum quam consequat vel. Aliquam mattis dolor neque, eu malesuada velit volutpat facilisis. Suspendisse potenti. Quisque tempor blandit lacus nec dignissim. Duis enim tellus, consequat non ultrices non, vestibulum sit amet sapien. In hac habitasse platea dictumst.',
    },
    {
        id: 3,
        name: 'book3',
        content:
            'Mauris tincidunt bibendum commodo. Donec eu lacinia mi. Aliquam erat volutpat. Ut et magna sollicitudin, laoreet est sed, feugiat mi. Donec vel condimentum ex. Nullam magna orci, vehicula vitae augue vitae, tempus tincidunt nisi. Duis vulputate euismod mattis. Duis id tellus dignissim, iaculis nisi id, congue felis. Sed vitae cursus eros. Vivamus eget dui est. Interdum et malesuada fames ac ante ipsum primis in faucibus. In ac dolor tempus, mollis dui ut, semper lectus. Phasellus imperdiet iaculis mi, non interdum erat finibus vel. Integer venenatis purus vel dolor pulvinar, vitae malesuada eros laoreet. Quisque aliquam tincidunt cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem in urna feugiat vulputate. Sed cursus, quam nec posuere gravida, massa lectus pretium tellus, egestas laoreet magna sapien sed arcu. Nullam nunc tellus, venenatis sit amet nibh consectetur, posuere accumsan nulla. Donec vel pretium leo. Nam blandit iaculis auctor. Nunc lobortis purus quis velit malesuada, vitae elementum erat malesuada. Donec luctus mollis elit, sed vestibulum quam consequat vel. Aliquam mattis dolor neque, eu malesuada velit volutpat facilisis. Suspendisse potenti. Quisque tempor blandit lacus nec dignissim. Duis enim tellus, consequat non ultrices non, vestibulum sit amet sapien. In hac habitasse platea dictumst.',
    },
    {
        id: 4,
        name: 'book4',
        content:
            'Aenean vitae vestibulum mauris, ac dignissim odio. Nullam feugiat mi enim. Nullam mauris nunc, consectetur non molestie nec, pretium et eros. Nunc condimentum libero eget nisl interdum feugiat. Curabitur interdum aliquam feugiat. Duis pharetra blandit porta. Cras aliquet, dui a pellentesque scelerisque, ipsum velit hendrerit ante, sed rhoncus ex sem non mi. Nullam malesuada ante efficitur nunc dictum vehicula nec quis justo. Donec ac varius purus. Aenean id quam ultricies, lacinia nisl quis, posuere magna. Vivamus et efficitur sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem in urna feugiat vulputate. Sed cursus, quam nec posuere gravida, massa lectus pretium tellus, egestas laoreet magna sapien sed arcu. Nullam nunc tellus, venenatis sit amet nibh consectetur, posuere accumsan nulla. Donec vel pretium leo. Nam blandit iaculis auctor. Nunc lobortis purus quis velit malesuada, vitae elementum erat malesuada. Donec luctus mollis elit, sed vestibulum quam consequat vel. Aliquam mattis dolor neque, eu malesuada velit volutpat facilisis. Suspendisse potenti. Quisque tempor blandit lacus nec dignissim. Duis enim tellus, consequat non ultrices non, vestibulum sit amet sapien. In hac habitasse platea dictumst.',
    },
    {
        id: 5,
        name: 'book5',
        content:
            'Sed dictum tempus est, vitae malesuada magna facilisis sit amet. Nunc a scelerisque sapien. Vestibulum efficitur placerat nisi sed aliquet. Cras iaculis dolor id aliquam blandit. Vivamus sit amet venenatis libero, sit amet hendrerit sem. Fusce et enim a nisl mattis imperdiet quis in velit. Suspendisse scelerisque sed ipsum eu cursus. Donec in purus quis quam tempus gravida at non ipsum. In dictum commodo finibus. Phasellus suscipit erat efficitur felis ornare, ac congue dolor molestie. Nulla ac mi sit amet tellus tincidunt rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem in urna feugiat vulputate. Sed cursus, quam nec posuere gravida, massa lectus pretium tellus, egestas laoreet magna sapien sed arcu. Nullam nunc tellus, venenatis sit amet nibh consectetur, posuere accumsan nulla. Donec vel pretium leo. Nam blandit iaculis auctor. Nunc lobortis purus quis velit malesuada, vitae elementum erat malesuada. Donec luctus mollis elit, sed vestibulum quam consequat vel. Aliquam mattis dolor neque, eu malesuada velit volutpat facilisis. Suspendisse potenti. Quisque tempor blandit lacus nec dignissim. Duis enim tellus, consequat non ultrices non, vestibulum sit amet sapien. In hac habitasse platea dictumst.',
    },
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
    // {
    //     path: '/book/:id/:page',
    //     element: <Book />,
    // },
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
