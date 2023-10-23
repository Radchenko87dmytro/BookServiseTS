import React from 'react';

interface props {
    content?: string;
    onClick?: () => void;
}

export const Button = ({ content, onClick }: props) => {
    return (
        <button
            onClick={onClick}
            className="truncate mx-2 py-2 px-2 bg-indigo-600 h-12 text-white bold font-medium rounded-md hover:bg-indigo-800 text-lg opacity-80"
        >
            {content ? content : 'button'}
        </button>
    );
};
