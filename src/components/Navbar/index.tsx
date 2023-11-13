import React from 'react';
import { useNavigate } from 'react-router-dom';

interface props {
    content: string;
    arrow?: boolean;
}

export const Navbar = ({ content, arrow }: props) => {
    const navigate = useNavigate();
    const handleClickBack = () => navigate(-1);
    const handleClickFofward = () => navigate(1);

    return (
        <div className="flex justify-center items-center static bg-orange-400 py-6 text-2xl ">
            {arrow && (
                <div className="flex items-center">
                    <div
                        className="absolute  left-20 rounded "
                        onClick={handleClickBack}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            fill="currentColor"
                            className="rounded-lg bi bi-chevron-left bg-green-500 hover:bg-indigo-600 "
                            viewBox="0 0 16 16"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                            />
                        </svg>
                    </div>
                </div>
            )}

            <p>{content}</p>
        </div>
    );
};
