"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal";
import WhatsAppWidget from "./WhatsAppWidget";

const HeroSection = () => {
    const videoRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0;
        }
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

                        {/* Features Grid - Desktop */}
                        <div className="hidden md:grid grid-cols-4 gap-6 max-w-3xl mx-auto">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                                >
                                    <div className="text-3xl mb-2">{feature.icon}</div>
                                    <p className="text-sm text-white font-medium">{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* Features Grid - Mobile */}
                        <div className="md:hidden grid grid-cols-2 gap-4 max-w-3xl mx-auto">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                                >
                                    <div className="text-2xl mb-2">{feature.icon}</div>
                                    <p className="text-xs text-white font-medium">{feature.text}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons - Desktop */}
                        <div className="hidden md:flex gap-4 justify-center items-center">
                            <button
                                onClick={handleConsultationClick}
                                className="btn-primary text-lg px-8 py-3"
                            >
                                Get Free Consultation
                            </button>

                            <a
                                href="tel:+917013825454"
                                className="btn-secondary text-lg px-8 py-3"
                            >
                                Call Now
                            </a>
                        </div>

                        {/* CTA Buttons - Mobile */}
                        <div className="md:hidden flex flex-col gap-4 justify-center items-center">
                            <button
                                onClick={handleConsultationClick}
                                className="btn-primary text-lg px-8 py-4 min-w-[200px]"
                            >
                                Get Free Consultation
                            </button>

                            <a
                                href="tel:+917013825454"
                                className="btn-secondary text-lg px-8 py-4 min-w-[200px] text-center"
                            >
                                Call Now
                            </a>
                        </div>

                        {/* Trust Indicators - Desktop */}
                        <div className="hidden md:flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm">
                            <div className="flex items-center space-x-2">
                                <span>✅</span>
                                <span>Free Quote</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>✅</span>
                                <span>No Hidden Costs</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>✅</span>
                                <span>Quality Guaranteed</span>
                            </div>
                        </div>

                        {/* Trust Indicators - Mobile */}
                        <div className="md:hidden flex flex-wrap justify-center items-center gap-4 text-white/80 text-xs">
                            <div className="flex items-center space-x-1">
                                <span>✅</span>
                                <span>Free Quote</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span>✅</span>
                                <span>No Hidden Costs</span>
                            </div>
                            <div className="flex items-center space-x-1">
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