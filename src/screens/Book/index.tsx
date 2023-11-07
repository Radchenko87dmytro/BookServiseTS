import { useNavigate, useNavigation } from 'react-router-dom';
import { WolnelekturyAPIType } from '../../types';

interface props {
    book: WolnelekturyAPIType;
}

export const Book = ({ book }: props) => {
    const navigate = useNavigate();
    console.log(`/book/${book.slug}`);

    return (
        <div
            className=" shadow-2xl bg-white p-4"
            onClick={() => navigate(`/book/${book.slug}`)}
        >
            <img
                src={book.simple_thumb}
                className="border-8 border-solid border-gray-400"
            />

            <div className="flex justify-between ">
                <div>
                    <p className="text-2xl">{book.title}</p>
                    <p className="text-base">{book.author}</p>
                </div>
                <div className="flex items-center bg-lime-300">
                    <svg
                        className="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 20"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m11.479 1.712 2.367 4.8a.532.532 0 0 0 .4.292l5.294.769a.534.534 0 0 1 .3.91l-3.83 3.735a.534.534 0 0 0-.154.473l.9 5.272a.535.535 0 0 1-.775.563l-4.734-2.49a.536.536 0 0 0-.5 0l-4.73 2.487a.534.534 0 0 1-.775-.563l.9-5.272a.534.534 0 0 0-.154-.473L2.158 8.48a.534.534 0 0 1 .3-.911l5.294-.77a.532.532 0 0 0 .4-.292l2.367-4.8a.534.534 0 0 1 .96.004Z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};
