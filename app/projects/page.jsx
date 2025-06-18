"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Projects() {
    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'Drowing room for family time ',
            description: 'Badroom with a clean and comfortable design for your family. charming whit a modern design. ',
            image: '/image/project3.jpg',
            video: "/videos/4231453-hd_1920_1080_25fps.mp4",
            link: '',
            isHovered: false,
        },
        {
            id: 2,
            name: 'Kitchen look modern and clean',
            description: 'kitchen look modern and clean. charming whit a modern design. ',
            image: '/image/project2.jpg',
            video: "/videos/3444432-hd_1920_1080_30fps.mp4",
            link: '',
            isHovered: false,
        },
        {
            id: 3,
            name: 'Perfect living room for family time',
            description: 'Drowing room with a clean and comfortable design for your family. charming whit a modern design. ',
            image: '/image/project4.png',
            video: "/videos/3770033-hd_1920_1080_25fps.mp4",
            link: '',
            isHovered: false,
        },
        {
            id: 4,
            name: 'office interiors',
            description: 'Creating a modern and professional workspace designed for productivity and comfort.',
            image: '/image/office-interior.jpg',
            video: "/videos/8347237-uhd_3840_2160_25fps.mp4",
            link: '',
            isHovered: false,
        },
    ]);

    const [isVisible, setIsVisible] = useState(false);
    const [isImageVisible, setIsImageVisible] = useState(false);
    const containerRef = useRef(null);
    const videoRefs = useRef({});

    useEffect(() => {
        const textTimer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        const imageTimer = setTimeout(() => {
            setIsImageVisible(true);
        }, 1000);

        return () => {
            clearTimeout(textTimer);
            clearTimeout(imageTimer);
        };
    }, []);

    const handleMouseEnter = (id) => {
        try {
            // Pause all videos first
            Object.values(videoRefs.current).forEach(video => {
                if (video && video.pause) {
                    video.pause();
                    video.currentTime = 0;
                }
            });

            // Update hover state
            setProjects(prevProjects => 
                prevProjects.map(project =>
                    project.id === id ? { ...project, isHovered: true } : { ...project, isHovered: false }
                )
            );

            // Play the hovered video
            const video = videoRefs.current[id];
            if (video && video.play) {
                video.currentTime = 0;
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("Video play failed:", error);
                    });
                }
            }
        } catch (error) {
            console.error("Error in handleMouseEnter:", error);
        }
    };

    const handleMouseLeave = (id) => {
        try {
            // Pause the video
            const video = videoRefs.current[id];
            if (video && video.pause) {
                video.pause();
                video.currentTime = 0;
            }

            // Update hover state
            setProjects(prevProjects => 
                prevProjects.map(project =>
                    project.id === id ? { ...project, isHovered: false } : project
                )
            );
        } catch (error) {
            console.error("Error in handleMouseLeave:", error);
        }
    };

    const scroll = (direction) => {
        if (containerRef.current) {
            const container = containerRef.current;
            const scrollAmount = direction === 'left' ? -1200 : 1200;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Hero Section with Enhanced Layout */}
            <div className="relative flex flex-col min-h-[50vh] px-4 md:px-0 lg:px-0 overflow-hidden bg-gray-900 mt-16">
                {/* Background Image with Transition */}
                <div className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${isImageVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                    <Image
                        src="/image/backgroundproject.jpg"
                        alt="Background"
                        fill
                        className="object-cover brightness-125"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-transparent"></div>
                </div>

                {/* Text Box with Enhanced Positioning and Animation */}
                <div className={`relative flex items-center min-h-[50vh] w-full mt-32 md:mt-48`}>
                    <div className={`relative inline-block w-full md:max-w-2xl mx-auto md:ml-8 md:mr-auto bg-black/30 backdrop-blur-md p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <h1 className="text-3xl md:text-5xl font-noto-serif font-bold text-white mb-4 md:mb-6 [text-shadow:_0_0_30px_rgba(255,255,255,0.3)]">OUR RANGE OF WORK</h1>
                        <div className="w-20 md:w-24 h-1 md:h-1.5 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full mb-4 md:mb-6 shadow-[0_0_20px_rgba(251,191,36,0.5),_0_0_40px_rgba(251,191,36,0.3)]"></div>
                        <p className="text-base md:text-xl font-noto-sans text-gray-200 leading-relaxed">
                            Transforming spaces across India with bespoke interior designs that blend traditional craftsmanship with modern aesthetics. Explore our diverse portfolio of residential and commercial projects.
                        </p>
                    </div>
                </div>
            </div>

            {/* Spacing Divider with Gradient */}
            <div className="h-24 md:h-32 bg-gradient-to-b from-gray-900 to-gray-900/95"></div>

            {/* Projects Netflix-style Row */}
            <section className="min-h-[70vh] bg-gray-900 relative">
                <div className="container mx-auto px-4 h-full">
                    <div className="relative group h-full">
                        {/* Navigation Arrows */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none opacity-0 group-hover:opacity-100"
                            aria-label="Scroll left"
                        >
                            <IoIosArrowBack size={20} className="md:hidden" />
                            <IoIosArrowBack size={24} className="hidden md:block" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 md:p-4 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 focus:outline-none opacity-0 group-hover:opacity-100"
                            aria-label="Scroll right"
                        >
                            <IoIosArrowForward size={20} className="md:hidden" />
                            <IoIosArrowForward size={24} className="hidden md:block" />
                        </button>

                        {/* Projects Container */}
                        <div 
                            ref={containerRef}
                            className="flex overflow-x-auto gap-4 md:gap-8 pb-8 scrollbar-hide snap-x snap-mandatory h-full items-center"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex-none w-[85vw] md:w-[90vw] max-w-[1400px] snap-start"
                                >
                                    <div 
                                        className="relative overflow-hidden rounded-xl md:rounded-2xl group cursor-pointer aspect-[16/9] md:aspect-[21/9] shadow-xl hover:shadow-2xl transition-all duration-500"
                                        onMouseEnter={() => handleMouseEnter(project.id)}
                                        onMouseLeave={() => handleMouseLeave(project.id)}
                                    >
                                        {project.isHovered ? (
                                            <video
                                                ref={el => videoRefs.current[project.id] = el}
                                                className="w-full h-full object-cover"
                                                loop
                                                muted
                                                playsInline
                                                preload="auto"
                                                src={project.video}
                                                onLoadedData={() => {
                                                    if (videoRefs.current[project.id]) {
                                                        videoRefs.current[project.id].play().catch(console.error);
                                                    }
                                                }}
                                            >
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <Image
                                                src={project.image}
                                                alt={project.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                priority={project.id === 1}
                                            />
                                        )}
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                        <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                            <h2 className="text-2xl md:text-5xl font-noto-serif font-bold text-white mb-2 md:mb-4 transform transition-all duration-500 group-hover:text-white [text-shadow:_0_0_30px_rgba(255,255,255,0.3)] group-hover:[text-shadow:_0_0_30px_rgba(255,255,255,0.5)]">
                                                {project.name}
                                            </h2>
                                            <p className="text-base md:text-2xl font-noto-sans text-gray-200 opacity-0 group-hover:opacity-100 transition-all duration-500 max-w-3xl transform translate-y-4 group-hover:translate-y-0 group-hover:text-white">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        transform: translateX(-100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }

                @keyframes glowPulse {
                    0% {
                        text-shadow: 0 0 30px rgba(255,255,255,0.3);
                    }
                    50% {
                        text-shadow: 0 0 40px rgba(255,255,255,0.5);
                    }
                    100% {
                        text-shadow: 0 0 30px rgba(255,255,255,0.3);
                    }
                }

                .group:hover h2 {
                    animation: glowPulse 2s infinite;
                }

                /* Hide scrollbar for Chrome, Safari and Opera */
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                /* Hide scrollbar for IE, Edge and Firefox */
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
            `}</style>
        </div>
    );
}