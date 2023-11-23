import React, { useState } from 'react';
import { Button } from '../Button';

interface props {
    totalBooks: number;
    booksPerPage: number;
    currentPage: number;
    setCurrentPage: (state: number) => void;
}

export const PaginationBooks = ({
    totalBooks,
    booksPerPage,
    currentPage,
    setCurrentPage,
}: props) => {
    //

    //const [currentPage, setCurrentPage] = useState(1)
    let pages = [];

    for (
        let i = 1;
        i <= Math.ceil(totalBooks / booksPerPage) &&
        i <
            (process.env.REACT_APP_PAGE_COUNT
                ? parseInt(process.env.REACT_APP_PAGE_COUNT)
                : 0);
        i++
    ) {
        pages.push(i);
    }
    //console.log(process.env.REACT_APP_PAGE_COUNT);
    //console.log(process.env.API_URL);
    //currentPage = 3;

    // const bgAfterClick = `bg-lime-500`;
    // const bgBeforeClick = `bg-indigo-600`;
    let background;

    return (
        <div className="flex flex-wrap justify-center items-center  col-span-3 h-1/3 bg-slate-500">
            {pages.map((page, index) => {
                currentPage == page
                    ? (background = `bg-lime-500`)
                    : (background = `bg-indigo-600`);

                return (
                    <Button
                        key={index}
                        content={page}
                        background={background}
                        onClick={() => {
                            setCurrentPage(page);
                        }}
                    />
                );
            })}
        </div>
    );
};
