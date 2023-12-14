import React from 'react';

interface props {
    content?: string | number;
    onClick?: () => void;
    background: string;
    width: string;
}

export const Button = ({ content, onClick, background, width }: props) => {
    return (
        <button
            onClick={onClick}
            className={`truncate m-2 py-2 px-6 ${background} ${width} h-12 text-white bold font-medium rounded-md hover:bg-lime-700 text-lg opacity-80 flex justify-center`}
        >
            {content ? content : 'button'}
        </button>
    );
};
