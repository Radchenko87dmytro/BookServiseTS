import React, { useState, useEffect } from 'react';
import { book } from '../../types';
import { Hyperlink } from '../../components/Hyperlink';
import { Button } from '../../components/Button';
import { getAllBooks } from '../../apiClient';
import { WolnelekturyAPIType } from '../../types';
import { Book } from '../Book';
import { PaginationBooks } from '../../components/PaginationBooks';

interface props {
    //books: WolnelekturyAPIType;
    // totalBooks: number;
    // booksPerPage: number;
}

const allBooksPagination = (books: WolnelekturyAPIType) => {
    const step = 10;
    const output: Object[] = [];
    console.log(books);
    //for (let i = 0; i < books.le) {
    //output.push(content.slice(i, i + step));
    // }

    return output;
};

// const bookIntro = (longText: string): string =>
//     longText.slice(0, 50).trim() + '...';

export const Books = () => {
    const [books, setBooks] = useState<WolnelekturyAPIType[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setPostsPerPage] = useState(6);

    //const filteredBook = books.filter((i) => i.id === (id && parseInt(id)))[0];
    //console.log(filteredBook);
    //const pages = bookPagination(filteredBook.content);
    //console.log(pages);

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
        <div className="bg-slate-100 py-10 flex justify-center">
            <div className="absolute flex justify-center">
                <p className="py-8 text-4xl text-slate-400 flex justify-center font-bold">
                    A list of books
                </p>
            </div>
            <div className="grid gap-10 grid-cols-3 grid-rows-3 my-28 ">
                {/*mx-20 */}
                {currentBooks.map((book, index) => (
                    <Book key={index} book={book} /> //

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
                />
            </div>
        </div>
    );
};
