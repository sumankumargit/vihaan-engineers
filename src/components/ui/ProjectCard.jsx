import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project, index = 0 }) {
    const categoryColors = {
        'Civil': 'from-blue-400 to-blue-600',
        'Industrial': 'from-purple-400 to-purple-600',
        'Commercial': 'from-emerald-400 to-emerald-600',
        'MEP': 'from-orange-400 to-orange-600',
        'Residential': 'from-pink-400 to-pink-600',
        'Infrastructure': 'from-cyan-400 to-cyan-600'
    };

    const getCategoryColor = () => {
        for (const [key, value] of Object.entries(categoryColors)) {
            if (project.category?.includes(key)) return value;
        }
        return 'from-blue-400 to-blue-600';
    };

    return (
        <Link to={`/projects/${project.slug}`}>
            <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -12 }}
                className="relative h-full group cursor-pointer"
            >
                {/* Gradient Border Background */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${getCategoryColor()} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur`}></div>
                
                {/* Card Content */}
                <div className="relative bg-white rounded-xl overflow-hidden h-full flex flex-col shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                    {/* Image Container */}
                    <div className="aspect-[4/3] overflow-hidden bg-gray-900 relative">
                        <motion.img
                            src={project.images?.[0] || project.image || 'https://via.placeholder.com/600x450'}
                            alt={project.title || project.name}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.5 }}
                            loading="lazy"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        {/* Category Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className={`absolute top-3 left-3 px-3 py-1.5 bg-gradient-to-r ${getCategoryColor()} text-white text-xs font-bold uppercase tracking-widest rounded-full shadow-lg`}
                        >
                            {project.category}
                        </motion.div>
                    </div>

                    {/* Content */}
                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
                        <h3 className="text-lg sm:text-xl font-display font-bold text-[#111827] uppercase leading-tight mb-2 line-clamp-2">
                            {project.title || project.name}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm line-clamp-2 mb-4 flex-grow">
                            {project.description}
                        </p>

                        {/* Stats or Location */}
                        {project.location && (
                            <div className="flex items-center gap-2 text-gray-500 text-xs mb-4 pb-4 border-b border-gray-100">
                                <svg className="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span className="truncate">{project.location}</span>
                            </div>
                        )}

                        {/* CTA Link */}
                        <motion.div
                            className="inline-flex items-center gap-2 text-[#3b82f6] font-bold text-xs sm:text-sm uppercase tracking-widest group-hover:gap-3 transition-all duration-300"
                            whileHover={{ x: 4 }}
                        >
                            Explore
                            <motion.svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2.5}
                                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                                />
                            </motion.svg>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
