"use client";

import React from 'react';

const VideoSection = ({ videoUrl, title, description, poster }) => {
    return (
        <div className="relative w-full py-16 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Video Container */}
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                        <video
                            className="w-full h-full object-cover"
                            controls
                            poster={poster}
                            preload="metadata"
                        >
                            <source src={videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Video Info */}
                    {(title || description) && (
                        <div className="mt-8 text-center">
                            {title && (
                                <h2 className="text-3xl font-bold text-white mb-4 font-noto-serif">
                                    {title}
                                </h2>
                            )}
                            {description && (
                                <p className="text-gray-300 text-lg font-noto-sans">
                                    {description}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoSection; 