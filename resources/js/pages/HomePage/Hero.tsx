import React from "react";
import { motion } from "framer-motion";
import { Link } from "@inertiajs/react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="bg-gradient-to-r from-black via-yellow-800 to-black min-h-screen flex items-center justify-center"
        >
            <div className="container mx-auto">
                <motion.h1
                    className="uppercase text-center font-black text-transparent bg-clip-text bg-cover text-6xl md:text-[220px]"
                    style={{
                        backgroundImage: "url('/assets/images/textBg.jpg')",
                    }}
                    animate={{ fontSize: "220px" }}
                    initial={{ fontSize: "60px" }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                        duration: 5,
                    }}
                    exit="hidden"
                >
                    Quick Bank
                </motion.h1>
                <div className="text-center">
                    <Link
                        href="/#"
                        className="bg-gradient-to-r from-yellow-600 via-slate-600 to-yellow-600 px-4 py-3 rounded-full uppercase border animate-border-dots"
                    >
                        Apply For Loan
                    </Link>
                    <p className="text-xl lg:text-2xl mt-4 max-w-[550px] m-auto">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quos obcaecati ullam earum cumque recusandae harum culpa voluptatum? Quos, quas.
                    </p>
                </div>
            </div>
        </section>
    );
}
