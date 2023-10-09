import React from 'react';

export const Root = () => {
    return (
        <div className="bg-red-400 w-full h-full p-8 ">
            <div className="bg-sky-200 p-8 text-xl divide-solid border-2 border-black rounded-2xl shadow-2xl">
                <p className=" flex justify-center text-3xl">Books root</p>
                <a
                    href={`/books`}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Books
                </a>
            </div>
        </div>
    );
};
