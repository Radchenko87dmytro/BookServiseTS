import React, { useState } from 'react';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';
import { book } from '../../types';
import { Button } from '../../components/Button';
import { WolnelekturyAPIType } from '../../types';

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
    const { id } = useParams();
    const navigate = useNavigate();
    const [pageNumber, setPageNumber] = useState(1);
    //const filteredBook = books.filter((i) => i.id === (id && parseInt(id)))[0];
    //console.log(filteredBook);
    //const pages = bookPagination(filteredBook.content);
    //console.log(pages);

    const handlePreviousPage = () => {
        if (pageNumber > 0) {
            setPageNumber((state) => state - 1); // 0
            navigate(`/book/${id}/${pageNumber}`); // 1
        }
    };

    return (
        <div className="flex-coll flex-nowrap justify-center bg-slate-200 w-full h-full">
            <p className="flex justify-center font-bold mb-10 pt-10">
                {/* Book {filteredBook.name} */}
            </p>
            {/* <p className="px-20 flex justify-center">{pages[pageNumber]}</p> */}
            <p className="flex justify-center my-10 font-bold">
                Page Number {pageNumber}
            </p>
            <div className="absolute bottom-20 w-full flex justify-center">
                {pageNumber > 0 && (
                    <Button
                        onClick={handlePreviousPage}
                        content={`Previous page: ${pageNumber - 1}`}
                    />
                )}
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
