"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/projects", label: "Projects" },
        { href: "/gallery", label: "Gallery" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            {/* Desktop Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 hidden md:block ${
                isScrolled ? 'bg-blue-900/70 backdrop-blur-lg shadow-2xl' : 'bg-blue-800/60 backdrop-blur-md'
            }`}>
                <div className="container mx-auto px-4 md:px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Enhanced Logo with Effects */}
                        <div className="relative w-[320px] h-[100px] transform hover:scale-105 transition-all duration-300">
                            <Image
                                src="/image/WhatsApp Image 2025-06-17 at 10.31.42_5ded47ec.png"
                                alt="SRI SAI INTERIORS Logo"
                                fill
                                quality={100}
                                sizes="320px"
                                className="object-contain drop-shadow-2xl filter brightness-125"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        </div>

                        {/* Center Title with No Glow Effects */}
                        <div className="flex flex-col items-center">
                            <h1 className="text-5xl font-black text-white tracking-widest mb-4 animate-pulse drop-shadow-xl font-serif">
                                SRI SAI INTERIORS
                            </h1>
                            <div className="w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-full shadow-lg animate-bounce filter brightness-110"></div>
                        </div>

                        {/* Enhanced Desktop Navigation */}
                        <div className="flex items-center space-x-10">
                            {navItems.map((item) => (
                                <Link 
                                    key={item.href}
                                    href={item.href} 
                                    className={`text-white text-2xl font-bold transition-all duration-300 hover:text-blue-200 hover:scale-110 hover:drop-shadow-lg font-serif ${
                                        pathname === item.href ? 'text-blue-200 font-bold drop-shadow-md' : ''
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Header */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 md:hidden ${
                isScrolled ? 'bg-blue-900/80 backdrop-blur-lg shadow-xl' : 'bg-blue-800/70 backdrop-blur-md'
            }`}>
                <div className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Mobile Logo */}
                        <div className="relative w-[200px] h-[60px] transform hover:scale-105 transition-all duration-300">
                            <Image
                                src="/image/WhatsApp Image 2025-06-17 at 10.31.42_5ded47ec.png"
                                alt="SRI SAI INTERIORS Logo"
                                fill
                                quality={100}
                                sizes="200px"
                                className="object-contain drop-shadow-xl filter brightness-120"
                                priority
                            />
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2 hover:bg-blue-700/50 rounded-lg transition-all duration-300 hover:scale-110"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Title */}
                    <div className="flex flex-col items-center mt-3">
                        <h1 className="text-xl font-black text-white tracking-wider mb-2 animate-pulse drop-shadow-lg font-serif">
                            SRI SAI INTERIORS
                        </h1>
                        <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-full shadow-lg animate-bounce filter brightness-110"></div>
                    </div>
                </div>

                {/* Enhanced Mobile Menu */}
                {isMenuOpen && (
                    <div className="bg-blue-900/95 backdrop-blur-lg border-t border-blue-700 shadow-2xl">
                        <div className="container mx-auto px-4 py-4">
                            <nav className="space-y-3">
                                {navItems.map((item) => (
                                    <Link 
                                        key={item.href}
                                        href={item.href}
                                        className={`block px-4 py-3 text-white hover:bg-blue-700/50 rounded-lg transition-all duration-300 text-lg font-bold font-serif ${
                                            pathname === item.href ? 'bg-blue-700/50 text-blue-200 font-bold' : ''
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};

export default Header;