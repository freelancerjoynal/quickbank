import React from 'react';
import { motion } from 'framer-motion';

export default function ShortIntro() {
  return (
    <motion.section
      className="min-h-[75vh] py-20 m-auto"
      initial="hidden"
      whileInView="visible" // Triggers the visible animation when in view
      exit="hidden" // Resets the animation when it leaves the view
      variants={{
        hidden: { scale: 0.5 },
        visible: { scale: 1 },
      }}
      viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the section is in view
    >
      <div className="container mx-auto bg-purple-500 rounded-lg">
        <h2 className="text-9xl text-center uppercase">Intro</h2>
      </div>
    </motion.section>
  );
}
