import { motion } from 'framer-motion';

export default function Privacy() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-display text-4xl md:text-5xl font-bold text-[#111827] uppercase mb-4">Privacy Policy</h1>
                    <p className="text-gray-500 mb-12">Last updated: February 2026</p>

                    <div className="prose prose-lg text-gray-600 prose-headings:font-display prose-headings:uppercase prose-headings:font-bold prose-headings:text-[#111827] prose-a:text-[#3b82f6]">
                        <p className="lead">
                            At VIHAAN ENGINEERS, we take your privacy seriously. This policy describes how we collect, use, and handle your data.
                        </p>

                        <h2>1. Information Collection</h2>
                        <p>
                            We collect information you provide directly to us, such as when you fill out a contact form, request a quote, or communicate with us via email.
                            This may include your name, email address, phone number, and project details.
                        </p>

                        <h2>2. Use of Information</h2>
                        <p>
                            We use the information we collect to provide, maintain, and improve our services, to respond to your inquiries, and to send you updates about your projects.
                        </p>

                        <h2>3. Data Protection</h2>
                        <p>
                            We implement a variety of security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
                        </p>

                        <h2>4. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:vihaanengineers20@gmail.com">vihaanengineers20@gmail.com</a>.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
