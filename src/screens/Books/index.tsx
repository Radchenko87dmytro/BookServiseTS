import React from 'react';
import { book } from '../../types';
import { Hyperlink } from '../../components/Hyperlink';
import { Button } from '../../components/Button';

interface props {
    books: book[];
}

const bookIntro = (longText: string): string =>
    longText.slice(0, 50).trim() + '...';

console.log(
    bookIntro(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate sem in urna feugiat vulputate. Sed cursus, quam nec posuere gravida, massa lectus pretium tellus, egestas laoreet magna sapien sed arcu. '
    )
);
export const Books = ({ books }: props) => {
    const deleteBookHandler = () => {
        //     console.log('delete book');
        //     [...books.splice(book.id, 1)]
    };

    return (
        <div className="bg-teal-300 py-10">
            <div>
                <p className="py-10 text-3xl text-green-600 flex justify-center font-bold">
                    Books
                </p>
            </div>
            <div className="border-4 mx-24 rounded-md border-cyan-700 border-solid bg-slate-300 ">
                {books.map((book) => (
                    <div className="border-4 mx-24 my-24 rounded-md border-cyan-700 border-solid bg-slate-100 ">
                        <Hyperlink
                            key={book.id}
                            content={book.name}
                            link={`/book/${book.id}`}
                        />
                        <p>{bookIntro(book.content)}</p>
                        <Button
                            onClick={deleteBookHandler}
                            content={'Delete book'}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
