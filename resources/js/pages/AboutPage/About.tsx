import { Head } from "@inertiajs/react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import React from "react";

export default function About() {
    return (
        <>
            <Head title="About" />
                <motion.section id="hero" className="bg-blue-500 min-h-screen">
                    <div className="container mx-auto">
                        <div className="container mx-auto">
                            Hello from about page
                        </div>
                    </div>
                </motion.section>
        </>
    );
}
