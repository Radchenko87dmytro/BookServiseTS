import React from 'react';
import { Button } from '../Button';
interface props {
    totalBooks: number;
    booksPerPage: number;
}
export const PaginationBooks = ({ totalBooks, booksPerPage }: props) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage) && i < 21; i++) {
        pages.push(i);
    }
    console.log(totalBooks / booksPerPage);
    return (
        <div>
            {pages.map((page, index) => {
                return <button key={index}>{page}</button>;
            })}
            ...
        </div>
    );
};
