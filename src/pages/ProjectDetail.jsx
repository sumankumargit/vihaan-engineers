import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ChevronLeft, ArrowRight, Calendar, MapPin, Building2, Ruler, ArrowUpRight } from 'lucide-react';
import SEO from '../components/seo/SEO';
import data from '../data/data.json';

const { projects } = data;

export default function ProjectDetail() {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

    if (!project) return <Navigate to="/projects" replace />;

    const relatedProjects = projects
        .filter(p => p.category === project.category && p.id !== project.id)
        .slice(0, 3);

    return (
        <>
            <SEO
                title={`${project.title} | Vihaan Engineers`}
                description={project.description.substring(0, 160)}
                ogImage={project.images[0]}
            />

            {/* Reading Progress */}
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[110] origin-left" style={{ scaleX }} />

            <div className="bg-white font-sans selection:bg-blue-600 selection:text-white">
                
                {/* --- HERO SECTION --- */}
                <section className="relative min-h-[80vh] md:min-h-screen flex items-end overflow-hidden bg-slate-950 pt-24">
                    <motion.div style={{ y }} className="absolute inset-0">
                        <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-60 scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    </motion.div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pb-16 lg:pb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Link 
                                to="/projects" 
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-white mb-10 group transition-colors uppercase text-[10px] font-bold tracking-[0.3em]"
                            >
                                <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                                Back to Portfolio
                            </Link>

                            <div className="flex items-center gap-4 mb-6">
                                <span className="h-[1px] w-12 bg-blue-500"></span>
                                <span className="text-blue-400 text-[11px] font-bold tracking-[0.2em] uppercase">
                                    {project.category}
                                </span>
                            </div>

                            <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold text-white uppercase leading-[0.9] mb-12 tracking-tighter">
                                {project.title.split(' ').map((word, i) => (
                                    <span key={i} className="block">{word}</span>
                                ))}
                            </h1>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-white/10">
                                <MetaItem icon={<MapPin size={16}/>} label="Location" value={project.location} />
                                <MetaItem icon={<Building2 size={16}/>} label="Client" value={project.client} />
                                <MetaItem icon={<Calendar size={16}/>} label="Timeline" value={project.metrics.duration} />
                                <MetaItem icon={<Ruler size={16}/>} label="Scale" value={project.metrics.area} />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* --- CONTENT SECTION --- */}
                <section className="py-24 lg:py-40">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid lg:grid-cols-12 gap-20">
                            
                            <div className="lg:col-span-7">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="space-y-12"
                                >
                                    <div className="space-y-6">
                                        <h2 className="font-display text-4xl font-bold text-slate-900 uppercase tracking-tight">
                                            The Project <span className="text-blue-600">Brief</span>
                                        </h2>
                                        <p className="text-2xl leading-relaxed text-slate-700 font-light">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Updated Gallery: Shows ALL photos including the Hero one */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
                                        {project.images.map((img, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                whileHover={{ scale: 0.98 }}
                                                className={`relative overflow-hidden rounded-[2rem] bg-slate-100 group shadow-xl 
                                                    ${idx === 0 ? 'md:col-span-2 aspect-video' : 'aspect-[4/5]'}`}
                                            >
                                                <img 
                                                    src={img} 
                                                    alt={`Project View ${idx + 1}`} 
                                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                                />
                                                <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors" />
                                                <div className="absolute bottom-6 left-6 text-white/50 text-[9px] font-bold tracking-widest uppercase bg-slate-950/20 px-3 py-1 rounded-full backdrop-blur-sm">
                                                    Perspective {idx + 1}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="prose prose-slate lg:prose-xl text-slate-600 pt-10">
                                        <p>
                                            Our engineering methodology for <strong>{project.title}</strong> involved rigorous structural analysis 
                                            and a commitment to sustainable infrastructure. We collaborated closely with <strong>{project.client}</strong> 
                                            to ensure that every technical specification met international safety benchmarks.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* --- SIDEBAR --- */}
                            <aside className="lg:col-span-5">
                                <div className="sticky top-32 space-y-8">
                                    <div className="bg-slate-950 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-600/20 blur-[80px]" />
                                        
                                        <h3 className="font-display text-2xl font-bold uppercase mb-8 tracking-tight">Technical Highlights</h3>
                                        <div className="space-y-2">
                                            <SpecRow label="Project Value" value={project.metrics.value} />
                                            <SpecRow label="Surface Area" value={project.metrics.area} />
                                            <SpecRow label="Industry" value={project.category} />
                                            <SpecRow label="Compliance" value="ISO Standards" />
                                        </div>

                                        <Link 
                                            to="/contact" 
                                            className="mt-12 flex items-center justify-between w-full p-6 bg-blue-600 text-white rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-slate-950 transition-all duration-500 shadow-lg shadow-blue-500/20"
                                        >
                                            Inquire Project
                                            <ArrowUpRight size={18} />
                                        </Link>
                                    </div>

                                    <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-200 group cursor-pointer overflow-hidden relative transition-all hover:shadow-md">
                                        <h4 className="text-xl font-bold text-slate-900 mb-2 relative z-10">Engineering Excellence</h4>
                                        <p className="text-slate-500 text-sm mb-6 relative z-10">Reach out to our specialists for technical consultation or site surveys.</p>
                                        <div className="w-12 h-1 bg-blue-600 transition-all duration-500 group-hover:w-full" />
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>

                {/* --- RELATED PROJECTS --- */}
                {relatedProjects.length > 0 && (
                    <section className="py-32 bg-slate-950">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="mb-16">
                                <span className="text-blue-500 font-bold uppercase tracking-[0.3em] text-[10px] block mb-4">Related Work</span>
                                <h2 className="font-display text-5xl font-bold text-white uppercase tracking-tighter">Continue <span className="text-slate-500">Exploring</span></h2>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                                {relatedProjects.map((p) => (
                                    <Link key={p.id} to={`/project/${p.slug}`} className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/5">
                                        <img 
                                            src={p.images[0]} 
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" 
                                            alt={p.title}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                                        
                                        <div className="absolute bottom-0 left-0 p-10 w-full">
                                            <p className="text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-3">{p.category}</p>
                                            <h3 className="text-white font-display text-2xl font-bold uppercase leading-tight group-hover:text-blue-400 transition-colors">{p.title}</h3>
                                            <div className="mt-6 flex items-center gap-2 text-white/50 text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                                                View Project <ArrowRight size={12} />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}

// Sub-components
const MetaItem = ({ icon, label, value }) => (
    <div className="space-y-3">
        <div className="flex items-center gap-2 text-blue-500/80">
            {icon}
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-400">{label}</span>
        </div>
        <p className="text-white font-semibold text-sm tracking-tight uppercase">{value}</p>
    </div>
);

const SpecRow = ({ label, value }) => (
    <div className="flex justify-between items-center py-6 border-b border-white/5 group hover:border-blue-500/50 transition-colors">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{label}</span>
        <span className="text-sm font-bold text-slate-200">{value}</span>
    </div>
);