"use client";

import React, { useState } from 'react';
import PhonePopup from './PhonePopup';
import ConsultationModal from './ConsultationModal';

const HeroSection = () => {
    const [showPhonePopup, setShowPhonePopup] = useState(false);
    const [showConsultationModal, setShowConsultationModal] = useState(false);

    return (
        <section className="relative h-screen overflow-hidden">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/7578545-uhd_3840_2160_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center px-4 md:px-8">
                    {/* Enhanced Merged Box with Animation */}
                    <div className="animate-slideUp bg-white/15 backdrop-blur-md rounded-3xl p-6 md:p-8 max-w-2xl mx-auto shadow-2xl border border-white/20 transform hover:scale-105 transition-all duration-500">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                            Transform Your Space with
                            <span className="block text-yellow-400 mt-2">Sri Sai Interiors</span>
                        </h1>
                        
                        <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-6 leading-relaxed max-w-lg mx-auto drop-shadow-md">
                            Creating beautiful, functional interiors that reflect your style and enhance your lifestyle. 
                            From concept to completion, we bring your vision to life.
                        </p>

                        {/* Enhanced Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={() => setShowPhonePopup(true)}
                                className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg"
                            >
                                <svg className="w-5 h-5 group-hover:animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                Call Now
                            </button>

                            <button 
                                onClick={() => setShowConsultationModal(true)}
                                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    Free Consultation
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Phone Popup */}
            {showPhonePopup && (
                <PhonePopup onClose={() => setShowPhonePopup(false)} />
            )}

            {/* Consultation Modal */}
            {showConsultationModal && (
                <ConsultationModal isOpen={showConsultationModal} onClose={() => setShowConsultationModal(false)} />
            )}
        </section>
    );
};

export default HeroSection;