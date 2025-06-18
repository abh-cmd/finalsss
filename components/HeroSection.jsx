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

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0;
        }
    }, []);

    const handleConsultationClick = () => {
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
                    <div className="text-center space-y-8">
                        {/* Main Heading */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Welcome to Sri Sai Interiors
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Transform your space into a masterpiece with our expert interior design services. From concept to completion, we bring your vision to life.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <button
                                onClick={handleConsultationClick}
                                className="btn-primary text-lg px-8 py-3 md:py-3 w-full md:w-auto"
                            >
                                Get Free Consultation
                            </button>

                            <button
                                onClick={handlePhoneClick}
                                className="btn-secondary text-lg px-8 py-3 md:py-3 w-full md:w-auto text-center"
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