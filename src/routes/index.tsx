import React from 'react';

export const Root = () => {
    return (
        <div>
            <h1>Books</h1>
            <div>
                <nav>
                    <ul>
                        <li>
                            <a href={`/books`}>Books</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};
