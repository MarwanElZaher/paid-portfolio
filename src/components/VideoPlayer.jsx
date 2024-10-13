import React from 'react';

const VideoPlayer = ({ url }) => {
    return (
        <iframe
            loading="lazy"
            src={`${url}?autoplay=1&controls=0&loop=1`}
            className="rounded-3xl w-full md:w-1/3 object-cover shadow-lg transition-all duration-300"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            muted
            title="Vimeo Video"
        ></iframe>
    );
};

export default VideoPlayer;
