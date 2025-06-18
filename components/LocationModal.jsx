import React from 'react';
import Image from 'next/image';

const LocationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Modal */}
            <div className="relative bg-amber-200 rounded-2xl shadow-2xl w-full max-w-4xl mx-auto overflow-hidden z-10">
                {/* Header */}
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Where are we located?
                    </h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col items-center">
                    <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-gray-200 mb-6">
                        <Image
                            src="/image/location-map.png"
                            alt="Google Maps showing our location"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <p className="text-gray-700 text-center">
                        Find us easily using the map above! We are conveniently located near the **Gem Motors Service Center**, making us a simple landmark to spot. We look forward to welcoming you to our design studio!
                    </p>
                </div>

                {/* Footer is removed as per typical modal design, can be added if needed */}
                {/* <div className="p-6 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                    >
                        Close
                    </button>
                </div> */}
            </div>
        </div>
    );
};

export default LocationModal; 