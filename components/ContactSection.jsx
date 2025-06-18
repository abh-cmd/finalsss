import React from 'react';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiOutlineClock, HiOutlineStar } from 'react-icons/hi';
import { motion } from 'framer-motion';

const ContactSection = () => {
    const contactInfo = [
        {
            icon: HiOutlineMail,
            title: "Email Address",
            value: "Saiinteriors2015@gmail.com",
            link: "mailto:Saiinteriors2015@gmail.com",
            color: "from-red-500 to-pink-500",
            bgColor: "bg-red-50",
            borderColor: "border-red-200"
        },
        {
            icon: HiOutlinePhone,
            title: "Phone Number",
            value: "+91 701 382 5454",
            link: "tel:+917013825454",
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50",
            borderColor: "border-green-200"
        },
        {
            icon: HiOutlineLocationMarker,
            title: "Our Location",
            value: "Plot No 1510, Raja Rajeswari Nagar, Near Gem Motors Service Center, Kondapur, Hyderabad, Telangana 500084",
            link: "https://maps.google.com/?q=Kondapur,Hyderabad,Telangana",
            color: "from-blue-500 to-indigo-500",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200"
        },
        {
            icon: HiOutlineClock,
            title: "Business Hours",
            value: "Mon - Sat: 9:00 AM - 7:00 PM",
            link: null,
            color: "from-purple-500 to-violet-500",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200"
        }
    ];

    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <motion.div 
                    className="text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to transform your space? Contact us today for a free consultation and quote.
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={index}
                            className={`${info.bgColor} ${info.borderColor} border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${info.color} text-white mb-4`}>
                                <info.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{info.title}</h3>
                            {info.link ? (
                                <a 
                                    href={info.link}
                                    className="text-gray-600 hover:text-gray-800 transition-colors duration-300 block"
                                >
                                    {info.value}
                                </a>
                            ) : (
                                <p className="text-gray-600">{info.value}</p>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-lg md:text-xl text-blue-100 mb-6">
                            Get a free consultation and quote today. No obligation, no pressure.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.a
                                href="tel:+917013825454"
                                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>📞</span>
                                <span>Call Now</span>
                            </motion.a>
                            <motion.a
                                href="https://wa.me/917013825454"
                                className="bg-green-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span>💬</span>
                                <span>WhatsApp</span>
                            </motion.a>
                        </div>
                    </div>
                </motion.div>

                {/* Map Section */}
                <motion.div 
                    className="mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center">
                                <HiOutlineLocationMarker className="w-6 h-6 text-blue-600 mr-2" />
                                Visit Our Showroom
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Come visit our showroom to see our work in person and discuss your project with our experts.
                            </p>
                            <div className="bg-gray-100 rounded-lg p-4">
                                <p className="text-sm text-gray-600">
                                    <strong>Address:</strong> Plot No 1510, Raja Rajeswari Nagar, Near Gem Motors Service Center, Kondapur, Hyderabad, Telangana 500084
                                </p>
                            </div>
                        </div>
                        <div className="h-64 md:h-80 bg-gray-200 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.4!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Sri Sai Interiors Location"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;