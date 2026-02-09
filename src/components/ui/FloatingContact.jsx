import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../../data/data.json';

const FloatingContact = () => {
    const { whatsapp, call } = data.company_info.contact_details;

    // Clean numbers for links
    const whatsappNumber = whatsapp.replace(/\D/g, ''); 
    const callNumber = call.replace(/\D/g, '');

    const containerVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { 
            opacity: 1, 
            y: 0,
            transition: { staggerChildren: 0.1 } 
        }
    };

    const itemVariants = {
        initial: { scale: 0, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        hover: { scale: 1.08 }
    };

    return (
        /* Positioning Logic: 
           bottom-24 on mobile (md:bottom-8) ensures it sits above standard bottom navbars 
        */
        <div className="fixed bottom-24 right-5 md:bottom-8 md:right-8 z-[9999] flex flex-col gap-5">
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-4"
            >
                {/* Official WhatsApp Button */}
                <motion.a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-2xl shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] transition-all duration-300"
                    aria-label="Chat on WhatsApp"
                >
                    {/* Tooltip Label */}
                    <span className="absolute right-full mr-4 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block uppercase tracking-wider">
                        Chat with us
                    </span>

                    {/* Official WhatsApp SVG Path */}
                    <svg className="w-7 h-7 md:w-8 md:h-8 fill-current" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>

                    {/* Pulse Ring */}
                    <span className="absolute inset-0 rounded-2xl bg-[#25D366] opacity-30 animate-ping"></span>
                </motion.a>

                {/* Call Button */}
                <motion.a
                    href={`tel:+${callNumber}`}
                    variants={itemVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#0f172a] text-white rounded-2xl shadow-[0_10px_25px_-5px_rgba(15,23,42,0.4)] border border-slate-700/50"
                    aria-label="Call Us Now"
                >
                    {/* Tooltip Label */}
                    <span className="absolute right-full mr-4 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block uppercase tracking-wider">
                        Call Expert
                    </span>

                    {/* Professional Phone Icon */}
                    <svg className="w-6 h-6 md:w-7 md:h-7 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </motion.a>
            </motion.div>
        </div>
    );
};

export default FloatingContact;