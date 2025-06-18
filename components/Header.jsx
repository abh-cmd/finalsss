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
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-900/90 backdrop-blur-md shadow-lg' : 'bg-blue-800/80 backdrop-blur-sm'}`}>
                <div className="container mx-auto px-4 md:px-8 py-4">
                    <div className="flex items-center justify-between">
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
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link 
                                    key={item.href}
                                    href={item.href} 
                                    className={`text-white text-base font-medium transition-colors duration-300 hover:text-blue-200 ${pathname === item.href ? 'text-blue-200 font-semibold' : ''}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white p-2 hover:bg-blue-700/50 rounded-lg transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-blue-900/95 backdrop-blur-md border-t border-blue-700">
                        <div className="container mx-auto px-4 py-4">
                            <nav className="space-y-2">
                                {navItems.map((item) => (
                                    <Link 
                                        key={item.href}
                                        href={item.href}
                                        className={`block px-4 py-2 text-white hover:bg-blue-700/50 rounded-lg transition-colors duration-300 ${pathname === item.href ? 'bg-blue-700/50 text-blue-200 font-semibold' : ''}`}
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