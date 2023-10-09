import React from 'react';
import { book } from '../../types';

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
            <div className="border-4 mx-24 rounded-md border-cyan-700 border-solid bg-slate-300">
                {books.map((book) => (
                    <p className="flex justify-center py-2 mx-36 my-10 border-4 rounded-md border-orange-300 border-solid bg-white">
                        {book.name}
                    </p>
                ))}
            </div>
        </div>
    );
};
