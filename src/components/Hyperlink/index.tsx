import { book } from '../../types';

interface props {
    link?: string;
    content: string;
}

export const Hyperlink = ({ link, content }: props) => {
    return (
        <div>
            <a
                href={link}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
                {content}
            </a>
        </div>
    );
};
