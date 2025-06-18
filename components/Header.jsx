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
            setIsScrolled(window.scrollY > 50);
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
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-blue-800/90 backdrop-blur-lg shadow-lg' 
                    : 'bg-blue-800/80 backdrop-blur-md'
            }`}>
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src="/logo.png"
                                    alt="Sri Sai Interiors Logo"
                                    fill
                                    className="object-contain brightness-125"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                Home
                            </Link>
                            <Link href="/about" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                About
                            </Link>
                            <Link href="/projects" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                Projects
                            </Link>
                            <Link href="/gallery" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                Gallery
                            </Link>
                            <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium text-lg">
                                Contact
                            </Link>
                        </nav>

                        {/* Center Title - Desktop */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                            <div className="text-center">
                                <h1 className="text-2xl font-black text-white leading-tight">
                                    SRI SAI INTERIORS
                                </h1>
                                <div className="w-16 h-1 bg-yellow-400 mx-auto mt-1 rounded-full"></div>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white p-2"
                            aria-label="Toggle mobile menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-blue-900/95 backdrop-blur-lg border-t border-blue-700">
                    <nav className="py-4 space-y-2">
                        {navItems.map((item) => (
                            <Link 
                                key={item.href}
                                href={item.href}
                                className={`block px-4 py-3 text-white hover:text-yellow-400 hover:bg-blue-800/50 transition-all duration-300 font-medium ${
                                    pathname === item.href ? 'bg-blue-800/50 text-yellow-400' : ''
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </>
    );
};

export default Header;