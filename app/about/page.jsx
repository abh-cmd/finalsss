"use client";
import React, { useEffect } from "react";
import { MdPhone, MdEmail, MdLocationOn } from 'react-icons/md';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
    useEffect(() => {
        // Add animation classes after component mounts
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate-fade-in');
            }, index * 200); // Stagger the animations
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900/95 to-gray-800/95 text-gray-100 py-16 pt-52">
            <div className="container mx-auto px-4">
                {/* About Section */}
                <section className="mb-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16 relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50 -z-10"></div>
                            <h2 className="text-5xl md:text-6xl font-noto-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300 mb-4 hover:scale-105 transition-transform duration-300">
                                About Sri Sai Interiors
                            </h2>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <motion.div
                                    initial={{ scale: 0.95, y: 20 }}
                                    whileInView={{ scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                                    className="relative inline-block"
                                >
                                    <span className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-transparent blur-xl transform -translate-y-1"></span>
                                    <span className="relative text-4xl md:text-5xl font-noto-sans font-medium bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300">
                                        Crafting beautiful spaces since 2008
                                    </span>
                                </motion.div>
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="h-1 w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mt-4"
                                />
                            </motion.div>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-700/50 hover:border-amber-500/50 transition-all duration-500"
                        >
                            <div className="prose prose-lg prose-invert max-w-none">
                                <p className="text-gray-300 font-noto-sans leading-relaxed text-lg md:text-xl">
                                    At Sri Sai Interiors, we don&apos;t just design spaces; we weave dreams into reality. With a deep understanding of aesthetics and a touch of Indian soul, we transform houses into homes filled with warmth, harmony, and unique character. Our dedication to quality craftsmanship and client trust has been recognized with accolades from around the globe. Choose Sri Sai Interiors, where your vision meets our artistry.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Success Showcase Section */}
                <section className="mb-24 relative">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50 -z-10"></div>
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="inline-block"
                            >
                                <h2 className="text-5xl md:text-6xl font-noto-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300 mb-4 hover:scale-105 transition-transform duration-300">
                                    Our Success Story
                                </h2>
                                <div className="h-1 w-24 bg-gradient-to-r from-amber-500 to-transparent mx-auto mt-4"></div>
                            </motion.div>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="mt-6 text-gray-300 font-noto-sans max-w-2xl mx-auto"
                            >
                                Delivering excellence in interior design with a commitment to quality and customer satisfaction
                            </motion.p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Project Completion */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                            >
                                <div className="relative w-full h-72 overflow-hidden">
                                    <Image
                                        src="/image/project.jpg"
                                        alt="Project Completion"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                </div>
                                <div className="p-8 relative z-10">
                                    <h3 className="text-2xl font-noto-serif font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">Multiple Projects</h3>
                                    <p className="text-gray-300 font-noto-sans leading-relaxed">Successfully completed numerous projects across Hyderabad, delivering excellence in every detail.</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </motion.div>

                            {/* Customer Satisfaction */}
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                            >
                                <div className="relative w-full h-72 overflow-hidden">
                                    <Image
                                        src="/image/living.jpg"
                                        alt="Customer Satisfaction"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                </div>
                                <div className="p-8 relative z-10">
                                    <h3 className="text-2xl font-noto-serif font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">98% Satisfaction</h3>
                                    <p className="text-gray-300 font-noto-sans leading-relaxed">Our clients&apos; happiness is our priority, reflected in our consistently high satisfaction ratings.</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </motion.div>

                            {/* Awards & Recognition */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                            >
                                <div className="relative w-full h-72 overflow-hidden">
                                    <Image
                                        src="/image/awards.png"
                                        alt="Awards & Recognition"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                </div>
                                <div className="p-8 relative z-10">
                                    <h3 className="text-2xl font-noto-serif font-semibold text-white mb-4 group-hover:text-amber-200 transition-colors duration-300">15+ Awards</h3>
                                    <p className="text-gray-300 font-noto-sans leading-relaxed">Recognized for excellence in interior design and customer service by industry leaders.</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Contact Information Section */}
                <section className="mb-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16 relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50 -z-10"></div>
                            <h2 className="text-5xl md:text-6xl font-noto-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300 mb-4 hover:scale-105 transition-transform duration-300">
                                Contact Information
                            </h2>
                            <p className="text-gray-300 font-noto-sans text-xl mb-6">Reach out to us for your interior design needs</p>
                            <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-transparent mx-auto transform hover:scale-x-110 transition-transform duration-300"></div>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Phone */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="group bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <MdPhone className="text-3xl text-amber-200" />
                                    </div>
                                    <h3 className="text-xl font-noto-serif font-semibold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300">Phone</h3>
                                    <a href="tel:+919876543210" className="text-gray-300 hover:text-amber-200 transition-colors duration-300 font-noto-sans">
                                        +91 98765 43210
                                    </a>
                                </div>
                            </motion.div>

                            {/* Email */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="group bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <MdEmail className="text-3xl text-amber-200" />
                                    </div>
                                    <h3 className="text-xl font-noto-serif font-semibold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300">Email</h3>
                                    <a href="mailto:info@srisaiinteriors.com" className="text-gray-300 hover:text-amber-200 transition-colors duration-300 font-noto-sans">
                                        info@srisaiinteriors.com
                                    </a>
                                </div>
                            </motion.div>

                            {/* Location */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                                className="group bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 relative"
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                        <MdLocationOn className="text-3xl text-amber-200" />
                                    </div>
                                    <h3 className="text-xl font-noto-serif font-semibold text-white mb-2 group-hover:text-amber-200 transition-colors duration-300">Location</h3>
                                    <p className="text-gray-300 font-noto-sans">
                                        Hyderabad, Telangana
                                    </p>
                                </div>
                                {/* Enhanced Tooltip */}
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50">
                                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-xl shadow-2xl border border-amber-500/20 w-72">
                                        <div className="relative">
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-900 rotate-45 border-t border-l border-amber-500/20"></div>
                                            <div className="space-y-2">
                                                <h4 className="text-amber-200 font-noto-serif font-semibold text-lg mb-2">Visit Us</h4>
                                                <div className="space-y-1.5">
                                                    <p className="text-white/90 font-noto-sans text-sm font-medium">SRI SAI INTERIORS</p>
                                                    <p className="text-gray-300 font-noto-sans text-sm">Plot No 1510, Raja Rajeswari Nagar</p>
                                                    <p className="text-gray-300 font-noto-sans text-sm">Near Gem Motors Service Center</p>
                                                    <p className="text-gray-300 font-noto-sans text-sm">Kondapur, Hyderabad</p>
                                                    <p className="text-amber-200/90 font-noto-sans text-sm font-medium">Telangana 500084</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Customer Reviews Section */}
                <section className="mb-24">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16 relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50 -z-10"></div>
                            <h2 className="text-5xl md:text-6xl font-noto-serif font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300 mb-4 hover:scale-105 transition-transform duration-300">
                                Client Testimonials
                            </h2>
                            <p className="text-gray-300 font-noto-sans text-xl mb-6">What our clients say about us</p>
                            <div className="h-1 w-32 bg-gradient-to-r from-amber-500 to-transparent mx-auto transform hover:scale-x-110 transition-transform duration-300"></div>
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Vijay's Review */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
                                        <span className="text-2xl font-noto-serif text-amber-200">V</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-noto-serif font-semibold text-white">Vijay</h3>
                                        <p className="text-amber-200/80 text-sm font-noto-sans">Residential Project Client</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -top-4 -left-4 text-6xl text-amber-500/20 font-noto-serif">&ldquo;</div>
                                    <p className="text-gray-300 font-noto-sans leading-relaxed relative z-10">
                                        Sri Sai Interiors transformed our home into a masterpiece. Their attention to detail and commitment to quality is unmatched. The team&apos;s professionalism and creative solutions made the entire process smooth and enjoyable.
                                    </p>
                                    <div className="absolute -bottom-4 -right-4 text-6xl text-amber-500/20 font-noto-serif rotate-180">&rdquo;</div>
                                </div>
                                <div className="mt-6 flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Giridhar's Review */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-500"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center">
                                        <span className="text-2xl font-noto-serif text-amber-200">G</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-noto-serif font-semibold text-white">Giridhar</h3>
                                        <p className="text-amber-200/80 text-sm font-noto-sans">Commercial Space Owner</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute -top-4 -left-4 text-6xl text-amber-500/20 font-noto-serif">&ldquo;</div>
                                    <p className="text-gray-300 font-noto-sans leading-relaxed relative z-10">
                                        Working with Sri Sai Interiors was a game-changer for our business space. Their innovative designs and efficient execution exceeded our expectations. The team&apos;s expertise in commercial interiors is truly remarkable.
                                    </p>
                                    <div className="absolute -bottom-4 -right-4 text-6xl text-amber-500/20 font-noto-serif rotate-180">&rdquo;</div>
                                </div>
                                <div className="mt-6 flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx global>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(4rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .animate-on-scroll {
                    opacity: 0;
                    transform: translateX(4rem);
                }

                .animate-fade-in {
                    animation: fadeInLeft 1.5s ease-out forwards;
                }
            `}</style>
        </div>
    );
}