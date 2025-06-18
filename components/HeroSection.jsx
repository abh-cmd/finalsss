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

            {/* Desktop Content */}
            <div className="relative z-10 flex items-center justify-center h-full hidden md:block">
                <div className="text-center px-4 md:px-8">
                    {/* Desktop Enhanced Merged Box with Lower Position and Smooth Animation */}
                    <div className="animate-slideUpSmooth bg-white/25 backdrop-blur-lg rounded-[3rem] p-8 md:p-10 max-w-3xl mx-auto shadow-2xl border border-white/30 transform hover:scale-105 transition-all duration-500 mt-20">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight drop-shadow-2xl glow-text-subtle">
                            Transform Your Space with
                            <span className="block text-yellow-400 mt-3 glow-text-yellow-subtle">Sri Sai Interiors</span>
                        </h1>
                        
                        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl mx-auto drop-shadow-lg font-medium">
                            Creating beautiful, functional interiors that reflect your style and enhance your lifestyle. 
                            From concept to completion, we bring your vision to life.
                        </p>

                        {/* Desktop Enhanced Button - Only Consultation */}
                        <div className="flex justify-center items-center">
                            <button 
                                onClick={() => setShowConsultationModal(true)}
                                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 shadow-lg relative overflow-hidden text-lg"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

            {/* Mobile Content */}
            <div className="relative z-10 flex items-center justify-center h-full md:hidden">
                <div className="text-center px-4">
                    {/* Mobile Enhanced Merged Box with Lower Position and Smooth Animation */}
                    <div className="animate-slideUpSmooth bg-white/30 backdrop-blur-lg rounded-[2rem] p-6 max-w-sm mx-auto shadow-2xl border border-white/40 transform hover:scale-105 transition-all duration-500 mt-16">
                        <h1 className="text-2xl font-black text-white mb-4 leading-tight drop-shadow-xl glow-text-subtle-mobile">
                            Transform Your Space with
                            <span className="block text-yellow-400 mt-2 glow-text-yellow-subtle-mobile">Sri Sai Interiors</span>
                        </h1>
                        
                        <p className="text-sm text-gray-200 mb-6 leading-relaxed mx-auto drop-shadow-md font-medium">
                            Creating beautiful, functional interiors that reflect your style and enhance your lifestyle. 
                            From concept to completion, we bring your vision to life.
                        </p>

                        {/* Mobile Enhanced Button - Only Consultation */}
                        <div className="flex justify-center items-center">
                            <button 
                                onClick={() => setShowConsultationModal(true)}
                                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-2 shadow-lg relative overflow-hidden text-base w-full justify-center"
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