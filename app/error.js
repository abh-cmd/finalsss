'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}) {
    useEffect(() => {
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
            <div className="max-w-md w-full p-8 bg-gray-800 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-4">Something went wrong!</h2>
                <p className="text-gray-300 mb-6">
                    We apologize for the inconvenience. Please try again or contact support if the problem persists.
                </p>
                <button
                    onClick={reset}
                    className="w-full bg-amber-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-600 transition-colors duration-300"
                >
                    Try again
                </button>
            </div>
        </div>
    );
} 