"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ConsultationModal from "./ConsultationModal";
import WhatsAppWidget from "./WhatsAppWidget";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
    const videoRef = useRef(null);
    const contentRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0;
        }
        
        // Trigger animations after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    const handleConsultationClick = () => {
        setIsButtonClicked(true);
        setTimeout(() => {
            setIsModalOpen(true);
            setIsButtonClicked(false);
        }, 500);
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
                    <motion.div 
                        className="text-center space-y-6 md:space-y-8"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Main Heading */}
                        <motion.h1 
                            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Transform Your Space Into
                            <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                                A Masterpiece
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p 
                            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Expert interior design services that bring your vision to life. 
                            From concept to completion, we create stunning spaces that reflect your style.
                        </motion.p>

                        {/* Features Grid - Desktop (Original) */}
                        <motion.div 
                            className="hidden md:grid grid-cols-4 gap-6 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <div className="text-3xl mb-2">{feature.icon}</div>
                                    <p className="text-sm text-white font-medium">{feature.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Features Grid - Mobile (Enhanced) */}
                        <motion.div 
                            className="md:hidden grid grid-cols-2 gap-4 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
                                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                >
                                    <div className="text-2xl mb-2">{feature.icon}</div>
                                    <p className="text-xs text-white font-medium">{feature.text}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons - Desktop (Original) */}
                        <motion.div 
                            className="hidden md:flex gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <motion.button
                                onClick={handleConsultationClick}
                                className="btn-primary text-lg px-8 py-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get Free Consultation
                            </motion.button>

                            <motion.a
                                href="tel:+917013825454"
                                className="btn-secondary text-lg px-8 py-3"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Call Now
                            </motion.a>
                        </motion.div>

                        {/* CTA Buttons - Mobile (Enhanced) */}
                        <motion.div 
                            className="md:hidden flex flex-col gap-4 justify-center items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >
                            <motion.button
                                onClick={handleConsultationClick}
                                className="btn-primary text-lg px-8 py-4 min-w-[200px] relative overflow-hidden group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.span
                                    className="relative z-10 flex items-center justify-center space-x-2"
                                    animate={isButtonClicked ? { opacity: 0 } : { opacity: 1 }}
                                >
                                    <span>🎨</span>
                                    <span>Get Free Consultation</span>
                                </motion.span>
                                <AnimatePresence>
                                    {isButtonClicked && (
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 flex items-center justify-center"
                                        >
                                            <motion.div
                                                initial={{ rotate: 0 }}
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 0.5, ease: "linear" }}
                                                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                                            />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            <motion.a
                                href="tel:+917013825454"
                                className="btn-secondary text-lg px-8 py-4 min-w-[200px] flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>📞</span>
                                <span>Call Now</span>
                            </motion.a>
                        </motion.div>

                        {/* Trust Indicators - Desktop (Original) */}
                        <motion.div 
                            className="hidden md:flex flex-wrap justify-center items-center gap-6 text-white/80 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
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
                        </motion.div>

                        {/* Trust Indicators - Mobile (Enhanced) */}
                        <motion.div 
                            className="md:hidden flex flex-wrap justify-center items-center gap-4 text-white/80 text-xs"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isVisible ? 1 : 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                        >
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
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Floating Elements - Mobile Only */}
            <motion.div 
                className="md:hidden absolute top-1/4 left-4 text-4xl opacity-20 animate-float"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.2, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                🏠
            </motion.div>

            <motion.div 
                className="md:hidden absolute bottom-1/4 right-4 text-4xl opacity-20 animate-float"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.2, x: 0 }}
                transition={{ duration: 1, delay: 1.7 }}
            >
                🎨
            </motion.div>

            {/* Consultation Modal */}
            <ConsultationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            
            {/* WhatsApp Widget */}
            <WhatsAppWidget />
        </div>
    );
};

export default HeroSection;