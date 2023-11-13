import React from 'react';
import { Blocks } from 'react-loader-spinner';

export const Loading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    );
};
