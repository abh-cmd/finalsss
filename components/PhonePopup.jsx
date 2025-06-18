"use client";

import React from 'react';
import { HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock, HiOutlineX } from 'react-icons/hi';

const PhonePopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            ></div>
            
            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    >
                        <HiOutlineX className="w-6 h-6" />
                    </button>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-6">
                    {/* Phone Number */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                            <HiOutlinePhone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">Phone Number</h4>
                            <a 
                                href="tel:+917013825454" 
                                className="text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors duration-200"
                            >
                                +91 701 382 5454
                            </a>
                            <p className="text-gray-500 text-sm mt-1">Call us for consultation</p>
                        </div>
                    </div>
                    
                    {/* Office Address */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <HiOutlineLocationMarker className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">Office Address</h4>
                            <p className="text-gray-700 leading-relaxed">
                                Sri Sai Interiors<br />
                                Interior Design Studio<br />
                                Bangalore, Karnataka, India
                            </p>
                        </div>
                    </div>
                    
                    {/* Working Hours */}
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                            <HiOutlineClock className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-semibold text-gray-900 mb-1">Working Hours</h4>
                            <div className="space-y-1 text-gray-700">
                                <div className="flex justify-between">
                                    <span>Monday - Friday:</span>
                                    <span className="font-medium">9:00 AM - 7:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday:</span>
                                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday:</span>
                                    <span className="font-medium text-red-600">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 rounded-b-2xl">
                    <button
                        onClick={onClose}
                        className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PhonePopup; 