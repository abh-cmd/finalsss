"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal";
import WhatsAppWidget from "./WhatsAppWidget";
import PhonePopup from "./PhonePopup";

const HeroSection = () => {
    const videoRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPhonePopupOpen, setIsPhonePopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0;
        }
    }, []);

    const handleConsultationClick = async () => {
        setIsLoading(true);
        // Simulate loading effect
        await new Promise(resolve => setTimeout(resolve, 800));
        setIsLoading(false);
        setIsModalOpen(true);
    };

    const handlePhoneClick = () => {
        setIsPhonePopupOpen(true);
    };

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover brightness-75"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/videos/Untitled design (2).mp4"
                >
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Hero Content */}
                    <div className="text-center space-y-6">
                        {/* Main Heading with Subtle Transparent Box */}
                        <div className="inline-block bg-black/20 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/10">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                                Welcome to Sri Sai Interiors
                            </h1>
                        </div>

                        {/* Subtitle with Subtle Transparent Box */}
                        <div className="inline-block bg-black/15 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/5">
                            <p className="text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
                                Transform your space into a masterpiece with our expert interior design services. From concept to completion, we bring your vision to life.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={handleConsultationClick}
                                disabled={isLoading}
                                className={`relative overflow-hidden text-lg px-8 py-3 md:py-3 w-full md:w-auto rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300/50 ${
                                    isLoading 
                                        ? 'bg-orange-600 cursor-not-allowed' 
                                        : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg'
                                } text-white`}
                            >
                                {isLoading ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                        Loading...
                                    </div>
                                ) : (
                                    'Get Free Consultation'
                                )}
                            </button>

                            <button
                                onClick={handlePhoneClick}
                                className="btn-secondary text-lg px-8 py-3 md:py-3 w-full md:w-auto text-center hover:scale-105 transition-transform duration-300"
                            >
                                Call Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Consultation Modal */}
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            
            {/* Phone Popup */}
            <PhonePopup isOpen={isPhonePopupOpen} onClose={() => setIsPhonePopupOpen(false)} />
            
            {/* WhatsApp Widget */}
            <WhatsAppWidget />
        </div>
    );
};

export default HeroSection;