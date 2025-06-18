"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { MdBrush, MdAccessTime, MdPayments, MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

export default function Consultation() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        homeType: '',
        location: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState(null);
    const [isFormEnabled, setIsFormEnabled] = useState(true);

    useEffect(() => {
        // Check if the API is available
        fetch('/api/contact', { method: 'OPTIONS' })
            .catch(() => {
                setIsFormEnabled(false);
                showNotification('Service temporarily unavailable. Please try again later.', 'error');
            });
    }, []);

    const showNotification = (message, type = 'success') => {
        setNotification({ message, type });
        setTimeout(() => setNotification(null), 5000);
    };

    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                return !value.trim() ? 'Name is required' : '';
            case 'mobile':
                if (!value.trim()) return 'Mobile number is required';
                if (!/^[6-9]\d{9}$/.test(value)) return 'Please enter a valid 10-digit Indian mobile number';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
                return '';
            case 'homeType':
                return !value ? 'Please select a home type' : '';
            case 'location':
                return !value.trim() ? 'Location is required' : '';
            default:
                return '';
        }
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        Object.keys(formData).forEach(key => {
            const error = validateField(key, formData[key]);
            if (error) {
                newErrors[key] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!isFormEnabled) {
            showNotification('Service temporarily unavailable. Please try again later.', 'error');
            return;
        }

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                showNotification('Thank you! We will contact you soon.');
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    homeType: '',
                    location: ''
                });
                setErrors({});
            } else {
                showNotification(data.error || 'Something went wrong. Please try again.', 'error');
            }
        } catch (error) {
            showNotification('Failed to submit. Please try again.', 'error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const textVariants = {
        hidden: { 
            opacity: 0,
            x: -50
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="relative min-h-screen bg-black/25 backdrop-blur-lg">
            {/* Notification */}
            <AnimatePresence>
                {notification && (
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
                            notification.type === 'success' 
                                ? 'bg-green-500 text-white' 
                                : 'bg-red-500 text-white'
                        }`}
                    >
                        {notification.message}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Overlay with Gradient */}
            <div className="absolute inset-0 bg-black/25 backdrop-blur-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/30"></div>
            </div>
            
            <div className="relative z-20 pt-56 mt-20">
                <div className="container mx-auto px-4 py-8">
                    <motion.div 
                        className="max-w-6xl mx-auto"
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                    >
                        {/* Header Section with Enhanced Animation */}
                        <motion.div 
                            variants={itemVariants}
                            className="text-center mb-16"
                        >
                            <motion.h1 
                                variants={textVariants}
                                className="text-4xl md:text-6xl font-noto-serif font-bold mb-6 text-white relative inline-block"
                            >
                                Start Your Design Journey
                                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full shadow-[0_0_20px_rgba(251,191,36,0.5)]"></div>
                            </motion.h1>
                            <motion.p 
                                variants={textVariants}
                                className="text-xl text-gray-200 font-noto-sans max-w-2xl mx-auto leading-relaxed"
                            >
                                Let&apos;s create your dream space together. Fill out the form below and our design experts will get in touch with you.
                            </motion.p>
                        </motion.div>

                        {/* Main Content with Enhanced Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                            {/* Left Column - Features with Enhanced Cards */}
                            <div className="lg:col-span-1 space-y-8">
                                <motion.div 
                                    variants={itemVariants}
                                    className="bg-black/15 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-amber-500/10 group"
                                >
                                    <motion.h2 
                                        variants={textVariants}
                                        className="text-2xl font-noto-serif font-semibold text-white mb-8 relative inline-block"
                                    >
                                        Our Promise to You
                                        <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-500 to-transparent group-hover:w-24 transition-all duration-500"></div>
                                    </motion.h2>
                                    <div className="space-y-8">
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-start space-x-4 group/item"
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                                <MdBrush className="w-6 h-6 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <motion.h3 
                                                    variants={textVariants}
                                                    className="font-semibold text-white mb-2 group-hover/item:text-amber-300 transition-colors duration-300"
                                                >
                                                    Creative Excellence
                                                </motion.h3>
                                                <motion.p 
                                                    variants={textVariants}
                                                    className="text-gray-300 text-sm leading-relaxed"
                                                >
                                                    Innovative designs that reflect your unique style and personality
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-start space-x-4 group/item"
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                                <MdAccessTime className="w-6 h-6 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <motion.h3 
                                                    variants={textVariants}
                                                    className="font-semibold text-white mb-2 group-hover/item:text-amber-300 transition-colors duration-300"
                                                >
                                                    Timely Delivery
                                                </motion.h3>
                                                <motion.p 
                                                    variants={textVariants}
                                                    className="text-gray-300 text-sm leading-relaxed"
                                                >
                                                    We respect your time and deliver on schedule, every time
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-start space-x-4 group/item"
                                        >
                                            <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300">
                                                <MdPayments className="w-6 h-6 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <div>
                                                <motion.h3 
                                                    variants={textVariants}
                                                    className="font-semibold text-white mb-2 group-hover/item:text-amber-300 transition-colors duration-300"
                                                >
                                                    Transparent Pricing
                                                </motion.h3>
                                                <motion.p 
                                                    variants={textVariants}
                                                    className="text-gray-300 text-sm leading-relaxed"
                                                >
                                                    No hidden costs, clear and fair pricing structure
                                                </motion.p>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <motion.div 
                                    variants={itemVariants}
                                    className="bg-black/15 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-amber-500/10 group"
                                >
                                    <motion.h2 
                                        variants={textVariants}
                                        className="text-2xl font-noto-serif font-semibold text-white mb-8 relative inline-block"
                                    >
                                        Contact Information
                                        <div className="absolute -bottom-2 left-0 w-16 h-0.5 bg-gradient-to-r from-amber-500 to-transparent group-hover:w-24 transition-all duration-500"></div>
                                    </motion.h2>
                                    <div className="space-y-6">
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-center space-x-4 group/item"
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                                <MdPhone className="w-5 h-5 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <motion.span 
                                                variants={textVariants}
                                                className="text-gray-300 group-hover/item:text-white transition-colors duration-300"
                                            >
                                                +91 701 382 5454
                                            </motion.span>
                                        </motion.div>
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-center space-x-4 group/item"
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                                <MdEmail className="w-5 h-5 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <motion.span 
                                                variants={textVariants}
                                                className="text-gray-300 group-hover/item:text-white transition-colors duration-300"
                                            >
                                                Saiinteriors2015&#64;gmail.com
                                            </motion.span>
                                        </motion.div>
                                        <motion.div 
                                            variants={itemVariants}
                                            className="flex items-center space-x-4 group/item"
                                        >
                                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                                <MdLocationOn className="w-5 h-5 text-amber-400 group-hover/item:text-amber-300 transition-colors duration-300" />
                                            </div>
                                            <motion.span 
                                                variants={textVariants}
                                                className="text-gray-300 group-hover/item:text-white transition-colors duration-300"
                                            >
                                                Hyderabad, Telangana
                                            </motion.span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Right Column - Form with Enhanced Styling */}
                            <motion.div 
                                variants={itemVariants}
                                className="lg:col-span-2"
                            >
                                <div className="bg-black/15 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-amber-500/10">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {notification && (
                                            <div className={`p-4 mb-6 rounded-md ${notification.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                                {notification.message}
                                            </div>
                                        )}

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl border ${
                                                        errors.name ? 'border-red-500' : 'border-white/10'
                                                    } bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-white/20`}
                                                    placeholder="Enter your full name"
                                                    disabled={isSubmitting}
                                                />
                                                {errors.name && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="mobile" className="block text-sm font-medium text-white mb-2">
                                                    Mobile Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="mobile"
                                                    name="mobile"
                                                    value={formData.mobile}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl border ${
                                                        errors.mobile ? 'border-red-500' : 'border-white/10'
                                                    } bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-white/20`}
                                                    placeholder="Enter your mobile number"
                                                    disabled={isSubmitting}
                                                />
                                                {errors.mobile && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.mobile}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl border ${
                                                        errors.email ? 'border-red-500' : 'border-white/10'
                                                    } bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-white/20`}
                                                    placeholder="Enter your email address"
                                                    disabled={isSubmitting}
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="homeType" className="block text-sm font-medium text-white mb-2">
                                                    Type of Home
                                                </label>
                                                <select
                                                    id="homeType"
                                                    name="homeType"
                                                    value={formData.homeType}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl border ${
                                                        errors.homeType ? 'border-red-500' : 'border-white/10'
                                                    } bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-white/20`}
                                                    disabled={isSubmitting}
                                                >
                                                    <option value="">Select a type</option>
                                                    <option value="Apartment">Apartment</option>
                                                    <option value="Villa">Villa</option>
                                                    <option value="Independent House">Independent House</option>
                                                    <option value="Commercial Space">Commercial Space</option>
                                                </select>
                                                {errors.homeType && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.homeType}</p>
                                                )}
                                            </div>

                                            <div className="md:col-span-2">
                                                <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
                                                    Location
                                                </label>
                                                <input
                                                    type="text"
                                                    id="location"
                                                    name="location"
                                                    value={formData.location}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 rounded-xl border ${
                                                        errors.location ? 'border-red-500' : 'border-white/10'
                                                    } bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-300 hover:border-white/20`}
                                                    placeholder="Enter your location"
                                                    disabled={isSubmitting}
                                                />
                                                {errors.location && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.location}</p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="mt-8">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-xl shadow-sm text-sm font-medium text-white bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all duration-300 ${
                                                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                                }`}
                                            >
                                                {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
} 