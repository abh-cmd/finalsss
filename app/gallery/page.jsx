"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Adjusted scroll values for smoother parallax
    const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const images = [
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.02_a305b638.jpg', description: 'Plush seating & ambient lighting', category: 'Living Room' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.03_bd4fd090.jpg', description: 'Premium materials & elegant design', category: 'Bedroom' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.03_a0d9c9fa.jpg', description: 'Modern appliances & custom cabinetry', category: 'Kitchen' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.03_bbb7613a.jpg', description: 'Custom lighting & premium finishes', category: 'Dining' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.04_a0c0c32f.jpg', description: 'Luxury fixtures & modern tiles', category: 'Bathroom' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.04_37eb7a84.jpg', description: 'Custom furniture & artistic details', category: 'Living Room' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.04_9c9bae1b.jpg', description: 'Ergonomic design & smart lighting', category: 'Office' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.05_4732b4f5.jpg', description: 'Elegant design & premium finishes', category: 'Bedroom' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.05_6498fa6c.jpg', description: 'Custom cabinetry & modern appliances', category: 'Kitchen' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.06_563bfab1.jpg', description: 'Modern furniture & artistic lighting', category: 'Living Room' },
        { src: '/image/WhatsApp Image 2025-06-03 at 14.36.06_b40564b1.jpg', description: 'Custom lighting & elegant finishes', category: 'Dining' }
    ];

    return (
        <div className="relative min-h-screen bg-black/25 backdrop-blur-lg text-gray-200 py-16 pt-48" ref={containerRef}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/25 backdrop-blur-lg"></div>
            
            <motion.div 
                className="relative container mx-auto px-4"
                style={{ y: headerY }}
            >
                {/* Combined Header and Text Box Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl mx-auto mb-20 bg-black/15 backdrop-blur-lg p-12 rounded-2xl border border-white/15 shadow-2xl transition-all duration-300 ease-in-out hover:bg-black/25"
                    style={{ opacity: headerOpacity }}
                >
                    <h1 className="text-5xl md:text-7xl font-noto-serif font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-gray-300 mb-8 relative [text-shadow:_0_0_30px_rgba(255,255,255,0.3)]">
                        Our Design Gallery
                    </h1>
                    
                    <div className="mt-12">
                        <h2 className="text-3xl md:text-4xl font-noto-serif font-bold mb-6 text-white [text-shadow:_0_0_30px_rgba(255,255,255,0.3)]">
                            Discover Our Design Excellence
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500 rounded-full mb-6 shadow-[0_0_20px_rgba(251,191,36,0.5),_0_0_40px_rgba(251,191,36,0.3)]"></div>
                        <p className="text-lg md:text-xl text-gray-200 font-noto-sans leading-relaxed">
                            Each image in our gallery represents a unique story of transformation, where we&apos;ve combined innovative design concepts with practical functionality. From contemporary minimalism to classic elegance, our portfolio showcases our versatility and attention to detail in creating spaces that inspire and delight.
                        </p>
                    </div>
                </motion.div>

                {/* Gallery Grid with Premium Effects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                    {images.map((image, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-[1.02] cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => setIndex(idx)}
                        >
                            <Image 
                                src={image.src} 
                                alt={`Gallery Image ${idx + 1}`} 
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block px-2 py-1 mb-2 text-xs font-medium text-amber-300 bg-black/30 rounded-full backdrop-blur-sm">
                                        {image.category}
                                    </span>
                                    <p className="text-white text-sm font-noto-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                                        {image.description}
                                    </p>
                                </div>
                            </div>
                            <div className="absolute inset-0 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Enhanced Lightbox Component */}
                <Lightbox
                    slides={images}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Zoom, Thumbnails, Captions]}
                    zoom={{
                        maxZoomPixelRatio: 3,
                        zoomInMultiplier: 2,
                        doubleTapDelay: 300,
                        doubleClickDelay: 300,
                        doubleClickMaxStops: 2,
                        keyboardMoveDistance: 50,
                        wheelZoomDistanceFactor: 100,
                        pinchZoomDistanceFactor: 100,
                        scrollToZoom: true
                    }}
                    thumbnails={{
                        width: 120,
                        height: 80,
                        padding: 4,
                        border: 2,
                        borderRadius: 4,
                        gap: 16,
                        imageFit: "contain"
                    }}
                    captions={{
                        descriptionTextAlign: 'center',
                        style: {
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%)',
                            color: '#e5e7eb',
                            fontFamily: 'var(--font-noto-sans)',
                            fontSize: '1.2rem',
                            padding: '2rem 1.5rem 1.5rem 1.5rem',
                            pointerEvents: 'none',
                            opacity: 0,
                            animation: 'fadeInCaption 1s ease-out forwards',
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            left: 0,
                        }
                    }}
                />
            </motion.div>

            <style jsx global>{`
                @keyframes fadeInCaption {
                    from { opacity: 0; transform: translateY(40px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .gallery-item {
                    position: relative;
                    overflow: hidden;
                }

                .gallery-item::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .gallery-item:hover::before {
                    opacity: 1;
                }
            `}</style>
        </div>
    );
}