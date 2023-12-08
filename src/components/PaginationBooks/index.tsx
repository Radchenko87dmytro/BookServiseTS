import React, { useState, useMemo } from 'react';
import { Button } from '../Button';

interface props {
    totalBooks: number;
    booksPerPage: number;
    currentPage: number;
    setBooksPerPage: (state: number) => void;
    setCurrentPage: (state: number) => void;
}

export const PaginationBooks = ({
    totalBooks,
    booksPerPage,
    currentPage,
    setBooksPerPage,
    setCurrentPage,
}: props) => {
    const [pageNumberLimit, setPageNumberLimit] = useState(2);
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
    //
    let pages = [];
    let envNumber = process.env.REACT_APP_PAGE_COUNT
        ? parseInt(process.env.REACT_APP_PAGE_COUNT)
        : 0;

    let envNumberChanged = [
        ...Array.from({ length: envNumber + 1 }, (_, i) => i),
    ];
    console.log(envNumberChanged);

    for (
        let i = 1;
        i <= Math.ceil(totalBooks / booksPerPage);
        // && i < envNumberChanged.length;
        i++
    ) {
        pages.push(i);
    }
    console.log(...Array.from({ length: envNumber + 1 }, (_, i) => i));

    let background;

    const PrevPageHandler = () => {
        setCurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit == 0) {
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    const NextPageHandler = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const LoadMoreHandler = () => {
        setBooksPerPage(booksPerPage + 10);
    };

    const generateArray = useMemo(
        () => (index: number) => {
            let array = [index - 2, index - 1, index, index + 1, index + 2];
            return array.filter((item) => item > -1 && item <= envNumber);
        },
        []
    );

    return (
        <div className=" col-span-3  bg-slate-500  h-2/4 p-2">
            <div className="flex flex-wrap justify-center items-center  col-span-3 p-2">
                <button
                    className="text-white rounded-xl p-1 m-1 border-white border-4 decoration-white text-2xl  hover:bg-lime-500"
                    onClick={PrevPageHandler}
                    disabled={currentPage == pages[0] ? true : false}
                >
                    Prev
                </button>

                {generateArray(currentPage).map((page, index) => (
                    <Button
                        key={index}
                        content={page}
                        background={
                            currentPage == page
                                ? `bg-lime-500`
                                : `bg-indigo-600`
                        }
                        onClick={() => setCurrentPage(page)}
                        width={''}
                    />
                ))}

                <button
                    className="text-white rounded-xl p-1 m-1 border-white border-4 decoration-white text-2xl  hover:bg-lime-500"
                    //onClick={NextPageHandler}
                >
                    {pages.length}
                </button>

                <button
                    className="text-white rounded-xl p-1 m-1 border-white border-4 decoration-white text-2xl  hover:bg-lime-500"
                    onClick={NextPageHandler}
                    disabled={
                        currentPage == pages[pages.length - 1] ? true : false
                    }
                >
                    Next
                </button>
            </div>

            <button
                className=" text-white rounded-xl p-1 m-1 border-white border-4 decoration-white text-2xl  hover:bg-lime-500  bg-slate-800"
                onClick={LoadMoreHandler}
            >
                Load More
            </button>
        </div>
    );
};
