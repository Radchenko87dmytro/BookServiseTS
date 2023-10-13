import React, { useState } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { book } from '../../types';
import { Button } from '../../components/Button';

interface props {
    books: book[];
}

const bookPagination = (content: string) => {
    const step = 30;
    const output: string[] = [];

    for (let i = 0; i < content.length; i += step) {
        output.push(content.slice(i, i + step));
    }

    return output;
};

export const Book = ({ books }: props) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pageNumber, setPageNumber] = useState(1);
    const filteredBook = books.filter((i) => i.id === (id && parseInt(id)))[0];
    console.log(filteredBook);
    const pages = bookPagination(filteredBook.content);
    console.log(pages);

    return (
        <div className="flex-coll justify-center bg-red-400 w-full h-full">
            <p className="flex justify-center font-bold mb-10 pt-10">
                Book {filteredBook.name}
            </p>
            <p className="px-20 ">{pages[pageNumber]}</p>
            <div className="flex justify-center mt-10">
                <Button
                    onClick={() => {
                        setPageNumber((state) => state + 1);
                        navigate(`/book/${id}/${pageNumber}`);
                    }}
                    content={`Next page: ${pageNumber + 1}`}
                />
            </div>
        </div>
    );
};
