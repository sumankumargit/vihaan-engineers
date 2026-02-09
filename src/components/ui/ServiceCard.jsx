import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const serviceImages = {
    'Civil Construction': 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
    'Pre-Engineered Buildings (PEB)': 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800',
    'MEP (Mechanical, Electrical & Plumbing)': 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
    'Interior': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    'Renovation': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
};

const serviceDescriptions = {
    'Civil Construction': 'Comprehensive civil engineering solutions for residential, commercial, and industrial complexes ensuring structural integrity, quality materials, and timely project delivery.',
    'Pre-Engineered Buildings (PEB)': 'Specialized Pre-Engineered Building solutions for industrial warehouses, factories, and logistics parks. Rapid installation with cost-effective steel structures.',
    'MEP (Mechanical, Electrical & Plumbing)': 'End-to-end MEP services designed for modern corporate, residential, and industrial spaces. Smart systems integration for optimal performance.',
    'Interior': 'Premium interior execution that transforms spaces into functional, aesthetically pleasing environments. From concept to completion with attention to detail.',
    'Renovation': 'Expert renovation and retrofitting services to modernize existing structures. Enhancing functionality while preserving structural integrity.',
};

export default function ServiceCard({ service, index = 0 }) {
    const image = serviceImages[service] || serviceImages['Civil Construction'];
    const description = serviceDescriptions[service] || serviceDescriptions['Civil Construction'];
    const displayNumber = String(index + 1).padStart(2, '0');

    // Simplified service name for display
    const displayName = service.includes('(')
        ? service.split('(')[0].trim()
        : service;

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.4, 0, 0.2, 1]
            }}
            className="group relative bg-white p-2 card-lift shadow-sm hover:shadow-xl border border-gray-50"
        >
            {/* Image */}
            <div className="h-64 overflow-hidden mb-6">
                <img
                    src={image}
                    alt={`${service} service by VIHAAN ENGINEERS Bangalore`}
                    className="w-full h-full object-cover img-zoom"
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className="px-4 pb-8">
                {/* Number Badge */}
                <span className="text-4xl font-display text-gray-100 font-bold absolute top-6 right-6 group-hover:text-brand-blue/20 transition-colors duration-500">
                    {displayNumber}
                </span>

                <h3 className="font-display text-xl md:text-2xl font-bold text-brand-dark mb-4 uppercase">
                    {displayName}
                </h3>

                <p className="text-gray-500 leading-relaxed mb-6 text-sm line-clamp-3">
                    {description}
                </p>

                <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue uppercase tracking-widest hover:text-brand-dark transition-colors group/link"
                >
                    Get Quote
                    <svg
                        className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </motion.article>
    );
}
