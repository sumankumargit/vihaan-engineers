import { motion } from 'framer-motion';

export default function TeamCard({ member, index = 0 }) {
    const { name, role, qualification, exp } = member;

    // Use placeholder images for team members
    const placeholderImages = [
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    ];

    const image = placeholderImages[index % placeholderImages.length];

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.4, 0, 0.2, 1]
            }}
            className="group"
        >
            {/* Image Container */}
            <div className="h-72 md:h-80 w-full mb-6 overflow-hidden bg-gray-100">
                <img
                    src={image}
                    alt={`${name} - ${role} at VIHAAN ENGINEERS`}
                    className="w-full h-full object-cover grayscale-hover"
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div>
                <h3 className="font-display text-lg md:text-xl font-bold text-brand-dark uppercase">
                    {name}
                </h3>
                <p className="text-brand-blue text-sm font-medium mt-1">
                    {role}
                </p>
                {(qualification || exp) && (
                    <p className="text-gray-400 text-xs mt-2 tracking-wide">
                        {qualification && <span>{qualification}</span>}
                        {qualification && exp && <span className="mx-2">&bull;</span>}
                        {exp && <span>{exp} experience</span>}
                    </p>
                )}
            </div>
        </motion.article>
    );
}
