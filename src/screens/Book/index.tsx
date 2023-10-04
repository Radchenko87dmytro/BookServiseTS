import React from 'react';
import { useParams } from 'react-router-dom';
import { book } from '../../types';

interface props {
    books: book[];
}

export const Book = ({ books }: props) => {
    const { id } = useParams();
    const filteredBook = books.filter((i) => i.id === (id && parseInt(id)))[0];
    console.log(filteredBook);

    return (
        <div className="flex justify-center bg-red-400 w-full h-full">
            <p>Book {filteredBook.name}</p>
        </div>
    );
};
