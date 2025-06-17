/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { MdAccessTime, MdLocationOn, MdPhone } from 'react-icons/md';

const WhatsAppWidget = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const widgetRef = useRef(null);
    const phoneNumber = "+91 701 382 5454";

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (widgetRef.current && !widgetRef.current.contains(event.target)) {
                setShowInfo(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}`, '_blank');
    };

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed bottom-8 right-8 z-50"
            ref={widgetRef}
        >
            <div className="relative group">
                {/* WhatsApp Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleClick}
                    className="relative flex items-center space-x-3 bg-gradient-to-r from-amber-500/90 to-orange-500/90 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <FaWhatsapp className="w-6 h-6" />
                    <span className="font-medium">Chat with us</span>
                </motion.button>

                {/* Info Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowInfo(!showInfo)}
                    className="absolute -left-12 top-0 bg-gradient-to-r from-amber-500/90 to-orange-500/90 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                    <MdPhone className="w-5 h-5" />
                </motion.button>

                {/* Information Popup */}
                <AnimatePresence>
                    {showInfo && (
                        <motion.div
                            initial={{ opacity: 0, x: -20, scale: 0.95 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: -20, scale: 0.95 }}
                            className="absolute right-full mr-4 bottom-0 bg-gradient-to-br from-gray-900 to-black border border-amber-500/20 rounded-xl shadow-2xl p-4 w-72"
                        >
                            <div className="space-y-4">
                                {/* Header */}
                                <div className="text-center border-b border-amber-500/20 pb-3">
                                    <h3 className="text-amber-400 font-semibold text-lg">Contact Us</h3>
                                    <p className="text-gray-300 text-sm">We&apos;re here to help!</p>
                                </div>

                                {/* Phone Number */}
                                <div className="flex items-center space-x-3 p-2 bg-amber-500/10 rounded-lg">
                                    <div className="bg-amber-500/20 p-2 rounded-lg">
                                        <MdPhone className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Call us at</p>
                                        <p className="text-white font-medium">{phoneNumber}</p>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="flex items-center space-x-3 p-2 bg-amber-500/10 rounded-lg">
                                    <div className="bg-amber-500/20 p-2 rounded-lg">
                                        <MdAccessTime className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Business Hours</p>
                                        <p className="text-white font-medium">Mon - Sat: 9AM - 7PM</p>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-center space-x-3 p-2 bg-amber-500/10 rounded-lg">
                                    <div className="bg-amber-500/20 p-2 rounded-lg">
                                        <MdLocationOn className="w-5 h-5 text-amber-400" />
                                    </div>
                                    <div>
                                        <p className="text-gray-300 text-sm">Visit us at</p>
                                        <p className="text-white font-medium">Hyderabad, Telangana</p>
                                    </div>
                                </div>

                                {/* Quick Message */}
                                <div className="text-center pt-2">
                                    <p className="text-amber-400 text-sm italic">Transform your space with us!</p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-xl group-hover:bg-amber-500/30 transition-all duration-300"></div>
            </div>
        </motion.div>
    );
};

export default WhatsAppWidget; 