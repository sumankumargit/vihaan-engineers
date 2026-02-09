import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Minus } from 'lucide-react';
import SEO from '../components/seo/SEO';
import data from '../data/data.json';

const { projects } = data;
const categories = ['All', ...new Set(projects.map(p => p.category))];

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = useMemo(() => {
        return activeCategory === 'All'
            ? projects
            : projects.filter(project => project.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-white text-slate-900">
            <SEO
                title="Portfolio | Vihaan Engineers"
                description="Engineering excellence in Industrial, Commercial, and Residential sectors."
                canonical="/projects"
            />

            {/* --- PREMIUM WHITE HERO --- */}
            <section className="relative pt-40 pb-24 px-6 lg:px-12 bg-[#fcfcfc]">
                <div className="max-w-screen-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex justify-center items-center gap-3 mb-6">
                            <span className="h-px w-8 bg-blue-600"></span>
                            <span className="text-blue-600 font-bold tracking-[0.4em] uppercase text-[10px]">
                                Selected Works
                            </span>
                            <span className="h-px w-8 bg-blue-600"></span>
                        </div>

                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.85] mb-12">
                            Structural <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400">
                                Mastery
                            </span>
                        </h1>
                    </motion.div>

                    {/* --- CLEAN CATEGORY FILTER --- */}
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mt-16 border-t border-slate-100 pt-10">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`relative group text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-500 ${activeCategory === category
                                        ? 'text-blue-600'
                                        : 'text-slate-400 hover:text-slate-900'
                                    }`}
                            >
                                {category}
                                <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-blue-600 transition-all duration-500 ${activeCategory === category ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'
                                    }`}></span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SPACIOUS PROJECTS GRID --- */}
            <section className="py-24 px-6 lg:px-20">
                <div className="max-w-screen-2xl mx-auto">
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24" // Large gap for "Rich" feel
                    >
                        <AnimatePresence mode='popLayout'>
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.7, delay: index * 0.1 }}
                                    className="group cursor-pointer"
                                >
                                    <Link to={`/project/${project.slug}`} className="block">
                                        {/* Image Container */}
                                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 mb-8">
                                            <img
                                                src={project.images[0]}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-[1.5s] cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-110"
                                            />
                                            {/* Subtle Overlay on Hover */}
                                            <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                            {/* Top Right Arrow Icon */}
                                            <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                                <ArrowUpRight size={20} className="text-blue-600" />
                                            </div>
                                        </div>

                                        {/* Project Info */}
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-3">
                                                <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">
                                                    {project.category}
                                                </span>
                                                <Minus className="text-slate-200" size={16} />
                                                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                                    {project.location || 'India'}
                                                </span>
                                            </div>
                                            <h3 className="text-3xl font-bold tracking-tight uppercase group-hover:text-blue-600 transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed max-w-xl line-clamp-2 font-medium">
                                                {project.description}
                                            </p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-40">
                            <p className="text-slate-300 text-xl font-light tracking-widest uppercase">No projects found in this category.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* --- PREMIUM FOOTER CALL TO ACTION --- */}
            <section className="py-40 px-6 bg-[#0a0a0a] text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-10 leading-none">
                        Ready to build the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Extraordinary?</span>
                    </h2>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-4 group"
                    >
                        <span className="text-xs font-bold uppercase tracking-[0.4em] border-b border-blue-500 pb-2 group-hover:text-blue-400 transition-colors">
                            Get in touch
                        </span>
                        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                            <ArrowUpRight size={16} />
                        </div>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Projects;