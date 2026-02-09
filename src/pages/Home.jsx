import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
   ArrowRight,
   MapPin,
   ChevronRight,
   ArrowUpRight,
   Mail,
   Phone,
   Globe
} from 'lucide-react';
import data from '../data/data.json';

const fadeInUp = {
   hidden: { opacity: 0, y: 30 },
   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
   visible: { transition: { staggerChildren: 0.1 } }
};

const Home = () => {
   const { company_info, projects } = data;
   const featuredProjects = projects.slice(0, 3);

   const serviceImages = [
      { name: "Civil Construction", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000" },
      { name: "Pre-Engineered Buildings", img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=1000" },
      { name: "MEP Services", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000" },
      { name: "Interiors", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000" },
      { name: "Renovation", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000" }
   ];

   return (
      <div className="bg-white selection:bg-blue-600 selection:text-white">

         {/* --- HERO SECTION --- */}
         <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
            {/* Background Image with Fixed Effect */}
            <div className="absolute inset-0 z-0">
               <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                  alt="Hero Background"
                  className="w-full h-full object-cover"
               />
               {/* Enhanced Gradient Overlay for better text readability */}
               <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/30"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
               <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={stagger}
                  className="max-w-4xl"
               >
                  <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-6">
                     <span className="h-[2px] w-12 bg-blue-500"></span>
                     <span className="text-blue-400 font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                        Since {company_info.established_since}
                     </span>
                  </motion.div>

                  <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1] uppercase mb-8">
                     Modern <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Engineering</span> <br />
                     Solutions
                  </motion.h1>

                  <motion.p variants={fadeInUp} className="text-slate-300 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
                     Delivering precision in every structure. We specialize in industrial, commercial, and residential projects with a commitment to excellence.
                  </motion.p>

                  <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-8">
                     <Link to="/contact" className="group flex items-center gap-4 bg-blue-600 hover:bg-white hover:text-blue-600 transition-all duration-500 px-8 py-4 rounded-full text-white font-bold uppercase text-xs tracking-widest shadow-xl shadow-blue-900/20">
                        Work With Us <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                     </Link>

                     <div className="flex items-center gap-8 border-l border-white/20 pl-8">
                        <a href={`tel:${company_info.contact_details.phone[0]}`} className="flex flex-col group">
                           <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-1">Call Us</span>
                           <span className="text-white font-medium group-hover:text-blue-400 transition tracking-wider">{company_info.contact_details.phone[0]}</span>
                        </a>
                     </div>
                  </motion.div>
               </motion.div>
            </div>

            {/* Bottom Decorative Scroll Prompt */}
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1, duration: 1 }}
               className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
               <span className="text-[10px] text-white/70 uppercase tracking-[0.4em] animate-pulse">Scroll</span>
               <div className="w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
            </motion.div>
         </section>

         {/* --- CLIENT PRESTIGE GRID --- */}

         <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
               <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-12">
                  Trusted By Industry Leaders
               </p>

               <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
                  {/* Generating 8 client logos as requested */}
                  {Array.from({ length: 8 }).map((_, i) => (
                     <div key={i} className="group w-32 h-20 md:w-40 md:h-24 flex items-center justify-center ">
                        <img
                           src={`/projects/vihaan-engineers-client-${i + 1}.jpg`}
                           alt={`Client ${i + 1}`}
                           className="max-h-full max-w-full object-contain"
                           onError={(e) => {
                              // Fallback if image missing during dev
                              e.target.style.display = 'none';
                              e.target.parentNode.innerHTML = `<span class="font-bold text-slate-300 text-xl">CLIENT ${i + 1}</span>`;
                           }}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* --- ABOUT & STATS SECTION --- */}
         <section className="py-24 md:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
               <div className="grid lg:grid-cols-2 gap-20 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="relative"
                  >
                     <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl -z-10"></div>
                     <span className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs mb-6 block">Who We Are</span>
                     <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 uppercase leading-[1.1] mb-8">
                        Precision In <br /> Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900">Step</span>
                     </h2>
                     <p className="text-slate-600 text-lg leading-relaxed mb-10 font-light border-l-4 border-blue-100 pl-6">
                        {company_info.overview}
                     </p>

                     <div className="grid grid-cols-2 gap-10">
                        <div className="border-l-2 border-slate-900 pl-6">
                           <span className="block text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2">14+</span>
                           <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Years of<br />Excellence</span>
                        </div>
                        <div className="border-l-2 border-slate-200 pl-6">
                           <span className="block text-4xl md:text-5xl font-display font-bold text-slate-900 mb-2">100%</span>
                           <span className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">Project<br />Completion</span>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="bg-[#111827] p-10 md:p-14 rounded-3xl text-white relative overflow-hidden shadow-2xl"
                  >
                     {/* Abstract decorative elements */}
                     <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                     <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-600/10 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4"></div>

                     <h3 className="font-display text-2xl font-bold uppercase mb-12 flex items-center gap-4 relative z-10">
                        Operational Core <div className="h-[1px] flex-1 bg-white/10"></div>
                     </h3>

                     <div className="space-y-12 relative z-10">
                        <div>
                           <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-6">Market Sectors</h4>
                           <div className="flex flex-wrap gap-3">
                              {company_info.sectors.map(sector => (
                                 <span key={sector} className="px-5 py-2.5 bg-white/5 border border-white/10 text-xs font-medium rounded-full hover:bg-blue-600 hover:border-blue-500 transition-all cursor-default">
                                    {sector}
                                 </span>
                              ))}
                           </div>
                        </div>

                        <div>
                           <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.3em] mb-6">Service Hubs</h4>
                           <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                              {company_info.operational_locations.map(loc => (
                                 <div key={loc} className="flex items-center gap-3 text-slate-300 group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:scale-150 transition-transform"></div>
                                    <span className="text-sm font-medium">{loc}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* --- SERVICES (Enhanced Grid) --- */}
         <section className="py-24 bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
               <div>
                  <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Expertise</span>
                  <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 uppercase">What We Build</h2>
               </div>
               <Link to="/services" className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition">
                  View All Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
               </Link>
            </div>

            <div className="max-w-[1400px] mx-auto px-4">
               <div className="grid lg:grid-cols-12 gap-6">
                  {/* Hero Service Card */}
                  <Link to="/services" className="lg:col-span-6 relative group overflow-hidden rounded-2xl h-[400px] lg:h-[600px] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
                     <img src={serviceImages[0].img} alt={serviceImages[0].name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300"></div>

                     <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                        <div className="flex justify-between items-end">
                           <div>
                              <span className="text-blue-400 text-sm font-bold tracking-widest mb-2 block">01</span>
                              <h3 className="text-white font-display text-3xl md:text-4xl uppercase font-bold mb-4">{serviceImages[0].name}</h3>
                              <p className="text-white/70 text-sm max-w-md hidden md:block">Residential and commercial complex construction with a focus on structural integrity and modern aesthetics.</p>
                           </div>
                           <div className="bg-white/10 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                              <ArrowUpRight className="text-white" size={24} />
                           </div>
                        </div>
                     </div>
                  </Link>

                  {/* Secondary Grid */}
                  <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                     {serviceImages.slice(1, 5).map((service, idx) => (
                        <Link to="/services" key={idx} className="relative group overflow-hidden rounded-2xl h-[250px] lg:h-auto cursor-pointer shadow-md hover:shadow-xl transition-all duration-500">
                           <img src={service.img} alt={service.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                           <div className="absolute inset-0 bg-black/40 group-hover:bg-blue-900/40 transition-colors duration-500"></div>
                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>

                           <div className="absolute bottom-0 left-0 p-6 w-full">
                              <div className="flex justify-between items-end">
                                 <div>
                                    <span className="text-white/40 text-xs font-bold tracking-widest mb-2 block">0{idx + 2}</span>
                                    <h3 className="text-white font-display text-lg md:text-xl uppercase font-bold leading-tight">{service.name}</h3>
                                 </div>
                                 <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                    <ArrowRight className="text-white" size={18} />
                                 </div>
                              </div>
                           </div>
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         {/* --- FEATURED PROJECTS --- */}
         {/* --- RECENT VENTURES SECTION --- */}
         <section className="py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-6">
               {/* Header with Architectural Flair */}
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                  <div className="space-y-4">
                     <div className="flex items-center gap-3">
                        <span className="w-12 h-[1px] bg-blue-600"></span>
                        <span className="text-blue-600 font-bold uppercase tracking-[0.4em] text-[10px]">
                           Portfolio
                        </span>
                     </div>
                     <h2 className="font-display text-5xl md:text-7xl font-bold uppercase text-slate-900 tracking-tighter leading-[0.85]">
                        Recent <br /> <span className="text-slate-400">Ventures</span>
                     </h2>
                  </div>

                  <Link
                     to="/projects"
                     className="group relative flex items-center gap-4 text-slate-900 font-bold uppercase text-[11px] tracking-[0.2em]"
                  >
                     <span className="relative z-10">View All Projects</span>
                     <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                        <ArrowRight size={16} className="group-hover:rotate-[-45deg] transition-transform duration-500" />
                     </div>
                  </Link>
               </div>

               {/* Project Grid - Targeting 4th, 8th, 10th projects */}
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {projects
                     .filter((_, index) => [3, 7, 9].includes(index))
                     .map((project, idx) => (
                        <motion.div
                           key={project.id}
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.6, delay: idx * 0.1 }}
                           className="group relative h-[550px] overflow-hidden rounded-[2.5rem] bg-slate-100"
                        >
                           {/* Image Parallax Effect */}
                           <img
                              src={project.images[0]}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                           />

                           {/* Premium Gradient Overlay */}
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-500" />

                           {/* Content Overlay */}
                           <div className="absolute inset-0 p-10 flex flex-col justify-end">
                              <div className="space-y-4">
                                 {/* Category Tag */}
                                 <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                                       {project.category}
                                    </span>
                                 </div>

                                 {/* Title */}
                                 <h3 className="text-3xl font-display font-bold text-white uppercase leading-none tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                 </h3>

                                 {/* Meta Info (Location) */}
                                 <div className="flex items-center gap-2 text-slate-400">
                                    <MapPin size={14} className="text-blue-500" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">
                                       {project.location}
                                    </span>
                                 </div>

                                 {/* Divider & Action */}
                                 <div className="pt-4 overflow-hidden">
                                    <Link
                                       to={`/project/${project.slug}`}
                                       className="inline-flex items-center gap-3 text-white font-bold uppercase text-[10px] tracking-[0.3em] group/btn"
                                    >
                                       <span className="relative">
                                          Explore Case Study
                                          <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-blue-500 scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-500"></span>
                                       </span>
                                       <ArrowUpRight size={14} className="text-blue-500 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     ))}
               </div>
            </div>
         </section>

         {/* --- LEADERSHIP / TEAM TEASER --- */}
         <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
               <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-600 rounded-full blur-[120px]"></div>
               <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[60%] bg-purple-900 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
               <div className="grid lg:grid-cols-12 gap-16 items-center">

                  <div className="lg:col-span-5 order-2 lg:order-1">
                     <div className="relative group">
                        <div className="absolute inset-0 bg-blue-500 rounded-[2rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
                        <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
                           <img src="/md.jpg" alt="Arunkumar M" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />

                           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                           <div className="absolute bottom-8 left-8">
                              <h4 className="font-display text-2xl font-bold uppercase text-white">Arunkumar M.</h4>
                              <p className="text-blue-400 text-[10px] font-bold tracking-widest uppercase mt-1">Managing Director</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="lg:col-span-7 order-1 lg:order-2">
                     <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Leadership</span>
                     <h2 className="font-display text-4xl md:text-6xl font-bold uppercase mb-8 leading-tight">
                        Driven By <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">Vision & Values</span>
                     </h2>
                     <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl font-light">
                        "{company_info.managing_director.bio}"
                     </p>

                     <div className="grid sm:grid-cols-2 gap-4 mb-12">
                        {[
                           { name: "R. Ramesh", role: "Ops Manager" },
                           { name: "A. Swapna", role: "Accounts Head" },
                           { name: "M. Muthukumar", role: "Project Manager" },
                           { name: "L. Raja", role: "MEP Manager" }
                        ].map((member, i) => (
                           <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-display font-bold text-white shadow-lg">
                                 {member.name.charAt(0)}
                              </div>
                              <div>
                                 <h4 className="font-bold text-white uppercase text-sm">{member.name}</h4>
                                 <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{member.role}</p>
                              </div>
                           </div>
                        ))}
                     </div>

                     <div className="flex flex-wrap gap-4">
                        <Link to="/about" className="px-8 py-3.5 bg-blue-600 text-white font-bold uppercase text-[10px] tracking-[0.2em] rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg shadow-blue-900/50">Full Company Profile</Link>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* --- FOOTER CTA --- */}
         <section className="bg-white py-32 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
               <h2 className="font-display text-5xl md:text-7xl font-bold text-slate-900 uppercase mb-8 leading-[0.9]">
                  Let's Build <br /><span className="text-stroke-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Something Great</span>
               </h2>
               <p className="text-slate-500 text-lg mb-12 max-w-xl mx-auto font-light">
                  Ready to start your next infrastructure venture? We are here to bring engineering excellence to your project.
               </p>
               <Link to="/contact" className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-blue-600 hover:scale-105 transition-all duration-300 shadow-2xl">
                  Start A Conversation <ArrowRight size={20} />
               </Link>
            </div>
         </section>

      </div>
   );
};

export default Home;