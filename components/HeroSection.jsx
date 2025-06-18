"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal";
import WhatsAppWidget from "./WhatsAppWidget";

const HeroSection = () => {
    const videoRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0;
        }
        
        // Trigger animation after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    const handleConsultationClick = () => {
        setIsModalOpen(true);
    };

    const features = [
        { icon: "✨", text: "15+ Years Experience" },
        { icon: "🏆", text: "500+ Projects Completed" },
        { icon: "⭐", text: "4.9/5 Customer Rating" },
        { icon: "💰", text: "Free Consultation" }
    ];

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Video - Enhanced */}
            <div className="absolute inset-0 z-0">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover brightness-90 scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="/videos/Untitled design (2).mp4"
                >
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
                <div className="w-full max-w-4xl mx-auto">
                    {/* Hero Content */}
                    <div className="text-center space-y-8">
                        {/* Main Heading with Transparent Box and Animation */}
                        <div 
                            className={`inline-block bg-black/40 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/20 transition-all duration-1000 ease-out ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                            }`}
                        >
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                Welcome to Sri Sai Interiors
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                            Transform your space into a masterpiece with our expert interior design services. From concept to completion, we bring your vision to life.
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 border border-white/20"
                                >
                                    <div className="text-2xl md:text-3xl mb-2">{feature.icon}</div>
                                    <p className="text-xs md:text-sm text-white font-medium">{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Button - Orange */}
                        <div className="flex justify-center">
                            <button
                                onClick={handleConsultationClick}
                                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:from-orange-600 hover:to-orange-700 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300/50"
                            >
                                Get Free Consultation
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-white/80 text-xs md:text-sm">
                            <div className="flex items-center space-x-1 md:space-x-2">
                                <span>✅</span>
                                <span>Free Quote</span>
                            </div>
                            <div className="flex items-center space-x-1 md:space-x-2">
                                <span>✅</span>
                                <span>No Hidden Costs</span>
                            </div>
                            <div className="flex items-center space-x-1 md:space-x-2">
                                <span>✅</span>
                                <span>Quality Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Consultation Modal */}
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            
            {/* WhatsApp Widget */}
            <WhatsAppWidget />
        </div>
    );
};

export default HeroSection;