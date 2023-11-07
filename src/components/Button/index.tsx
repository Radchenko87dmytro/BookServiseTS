import React from 'react';

interface props {
    content?: string | number;
    onClick?: () => void;
    background: string;
}

export const Button = ({ content, onClick, background }: props) => {
    return (
        <button
            onClick={onClick}
            className={`truncate mx-2 py-2 px-6 ${background} h-12 text-white bold font-medium rounded-md hover:bg-indigo-800 text-lg opacity-80 flex justify-center`}
        >
            {content ? content : 'button'}
        </button>
    );
};
