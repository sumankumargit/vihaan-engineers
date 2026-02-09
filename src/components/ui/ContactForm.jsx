import React, { useState } from 'react';

export default function ContactForm() {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxMFW5U2J14RDa9KUSvebaPJVHTiq8-riEvDOMIte2aJlLrE6E5RbyVbrTewPHX4Wt_/exec";

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Using no-cors is sometimes needed for Google Scripts, 
            // but since we want the JSON response, we'll try standard first.
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Script Redirects
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            console.error("Error!", error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputClasses = "w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 md:py-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 text-slate-900";

    if (status === 'success') {
        return (
            <div className="text-center py-12 bg-blue-50 rounded-3xl border border-blue-100">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-600 mb-6">We'll get back to you within 24 hours.</p>
                <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold hover:underline">Send another message</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Full Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" className={inputClasses} />
                </div>
                <div>
                    <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Phone Number</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 00000 00000" className={inputClasses} />
                </div>
            </div>
            <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Email Address</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" className={inputClasses} />
            </div>
            <div>
                <label className="block text-xs font-black uppercase tracking-widest text-slate-500 mb-2 ml-1">Project Details</label>
                <textarea name="message" required value={formData.message} onChange={handleChange} rows="4" placeholder="Briefly describe your requirements..." className={inputClasses}></textarea>
            </div>

            <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-[#0f172a] hover:bg-blue-600 text-white font-bold py-4 md:py-5 rounded-2xl transition-all shadow-xl shadow-blue-900/10 active:scale-[0.98] disabled:opacity-70"
            >
                {status === 'loading' ? 'Sending...' : 'Request Consultation'}
            </button>
            {status === 'error' && <p className="text-red-500 text-center text-sm">Something went wrong. Please try again.</p>}
        </form>
    );
}