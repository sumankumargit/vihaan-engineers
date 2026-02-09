import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/seo/SEO';
import data from '../data/data.json';

const { company_info } = data;

// Premium easing for HD feel
const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

export default function About() {
    return (
        <div className="bg-white selection:bg-blue-100">
            <SEO
                title="About Vihaan Engineers | Industrial Construction"
                description="Learn about Vihaan Engineers - precision engineering and construction solutions since 2020. Meet our leadership team and discover our approach to building excellence."
                canonical="/about"
            />

            {/* --- HERO SECTION (Cinematic Look) --- */}
            <section className="relative h-[60vh] lg:h-[80vh] flex items-center bg-[#0a0f1a] overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.4 }}
                        transition={{ duration: 1.5 }}
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
                        className="w-full h-full object-cover"
                        alt="Background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-transparent to-[#0a0f1a]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={transition}
                    >
                        <span className="inline-block text-blue-500 text-xs sm:text-sm font-black tracking-[0.4em] uppercase mb-6 bg-blue-500/10 px-4 py-1 rounded-full border border-blue-500/20">
                            Established {company_info.established_since}
                        </span>
                        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white uppercase leading-[0.9] tracking-tighter">
                            Engineering <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                                Superiority
                            </span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* --- STORY SECTION (Grid Layout) --- */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={transition}
                            >
                                <h2 className="font-display text-4xl lg:text-6xl font-bold text-slate-900 uppercase leading-tight mb-8">
                                    Crafting Infrastructure <br />
                                    <span className="text-slate-400 italic font-light">With Absolute Precision</span>
                                </h2>
                                <div className="space-y-8 text-slate-600 text-lg leading-relaxed max-w-2xl">
                                    <p>
                                        <strong className="text-slate-900">Vihaan Engineers</strong> represents the convergence of modern technology and traditional craftsmanship. We don't just build; we engineer solutions that stand the test of time.
                                    </p>
                                    <p>
                                        Under the strategic vision of <span className="text-blue-600 font-bold underline decoration-blue-200 underline-offset-4">{company_info.managing_director.name}</span>, we have scaled from a boutique firm to a multi-sector powerhouse, delivering high-stakes projects exceeding ₹10 Crore across South India.
                                    </p>
                                </div>

                                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-slate-100 pt-12">
                                    {['Precision', 'Innovation', 'Sustainability', 'Excellence'].map((val) => (
                                        <div key={val} className="flex items-center gap-4 group">
                                            <div className="w-10 h-[1px] bg-blue-500 group-hover:w-16 transition-all duration-500" />
                                            <span className="text-xs font-black uppercase tracking-widest text-slate-900">{val}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-5 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={transition}
                                className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                                    loading="lazy"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                    alt="Industrial Site"
                                />
                                <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- STATS (Minimalist) --- */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { val: '14+', lab: 'Years Experience' },
                            { val: '₹10Cr+', lab: 'Projects Delivered' },
                            { val: '50+', lab: 'Clients Trusted' },
                            { val: '05', lab: 'Regional Hubs' },
                        ].map((s, i) => (
                            <div key={i} className="text-center lg:text-left">
                                <h4 className="font-display text-4xl lg:text-6xl font-bold text-white mb-2">{s.val}</h4>
                                <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">{s.lab}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- LEADERSHIP (The Spotlight) --- */}
            <section className="py-24 lg:py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20 text-center lg:text-left">
                        <p className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4">Leadership</p>
                        <h2 className="font-display text-4xl lg:text-6xl font-bold text-slate-900 uppercase">The Visionary</h2>
                    </div>

                    {/* Managing Director Main Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200 flex flex-col lg:flex-row gap-12 items-center"
                    >
                        <div className="w-64 h-64 lg:w-80 lg:h-80 flex-shrink-0 relative group">
                            <div className="absolute inset-0 bg-blue-600 translate-x-4 translate-y-4 rounded-2xl group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                            <img
                                src="/md.jpg"
                                alt={company_info.managing_director.name}
                                className="relative w-full h-full object-cover rounded-2xl border-2 border-white shadow-xl"
                            />
                        </div>
                        <div className="flex-1 text-center lg:text-left">
                            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Managing Director</span>
                            <h3 className="font-display text-3xl lg:text-5xl font-bold text-slate-900 uppercase mt-2 mb-6 tracking-tighter">
                                {company_info.managing_director.name}
                            </h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8 italic">
                                "{company_info.managing_director.bio}"
                            </p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                                <div className="bg-slate-50 px-6 py-3 rounded-xl border border-slate-100">
                                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Qualification</p>
                                    <p className="font-bold text-slate-900">{company_info.managing_director.qualification}</p>
                                </div>
                                <div className="bg-slate-50 px-6 py-3 rounded-xl border border-slate-100">
                                    <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Experience</p>
                                    <p className="font-bold text-slate-900">{company_info.managing_director.experience}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Teams - Minimal Professional List */}
                    <div className="mt-32 grid lg:grid-cols-2 gap-20">
                        <div>
                            <h3 className="font-display text-2xl font-bold text-slate-900 uppercase mb-10 border-l-4 border-blue-600 pl-6">Head Office Team</h3>
                            <div className="space-y-6">
                                {company_info.team.head_office.map((m, i) => (
                                    <div key={i} className="flex justify-between items-center group py-4 border-b border-slate-100">
                                        <div>
                                            <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase text-sm">{m.name}</h4>
                                            <p className="text-xs text-slate-400 uppercase tracking-widest">{m.role}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-[10px] font-bold text-slate-900">{m.qualification}</p>
                                            <p className="text-[10px] text-slate-400 uppercase">{m.exp}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="font-display text-2xl font-bold text-slate-900 uppercase mb-10 border-l-4 border-slate-300 pl-6">Technical Force</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {company_info.team.project_team.map((m, i) => (
                                    <div key={i} className="p-5 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-all">
                                        <h4 className="font-bold text-slate-900 text-xs uppercase mb-1">{m.name}</h4>
                                        <p className="text-[10px] text-blue-500 font-bold uppercase mb-3">{m.role}</p>
                                        <div className="flex justify-between text-[9px] font-bold text-slate-400 border-t pt-3">
                                            <span>{m.qualification}</span>
                                            <span>{m.exp}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 relative bg-[#0a0f1a] overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[120px] rounded-full translate-x-1/2" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="font-display text-4xl lg:text-6xl font-bold text-white uppercase mb-8">
                        Let's Build The <br />Future Together
                    </h2>
                    <Link
                        to="/contact"
                        className="inline-block px-12 py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.3em] rounded-full hover:bg-blue-700 hover:-translate-y-1 transition-all shadow-xl shadow-blue-900/20"
                    >
                        Start a Project
                    </Link>
                </div>
            </section>
        </div>
    );
}