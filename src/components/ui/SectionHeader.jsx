import { motion } from 'framer-motion';

export default function SectionHeader({
    subtitle,
    title,
    description,
    align = 'left',
    light = false
}) {
    const alignClass = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className={`max-w-2xl mb-12 md:mb-16 ${alignClass[align]}`}
        >
            {subtitle && (
                <span className={`text-sm font-bold tracking-[0.2em] uppercase mb-3 block ${light ? 'text-blue-300' : 'text-brand-blue'
                    }`}>
                    {subtitle}
                </span>
            )}
            <h2 className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight ${light ? 'text-white' : 'text-brand-dark'
                }`}>
                {title}
            </h2>
            {description && (
                <p className={`mt-4 text-base md:text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}
