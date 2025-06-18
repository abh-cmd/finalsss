"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 20);
            
            // Hide header on scroll down, show on scroll up (mobile-friendly)
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navItems = [
        { href: "/", label: "Home", icon: "🏠" },
        { href: "/about", label: "About Us", icon: "ℹ️" },
        { href: "/projects", label: "Projects", icon: "🏗️" },
        { href: "/gallery", label: "Gallery", icon: "🖼️" },
        { href: "/contact", label: "Contact", icon: "📞" },
    ];

    return (
        <>
            <motion.header 
                className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                animate={{ 
                    y: isVisible ? 0 : -100,
                    opacity: isVisible ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="w-full">
                    {/* Desktop Header - Original Design */}
                    <div className="hidden md:block">
                        <div className={`bg-white shadow-md px-8 py-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
                            {/* Logo */}
                            <div className="relative w-[200px] h-[60px]">
                                <Image
                                    src="/image/WhatsApp Image 2025-06-17 at 10.31.42_5ded47ec.png"
                                    alt="SRI SAI INTERIORS Logo"
                                    fill
                                    quality={100}
                                    sizes="200px"
                                    className="object-contain"
                                    priority
                                />
                            </div>

                            {/* Desktop Navigation */}
                            <div className="flex items-center space-x-8">
                                {navItems.map((item) => (
                                    <Link 
                                        key={item.href}
                                        href={item.href} 
                                        className={`text-gray-700 text-base font-medium transition-colors duration-300 hover:text-blue-600 ${pathname === item.href ? 'text-blue-600 font-semibold' : ''}`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                
                                {/* CTA Button */}
                                <Link 
                                    href="/contact" 
                                    className="btn-primary"
                                >
                                    Get Quote
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Header - Enhanced Design */}
                    <div className="md:hidden">
                        <div className={`bg-gradient-to-r from-blue-950/95 to-blue-900/95 backdrop-blur-md shadow-professional px-4 py-3 flex items-center justify-between min-h-[70px] transition-all duration-300 ${isScrolled ? 'bg-blue-950/98 shadow-elevated' : ''}`}>
                            {/* Logo */}
                            <motion.div 
                                className="relative w-[200px] h-[60px] transition-all duration-500 hover:scale-105 cursor-pointer z-[60]"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <div className="relative z-[70] h-full">
                                    <Image
                                        src="/image/WhatsApp Image 2025-06-17 at 10.31.42_5ded47ec.png"
                                        alt="SRI SAI INTERIORS Logo"
                                        fill
                                        quality={100}
                                        sizes="200px"
                                        className="object-contain p-1 transition-all duration-500"
                                        priority
                                        style={{
                                            objectFit: 'contain',
                                            objectPosition: 'center',
                                            filter: 'drop-shadow(0 4px 12px rgba(255,255,255,0.3)) brightness(1.2) contrast(1.1)',
                                        }}
                                    />
                                </div>
                            </motion.div>

                            {/* Company Name - Mobile */}
                            <div className="relative transform hover:scale-105 transition-transform duration-300">
                                <h1 className="text-lg font-bold text-white [text-shadow:_0_0_20px_rgba(255,255,255,0.5)] tracking-wide">
                                    SRI SAI INTERIORS
                                </h1>
                                <div className="w-full h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full mt-1 shadow-[0_0_20px_rgba(251,191,36,0.7)]"></div>
                            </div>

                            {/* Mobile Menu Button */}
                            <motion.button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 touch-target"
                                aria-label="Toggle menu"
                                whileTap={{ scale: 0.95 }}
                            >
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.svg 
                                            key="close"
                                            className="w-6 h-6" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </motion.svg>
                                    ) : (
                                        <motion.svg 
                                            key="menu"
                                            className="w-6 h-6" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                        </motion.svg>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        className="md:hidden fixed inset-0 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div 
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />
                        
                        <motion.div 
                            className="absolute top-0 right-0 w-80 h-full bg-gradient-to-b from-blue-950 to-blue-900 shadow-2xl"
                            initial={{ x: 320 }}
                            animate={{ x: 0 }}
                            exit={{ x: 320 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="p-6 space-y-6">
                                {/* Mobile Menu Header */}
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-white">Menu</h2>
                                    <button 
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-white hover:text-amber-300 transition-colors duration-300"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* Navigation Items */}
                                <nav className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            <Link 
                                                href={item.href}
                                                className={`mobile-nav-item ${pathname === item.href ? 'bg-white/20 text-amber-300' : ''}`}
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <span className="text-lg mr-3">{item.icon}</span>
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                </nav>

                                {/* Mobile CTA */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                    className="pt-4"
                                >
                                    <Link 
                                        href="/contact"
                                        className="btn-primary w-full text-center block"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Get Free Quote
                                    </Link>
                                </motion.div>

                                {/* Contact Info */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.7 }}
                                    className="pt-4 border-t border-white/20"
                                >
                                    <div className="space-y-3 text-white/80">
                                        <div className="flex items-center space-x-3">
                                            <span>📞</span>
                                            <a href="tel:+917013825454" className="hover:text-amber-300 transition-colors duration-300">
                                                +91 7013825454
                                            </a>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span>📧</span>
                                            <a href="mailto:info@srisaiinteriors.com" className="hover:text-amber-300 transition-colors duration-300">
                                                info@srisaiinteriors.com
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;