import React, { useState, useEffect } from 'react';
import { StoreType, book, storeType } from '../../types';
import { Hyperlink } from '../../components/Hyperlink';
import { Button } from '../../components/Button';
import { getAllBooks } from '../../apiClient';
import { WolnelekturyAPIType } from '../../types';
import { Book } from '../Book';
import { PaginationBooks } from '../../components/PaginationBooks';
import { BookDetails } from '../BookDetails';
import { Navbar } from '../../components/Navbar';
import { Loading } from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../../reducer';
import { getBooksApi } from '../../apiClient';

interface props {
    //books: WolnelekturyAPIType;
    book: WolnelekturyAPIType;
    //bookHandler: () => WolnelekturyAPIType;
}

// const bookIntro = (longText: string): string =>
//     longText.slice(0, 50).trim() + '...';

export const Books = () => {
    const dispatch = useDispatch();
    const booksState = useSelector(
        (state: StoreType) => state.booksReducer.books
    );
    //console.log(booksState);

    const [isLoading, setIsLoading] = useState(true);
    //const [books, setBooks] = useState<WolnelekturyAPIType[]>([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(6);

    const lastBooksIndex = currentPage * booksPerPage;
    const firstBooksIndex = lastBooksIndex - booksPerPage;
    const currentBooks = booksState.slice(firstBooksIndex, lastBooksIndex);

    // const deleteBookHandler = (id: number) => {
    //     console.log(books);
    //     console.log('delete book ' + id);
    //     //setBookValue([...bookValue].splice(item.id, 1))
    //     //setBookValue(bookValue.filter((item: {}) => item.id !== id)); //filter((item: {}) => item.id !== id)
    //     //setBookValue(bookValue.filter((item: {}) => item.id !== id));
    // };

    useEffect(() => {
        (async () => {
            try {
                const result = await getAllBooks();
                //setBooks(result);
                dispatch(setBooks(result));
                setIsLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                const result = await getBooksApi();
                //console.log(result);
                dispatch(setBooks(result.books));
                setIsLoading(false);
            } catch (error) {
                console.error('Error:', error);
            }
        })();
    }, []);

    // function getBooksApi() {
    //     return new Promise((resolve, reject) => {
    //
    //             //resolve(" dane");
    //             reject(" błąd");
    //         }
    //     });
    // }

    // getContent()
    //     .then(result => {
    //         const result = await getAllBooks();

    //         dispatch(setBooks(result));
    //         setIsLoading(false);
    //     })
    //     .catch(error => {
    //         console.error(error);
    //     });

    return (
        <div className="w-full h-full">
            <Navbar content="A list of books" />
            {isLoading ? (
                <Loading />
            ) : (
                <div className="bg-slate-100 py-10 flex justify-center">
                    <div className="absolute flex justify-center">
                        <p className="py-8 text-4xl text-slate-400 flex justify-center font-bold">
                            A list of books
                        </p>
                    </div>
                    <div className="grid gap-10 grid-cols-3 grid-rows-3 my-28 w-3/4">
                        {currentBooks.map((book, index) => (
                            <Book book={book} key={index} />
                        ))}

                        <PaginationBooks
                            totalBooks={booksState.length}
                            booksPerPage={booksPerPage}
                            setBooksPerPage={setBooksPerPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
