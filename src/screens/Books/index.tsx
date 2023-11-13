import React, { useState, useEffect } from 'react';
import { book } from '../../types';
import { Hyperlink } from '../../components/Hyperlink';
import { Button } from '../../components/Button';
import { getAllBooks } from '../../apiClient';
import { WolnelekturyAPIType } from '../../types';
import { Book } from '../Book';
import { PaginationBooks } from '../../components/PaginationBooks';
import { BookDetails } from '../BookDetails';
import { Navbar } from '../../components/Navbar';
import { Loading } from '../../components/Loading';

interface props {
    //books: WolnelekturyAPIType;
    book: WolnelekturyAPIType;
    //bookHandler: () => WolnelekturyAPIType;
}

// const bookIntro = (longText: string): string =>
//     longText.slice(0, 50).trim() + '...';

export const Books = () => {
    //{ bookHandler }: props
    const [isLoading, setIsLoading] = useState(true);
    const [books, setBooks] = useState<WolnelekturyAPIType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setPostsPerPage] = useState(6);

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
                setBooks(result);
                setIsLoading(false);
                console.log(books);
            } catch (error) {
                console.error('Error:', error);
            }
        })();
    }, []);

    const lastBooksIndex = currentPage * booksPerPage;
    const firstBooksIndex = lastBooksIndex - booksPerPage;
    const currentBooks = books.slice(firstBooksIndex, lastBooksIndex);

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
                        {/*mx-20 */}
                        {currentBooks.map((book, index) => (
                            // () => props.bookHandler(book);
                            // console.log(book);

                            <Book
                                book={book}
                                key={index}
                                //bookHandler={() => props.bookHandler(book)}
                            /> //bookHandler={bookHandler}

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
                        <PaginationBooks
                            totalBooks={books.length}
                            booksPerPage={booksPerPage}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
