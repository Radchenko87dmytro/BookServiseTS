import React, { useState } from 'react';
import { book } from '../../types';
import { Hyperlink } from '../../components/Hyperlink';
import { Button } from '../../components/Button';

interface props {
    books: book[];
}

const bookIntro = (longText: string): string =>
    longText.slice(0, 50).trim() + '...';

export const Books = ({ books }: props) => {
    const [bookValue, setBookValue] = useState({ books });
    const deleteBookHandler = (id: number) => {
        console.log(bookValue);
        console.log('delete book ' + id);
        //setBookValue([...bookValue].splice(item.id, 1))
        //setBookValue(bookValue.filter((item: {}) => item.id !== id)); //filter((item: {}) => item.id !== id)
        //setBookValue(bookValue.filter((item: {}) => item.id !== id));
    };

    return (
        <div className="bg-teal-300 py-10 flex justify-center">
            <div className="absolute flex justify-center">
                <p className="py-10 text-3xl text-green-600 flex justify-center font-bold">
                    Books
                </p>
            </div>
            <div className=" w-200 min-w-min   border-4 rounded-md border-cyan-700 border-solid bg-slate-300 ">
                {books.map((book) => (
                    <div
                        className="mx-10 border-4 my-24 rounded-md border-cyan-700 border-solid bg-slate-100 "
                        key={book.id}
                    >
                        <Hyperlink
                            content={book.name}
                            link={`/book/${book.id}/{book.page}`}
                            //book/:id/:page
                        />
                        <p className="p-6 flex justify-center bg-lime-300 m-6 rounded-md ">
                            {bookIntro(book.content)}
                        </p>
                        <p className="flex justify-between m-4 rounded-md">
                            <Button
                                //onClick={()=>{
                                //    editBookHandler()
                                //}}
                                content={'Edit book'}
                            />
                            <Button
                                onClick={() => {
                                    deleteBookHandler(book.id);
                                }}
                                content={'Delete book'}
                            />
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
