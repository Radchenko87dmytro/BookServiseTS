import React from 'react';
import { Navbar } from '../components/Navbar';

export const Root = () => {
    return (
        <div className="bg-red-400 w-full h-full ">
            <Navbar content={'Books root'} />
            <div className="bg-sky-200 m-8 text-xl divide-solid border-2 border-black rounded-2xl shadow-2xl">
                <div className="m-8">
                    <p className=" flex justify-center text-3xl">Books root</p>
                    <a
                        href={`/books`}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Books
                    </a>
                </div>
            </div>
        </div>
    );
};
