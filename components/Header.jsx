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
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-blue-900/95 backdrop-blur-md shadow-xl' : 'bg-blue-800/85 backdrop-blur-sm'}`}>
                <div className="container mx-auto px-4 md:px-8 py-4">
                    <div className="flex items-center justify-between">
                        {/* Enhanced Logo with Effects */}
                        <div className="relative w-[280px] h-[90px] transform hover:scale-105 transition-all duration-300">
                            <Image
                                src="/image/WhatsApp Image 2025-06-17 at 10.31.42_5ded47ec.png"
                                alt="SRI SAI INTERIORS Logo"
                                fill
                                quality={100}
                                sizes="280px"
                                className="object-contain drop-shadow-2xl filter brightness-125"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                        </div>

                        {/* Center Title with Enhanced Effects */}
                        <div className="hidden lg:flex flex-col items-center">
                            <h1 className="text-5xl font-bold text-white tracking-wider mb-3 animate-pulse drop-shadow-2xl glow-text">
                                SRI SAI INTERIORS
                            </h1>
                            <div className="w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-full shadow-2xl animate-bounce filter brightness-125 glow-line"></div>
                        </div>

                        {/* Enhanced Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link 
                                    key={item.href}
                                    href={item.href} 
                                    className={`text-white text-xl font-bold transition-all duration-300 hover:text-blue-200 hover:scale-110 hover:drop-shadow-lg ${pathname === item.href ? 'text-blue-200 font-bold drop-shadow-md' : ''}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Enhanced Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white p-2 hover:bg-blue-700/50 rounded-lg transition-all duration-300 hover:scale-110"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    {/* Enhanced Mobile Title */}
                    <div className="lg:hidden flex flex-col items-center mt-4">
                        <h1 className="text-3xl font-bold text-white tracking-wider mb-3 animate-pulse drop-shadow-2xl glow-text">
                            SRI SAI INTERIORS
                        </h1>
                        <div className="w-full h-1.5 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded-full shadow-2xl animate-bounce filter brightness-125 glow-line"></div>
                    </div>
                </div>

                {/* Enhanced Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-blue-900/98 backdrop-blur-md border-t border-blue-700 shadow-xl">
                        <div className="container mx-auto px-4 py-4">
                            <nav className="space-y-3">
                                {navItems.map((item) => (
                                    <Link 
                                        key={item.href}
                                        href={item.href}
                                        className={`block px-4 py-3 text-white hover:bg-blue-700/50 rounded-lg transition-all duration-300 text-xl font-bold ${pathname === item.href ? 'bg-blue-700/50 text-blue-200 font-bold' : ''}`}
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