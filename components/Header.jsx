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
                    <div className={`bg-gradient-to-r from-blue-950/95 to-blue-900/95 backdrop-blur-md shadow-professional px-4 md:px-8 py-3 md:py-4 flex items-center justify-between min-h-[70px] md:min-h-[80px] transition-all duration-300 ${isScrolled ? 'bg-blue-950/98 shadow-elevated' : ''}`}>
                        {/* Logo */}
                        <motion.div 
                            className="relative w-[200px] md:w-[300px] h-[60px] md:h-[80px] transition-all duration-500 hover:scale-105 cursor-pointer z-[60]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="relative z-[70] h-full">
                                <Image
                                    src="/image/WhatsApp Image 2025-06-17 at 10.31.42_5ded47ec.png"
                                    alt="SRI SAI INTERIORS Logo"
                                    fill
                                    quality={100}
                                    sizes="(max-width: 768px) 200px, 300px"
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
                        <div className="md:hidden relative transform hover:scale-105 transition-transform duration-300">
                            <h1 className="text-lg font-bold text-white [text-shadow:_0_0_20px_rgba(255,255,255,0.5)] tracking-wide">
                                SRI SAI INTERIORS
                            </h1>
                            <div className="w-full h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full mt-1 shadow-[0_0_20px_rgba(251,191,36,0.7)]"></div>
                        </div>

                        {/* Company Name - Desktop */}
                        <div className="hidden md:block relative ml-2 transform hover:scale-105 transition-transform duration-300">
                            <h1 className="text-3xl md:text-4xl font-bold text-white [text-shadow:_0_0_30px_rgba(255,255,255,0.5)] tracking-wide">
                                SRI SAI INTERIORS
                            </h1>
                            <div className="w-full h-1.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full mt-2 shadow-[0_0_30px_rgba(251,191,36,0.7)]"></div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link 
                                    key={item.href}
                                    href={item.href} 
                                    className={`text-white text-lg font-medium relative group transition-all duration-300 ease-in-out hover:text-xl hover:text-amber-300 ${pathname === item.href ? 'text-amber-300 font-semibold' : ''}`}
                                >
                                    <span className="relative z-10 flex items-center space-x-1">
                                        <span className="text-sm">{item.icon}</span>
                                        <span>{item.label}</span>
                                    </span>
                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-amber-300 to-amber-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                                </Link>
                            ))}
                            
                            {/* CTA Button */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link 
                                    href="/contact" 
                                    className="btn-primary text-sm px-4 py-2"
                                >
                                    Get Quote
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300 touch-target"
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
                            className="absolute right-0 top-0 bottom-0 w-[280px] bg-gradient-to-b from-blue-950/98 to-blue-900/98 backdrop-blur-lg shadow-elevated"
                            initial={{ x: 280 }}
                            animate={{ x: 0 }}
                            exit={{ x: 280 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <div className="px-4 pt-20 pb-6 space-y-2">
                                {/* Mobile Header Info */}
                                <div className="mb-6 p-4 bg-white/10 rounded-lg">
                                    <p className="text-white/80 text-sm mb-2">Ready to transform your space?</p>
                                    <p className="text-amber-300 font-semibold">Call: +91 701 382 5454</p>
                                </div>
                                
                                {navItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link 
                                            href={item.href} 
                                            className={`mobile-nav-item ${pathname === item.href ? 'bg-amber-500/20 text-amber-300 border-l-4 border-amber-300' : ''}`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <span className="flex items-center space-x-3">
                                                <span className="text-xl">{item.icon}</span>
                                                <span>{item.label}</span>
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                                
                                {/* Mobile CTA */}
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: navItems.length * 0.1 }}
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
                                
                                {/* Social Links */}
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: (navItems.length + 1) * 0.1 }}
                                    className="pt-6 border-t border-white/20"
                                >
                                    <p className="text-white/60 text-sm mb-3">Follow us</p>
                                    <div className="flex space-x-4">
                                        <a href="https://wa.me/917013825454" className="text-white/80 hover:text-green-400 transition-colors">
                                            <span className="text-2xl">📱</span>
                                        </a>
                                        <a href="mailto:Saiinteriors2015@gmail.com" className="text-white/80 hover:text-red-400 transition-colors">
                                            <span className="text-2xl">📧</span>
                                        </a>
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