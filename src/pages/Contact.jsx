import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import ContactForm from '../components/ui/ContactForm';
import data from '../data/data.json';

const { company_info } = data;

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function Contact() {
    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Contact Vihaan Engineers | Industrial Construction Bangalore"
                description="Get a quote for PEB sheds and industrial civil works."
                canonical="/contact"
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[40vh] md:h-[50vh] min-h-[350px] flex items-center bg-[#0f172a] overflow-hidden pt-16">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                        alt="Contact Us"
                        className="w-full h-full object-cover opacity-20 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/40 via-[#0f172a] to-[#0f172a]" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 w-full text-center lg:text-left">
                    <motion.div {...fadeInUp}>
                        <span className="text-blue-500 text-[10px] md:text-sm font-black tracking-[0.4em] uppercase mb-4 block">
                            Inquiry & Support
                        </span>
                        <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold text-white uppercase leading-[0.9] tracking-tight">
                            Let's Build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Together</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTACT SECTION --- */}
            <section className="relative z-20 -mt-10 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-0 shadow-2xl rounded-[2rem] overflow-hidden bg-white border border-slate-100">

                        {/* LEFT: Contact Info */}
                        <div className="lg:col-span-5 bg-[#0f172a] p-6 sm:p-10 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] -mr-32 -mt-32" />

                            <div className="relative z-10">
                                <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-widest mb-8 border-b border-white/10 pb-4">Reach Us</h2>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1">Location</p>
                                            <p className="text-slate-300 text-sm leading-relaxed">{company_info.contact_details.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 md:gap-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        {/* CRITICAL FIX: MIN-W-0 and BREAK-ALL prevents layout breaking */}
                                        <div className="min-w-0 flex-1">
                                            <p className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.2em] mb-1">Official Email</p>
                                            <a href={`mailto:${company_info.contact_details.email}`}
                                                className="text-lg md:text-xl font-bold hover:text-cyan-400 transition-colors block break-all">
                                                {company_info.contact_details.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <a href={`https://wa.me/${company_info.contact_details.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white px-4 py-4 rounded-xl font-bold transition-all text-sm">
                                        WhatsApp
                                    </a>
                                    <a href={`tel:${company_info.contact_details.call.replace(/\D/g, '')}`} className="flex items-center justify-center gap-2 bg-blue-500/10 border border-blue-500/20 hover:bg-blue-600 text-blue-400 hover:text-white px-4 py-4 rounded-xl font-bold transition-all text-sm">
                                        Call Expert
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Form Container */}
                        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 bg-white">
                            <div className="max-w-lg mx-auto lg:ml-0">
                                <div className="mb-8">
                                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 uppercase mb-2">Project Inquiry</h3>
                                    <p className="text-slate-500 text-sm md:text-base">Submit your requirements for a technical consultation.</p>
                                </div>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MAP SECTION --- */}
            <section className="pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7566270381084!2d77.6200257745458!3d12.923363316041187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae146098045555%3A0xc3f8376c96b75739!2sVihaan%20Engineers!5e0!3m2!1sen!2sin!4v1709555000000!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 p-8 md:p-10 rounded-[2rem] flex flex-col justify-center text-center lg:text-left">
                            <div className="flex justify-center lg:justify-start mb-6">
                                <svg width="40" height="40" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" /><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" /><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z" /><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" /><path fill="none" d="M0 0h48v48H0z" /></svg>
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 uppercase mb-4 tracking-tight">Visit Our Office</h4>
                            <p className="text-slate-600 mb-8 text-sm leading-relaxed">View recent project photos, read client reviews, and get directions to our HQ.</p>
                            <a href="https://share.google/Iol0WKIAJlZ3IOpFn" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-white border border-slate-300 hover:border-blue-500 hover:text-blue-600 px-6 py-4 rounded-xl font-bold transition-all text-sm shadow-sm">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                                View Live Profile
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}