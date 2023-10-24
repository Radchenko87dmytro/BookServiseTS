import { book } from '../../types';

interface props {
    link?: string;
    content: string;
}

export const Hyperlink = ({ link, content }: props) => {
    return (
        <div className="flex justify-center py-4 mx-6 my-8 border-4 rounded-md border-orange-300 border-solid bg-white">
            <a
                href={link}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
                {content}
            </a>
        </div>
    );
};
