import React, { useState, useEffect } from 'react';
import { StoreType, book } from '../../types';
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
    console.log(booksState);
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

    console.log(booksState);

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

                            // <a href={`/books/bookDetails`} key={index}>
                            //
                            // </a>

                            // <div
                            //     className="mx-10 border-4 my-24 rounded-md border-cyan-700 border-solid bg-slate-100 "
                            //     key={index}
                            // >
                            //     <Hyperlink
                            //         content={'hyperlink'}
                            //         link={`/book/${'hyperlink'}/{book.page}`}
                            //         //book/:id/:page
                            //     />
                            //     <p className="p-6 flex justify-center bg-lime-300 m-6 rounded-md ">
                            //         {book.genre}
                            //     </p>
                            //     <p className="flex justify-between m-4 rounded-md">
                            //         <Button
                            //             //onClick={()=>{
                            //             //    editBookHandler()
                            //             //}}
                            //             content={'Edit book'}
                            //         />
                            //         <Button
                            //             // onClick={() => {
                            //             //     deleteBookHandler(book.id);
                            //             // }}
                            //             content={'Delete book'}
                            //         />
                            //     </p>
                            // </div>
                        ))}
                        <p className="bg-slate-100">
                            11
                            <PaginationBooks
                                totalBooks={booksState.length}
                                booksPerPage={booksPerPage}
                                currentPage={currentPage}
                                setCurrentPage={setCurrentPage}
                            />
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
