import React, { useState, useEffect } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { BookApiType, book } from '../../types';
import { Button } from '../../components/Button';
import { WolnelekturyAPIType } from '../../types';
import { getBook } from '../../apiClient';

interface props {
    book: WolnelekturyAPIType;
}

const bookPagination = (content: string) => {
    const step = 200;
    const output: string[] = [];

    for (let i = 0; i < content.length; i += step) {
        output.push(content.slice(i, i + step));
    }

    return output;
};

export const BookDetails = () => {
    const { authorTitle } = useParams();
    const [book, setBook] = useState<BookApiType>();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const result = authorTitle && (await getBook(authorTitle));
                setBook(result);
            } catch (error) {
                console.error('Error:', error);
            }
        })();
    }, []);

    return (
        <div className="flex-coll flex-nowrap justify-center bg-slate-200 w-full h-full">
            <p className="flex justify-center font-bold mb-10 pt-10">
                {/* Book {filteredBook.name} */}
            </p>
            {/* <p className="px-20 flex justify-center">{pages[pageNumber]}</p> */}
            <p className="flex justify-center my-40 font-bold">{book?.cover}</p>
            <img
                src={book?.simple_thumb}
                className="border-8 border-solid border-gray-400"
            />
        </div>
    );
};
