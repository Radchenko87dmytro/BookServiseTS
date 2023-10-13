import React from 'react';
import { book } from '../../types';
import { Hyperlink } from '../../components/Hyperlink';

interface props {
    books: book[];
}
export const Books = ({ books }: props) => {
    return (
        <div className="bg-teal-300 py-10">
            <div>
                <p className="py-10 text-3xl text-green-600 flex justify-center font-bold">
                    Books
                </p>
            </div>
            <div className="border-4 mx-24 rounded-md border-cyan-700 border-solid bg-slate-300 ">
                {books.map((book) => (
                    <Hyperlink content={book.name} link={`/book/${book.id}`} />
                ))}
            </div>
        </div>
    );
};
