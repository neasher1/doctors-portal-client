import React from 'react';

const Loading = () => {
    return (
        <div class="flex justify-center items-center space-x-2 my-20">
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Loading;