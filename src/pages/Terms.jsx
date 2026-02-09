import { motion } from 'framer-motion';

export default function Terms() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-[#111827] uppercase mb-4">Terms of Service</h1>
                    <p className="text-gray-500 mb-12">Last updated: February 2026</p>

                    <div className="prose prose-lg text-gray-600 prose-headings:font-display prose-headings:uppercase prose-headings:font-bold prose-headings:text-[#111827] prose-a:text-[#3b82f6]">
                        <p className="lead">
                            Please read these Terms of Service carefully before using the VIHAAN ENGINEERS website.
                        </p>

                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service.
                        </p>

                        <h2>2. Quality & Standards</h2>
                        <p>
                            We are committed to delivering high-quality construction and engineering services. All projects are executed in accordance with applicable safety standards and building codes.
                        </p>

                        <h2>3. Intellectual Property</h2>
                        <p>
                            The content, features, and functionality of this website are and will remain the exclusive property of VIHAAN ENGINEERS.
                        </p>

                        <h2>4. Changes to Terms</h2>
                        <p>
                            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                        </p>

                        <h2>5. Contact Us</h2>
                        <p>
                            If you have any questions about these Terms, please contact us at <a href="mailto:vihaanengineers20@gmail.com">vihaanengineers20@gmail.com</a>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
