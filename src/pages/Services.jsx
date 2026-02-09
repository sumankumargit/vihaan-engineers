import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ArrowRight,
    CheckCircle2,
    Building2,
    MapPin,
    ArrowUpRight,
    Factory,
    School,
    Home,
    Briefcase
} from 'lucide-react';
import SEO from '../components/seo/SEO';
import data from '../data/data.json';

const { company_info } = data;

// Mapping sectors to high-quality images and specific icons
const sectorData = {
    "Industrial": {
        image: "/projects/mrh-security-block-powder-burning-anantapur.jpg",
        icon: <Factory size={32} />
    },
    "Institutional": {
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200",
        icon: <School size={32} />
    },
    "Residential": {
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
        icon: <Home size={32} />
    },
    "Commercial": {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
        icon: <Briefcase size={32} />
    }
};

const serviceDetails = [
    {
        name: "Civil Construction",
        subtitle: "Structural Integrity",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200",
        features: ["RCC Framework", "Foundations", "Structural Design"]
    },
    {
        name: "Pre-Engineered Buildings (PEB)",
        subtitle: "Industrial Speed",
        image: "https://images.unsplash.com/photo-1649587345666-0f4ad68aa723?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Steel Fabrication", "Rapid Erection", "Warehouse Solutions"]
    },
    {
        name: "MEP (Mechanical, Electrical & Plumbing)",
        subtitle: "System Integration",
        image: "https://images.unsplash.com/photo-1601997123254-a9f1ad6a756b?q=80&w=1178&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        features: ["Electrical Infrastructure", "HVAC Systems", "Plumbing"]
    },
    {
        name: "Interior",
        subtitle: "Functional Design",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
        features: ["Office Layouts", "Custom Fit-outs", "Finishing Works"]
    },
    {
        name: "Renovation",
        subtitle: "Modern Retrofitting",
        image: "https://images.unsplash.com/photo-1505798577917-a65157d3320a?q=80&w=1200",
        features: ["Structural Repair", "Surface Renewal", "Upgrade & Refit"]
    }
];

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

export default function Services() {
    return (
        <div className="bg-white selection:bg-blue-600 selection:text-white">
            <SEO
                title="Our Services | Vihaan Engineers"
                description="Professional engineering services including Civil Construction, PEB, MEP, and Industrial solutions."
                canonical="/services"
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] flex items-center bg-slate-950 overflow-hidden pt-20">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000"
                        className="w-full h-full object-cover opacity-40 scale-105"
                        alt="Hero background"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-slate-950/90" />
                </div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                        <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Expertise</span>
                        <h1 className="font-display text-6xl md:text-8xl font-bold text-white uppercase tracking-tighter leading-[0.85]">
                            Smart <br /> <span className="text-slate-400">Solutions</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* --- SECTORS (Visual Grid with Photos) --- */}
            <section className="py-24 relative z-20 -mt-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {company_info.sectors.map((sector, idx) => {
                            const details = sectorData[sector] || { image: "", icon: <Building2 /> };
                            return (
                                <motion.div
                                    key={idx}
                                    {...fadeInUp}
                                    transition={{ delay: idx * 0.1 }}
                                    className="group relative h-80 overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl"
                                >
                                    {/* Sector Image Background */}
                                    <img
                                        src={details.image}
                                        alt={sector}
                                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-40 transition-all duration-700"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                        <div className="text-blue-400 mb-4 transform group-hover:-translate-y-2 transition-transform duration-300">
                                            {details.icon}
                                        </div>
                                        <h3 className="text-white font-display text-2xl font-bold uppercase tracking-tight">{sector}</h3>
                                        <div className="h-0.5 w-0 group-hover:w-12 bg-blue-500 transition-all duration-300 mt-2" />
                                        <span className="text-white/50 text-[10px] uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity">Specialized Sector</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* --- DETAILED SERVICES SECTION --- */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="mb-20">
                        <h2 className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs mb-4">Core Capabilities</h2>
                        <div className="h-[1px] w-full bg-slate-100 mb-8" />
                    </div>

                    <div className="space-y-32">
                        {serviceDetails.map((service, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                <motion.div {...fadeInUp} className="lg:w-1/2 space-y-6">
                                    <span className="text-blue-600 font-black text-6xl opacity-10 font-display">0{index + 1}</span>
                                    <div className="space-y-2">
                                        <p className="text-blue-600 font-bold uppercase tracking-widest text-xs">{service.subtitle}</p>
                                        <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 uppercase leading-none">{service.name}</h3>
                                    </div>
                                    <p className="text-slate-500 text-lg font-light leading-relaxed">
                                        Providing end-to-end execution in {service.name} for {company_info.sectors.join(', ')} sectors.
                                        We ensure industrial-standard quality and precision in every project phase.
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 text-slate-700 font-medium text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>
                                    <Link to="/contact" className="inline-flex items-center gap-4 text-slate-900 font-bold uppercase text-[10px] tracking-widest group">
                                        Enquire Now <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all"><ArrowUpRight size={14} /></div>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 0.98 }}
                                    className="lg:w-1/2 h-[450px] rounded-[3rem] overflow-hidden shadow-3xl relative"
                                >
                                    <img src={service.image} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={service.name} />
                                    <div className="absolute inset-0 bg-slate-900/10" />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- OPERATIONAL LOCATIONS --- */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="font-display text-5xl font-bold text-slate-900 uppercase tracking-tighter mb-8">
                                Operational <br /> <span className="text-blue-600">Footprint</span>
                            </h2>
                            <p className="text-slate-600 text-lg mb-12 font-light">
                                Headquartered in {company_info.operational_locations[0]}, our rapid response teams are deployed across South India's major industrial corridors.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {company_info.operational_locations.map((loc, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4 hover:border-blue-500 transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                                            <MapPin size={18} />
                                        </div>
                                        <span className="font-bold text-slate-900 uppercase text-xs tracking-widest">{loc}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="relative">
                            <div className="aspect-square bg-slate-900 rounded-[4rem] p-12 flex flex-col justify-center items-center text-center text-white overflow-hidden shadow-2xl">
                                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px]" />
                                <h3 className="text-3xl font-display font-bold uppercase mb-6 relative z-10">Start Your <br />Project Today</h3>
                                <p className="text-slate-400 mb-10 text-sm max-w-xs relative z-10">Get in touch with our engineering team for detailed technical support and site estimation.</p>
                                <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-full font-bold uppercase text-[10px] tracking-widest transition-all relative z-10 shadow-xl shadow-blue-600/20">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}