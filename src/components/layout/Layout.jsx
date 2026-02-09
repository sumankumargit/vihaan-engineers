import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from './Nav';
import Footer from './Footer';
import FloatingContact from '../ui/FloatingContact';

const pageVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
};

export default function Layout({ children }) {
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex flex-col bg-white text-[#111827] antialiased">
            <Nav />

            {children}

            <FloatingContact />
            <Footer />
        </div>
    );
}
