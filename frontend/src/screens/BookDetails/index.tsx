import React, { useState, useEffect } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { BookApiType, book } from '../../types';
import { Button } from '../../components/Button';
import { WolnelekturyAPIType } from '../../types';
import { getBook } from '../../apiClient';
import { Navbar } from '../../components/Navbar';

interface props {
    book: BookApiType;
    content: string;
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

    console.log(authorTitle, book);

    return (
        <div>
            <Navbar content="Book Details" arrow />
            <div className="flex justify-center items-center bg-slate-200 py-20">
                <div className="flex-row items-center ml-32">
                    <img
                        src={book?.simple_thumb}
                        className="border-8 border-solid border-gray-400 "
                    />

                    <div className="flex justify-between items-center">
                        <div>
                            <p className=" text-2xl my-10">
                                Title: {book?.title}
                            </p>
                            <p className="text-2xl my-10">
                                Author: {book?.authors[0].name}
                            </p>
                            <p className="text-2xl">
                                Language: {book?.language}
                            </p>
                        </div>
                    </div>
                </div>

                {/* <p className="px-20 flex justify-center">{pages[pageNumber]}</p> */}
                {/* <p className="flex justify-center my-40 font-bold">{book?.cover}</p>
            <a href={book?.fb2}>fabula</a> */}
            </div>
        </div>
    );
};
