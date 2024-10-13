import React from 'react';

const VideoPlayer = ({ url }) => {
    return (
        <div className="relative w-full pb-[56.25%] h-0 rounded-3xl shadow-lg">
            <iframe
                src={`${url}?autoplay=1&controls=0&loop=1`}
                className="absolute top-0 left-0 w-full h-full rounded-3xl shadow-lg "
                allow="autoplay; fullscreen;"
                allowFullScreen
                muted
                loading="lazy"
                title="Vimeo Video"
            ></iframe>
        </div>
    );
};

export default VideoPlayer;
