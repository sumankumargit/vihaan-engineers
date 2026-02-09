import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import data from '../../data/data.json';

const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#111827] text-white border-t border-white/5 font-sans">
            {/* CTA Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
                <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl sm:text-4xl font-display font-bold uppercase leading-tight mb-4">
                            Ready to Build<br />with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-blue-600">Excellence?</span>
                        </h3>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-md">
                            Let's discuss your next project and create something extraordinary together.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#3b82f6] to-blue-700 text-white text-sm font-display font-bold uppercase tracking-widest rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Start a Project
                        </Link>
                        <a
                            href="tel:+919600434775"
                            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white hover:border-[#3b82f6] hover:text-[#3b82f6] transition-colors duration-300 text-sm font-display font-bold uppercase tracking-widest"
                        >
                            Call Us
                        </a>
                    </motion.div>
                </div>

                {/* Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pb-12 sm:pb-16 border-b border-white/5">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex flex-col gap-2 mb-6">
                            <span className="font-display font-black text-2xl tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] to-blue-600">
                                VIHAAN
                            </span>
                            <span className="text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase">Engineers</span>
                        </div>
                        <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                            Smart solutions for smart buildings. Excellence in engineering since 2020.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h4 className="font-display text-sm font-bold uppercase tracking-widest mb-6 text-white">
                            Navigate
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-400 hover:text-[#3b82f6] text-xs sm:text-sm uppercase tracking-wider transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="font-display text-sm font-bold uppercase tracking-widest mb-6 text-white">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {['Civil Construction', 'PEB Structures', 'MEP Services', 'Interiors'].map((service) => (
                                <li key={service}>
                                    <span className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h4 className="font-display text-sm font-bold uppercase tracking-widest mb-6 text-white">
                            Reach Out
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Phone</p>
                                {/* Displaying both numbers for better reach */}
                                <div className="flex flex-col gap-1">
                                    <a href={`tel:${data.company_info.contact_details.call}`} className="text-gray-300 hover:text-[#3b82f6] text-xs sm:text-sm transition-colors duration-300">
                                        {data.company_info.contact_details.call}
                                    </a>
                                    <a href={`tel:${data.company_info.contact_details.whatsapp}`} className="text-gray-300 hover:text-[#25D366] text-xs sm:text-sm transition-colors duration-300">
                                        {data.company_info.contact_details.whatsapp} <span className="text-[10px] text-gray-500 ml-1">(WhatsApp)</span>
                                    </a>
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 font-bold">Email</p>
                                <a href={`mailto:${data.company_info.contact_details.email}`} className="text-gray-300 hover:text-[#3b82f6] text-xs sm:text-sm transition-colors duration-300 break-all">
                                    {data.company_info.contact_details.email}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
                    <p>&copy; {currentYear} Vihaan Engineers. All Rights Reserved.</p>
                    <div className="flex gap-6 sm:gap-8">
                        <Link to="/privacy" className="hover:text-[#3b82f6] transition-colors duration-300">
                            Privacy
                        </Link>
                        <Link to="/terms" className="hover:text-[#3b82f6] transition-colors duration-300">
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
