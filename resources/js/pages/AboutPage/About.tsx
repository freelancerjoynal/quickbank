import WebsiteLayout from '@/layouts/WebsiteLayout';
import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

export default function About() {
    return (
        <>
            <Head title="About" />
            <WebsiteLayout>
                <motion.section id="hero" className="min-h-screen bg-blue-500">
                    <div className="container mx-auto">
                        <div className="container mx-auto">Hello from about page</div>
                    </div>
                </motion.section>
            </WebsiteLayout>
        </>
    );
}
