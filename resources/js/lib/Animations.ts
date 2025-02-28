export const fadeIn = {
    initial: { opacity: 0, y: 100 },  // Start fully invisible and 100px lower
    whileInView: { opacity: 1, y: 0 }, // Fade in and move to normal position
    viewport: { once: false, amount: 0.2 }, // Re-animate when scrolling back
    transition: { duration: 0.5, ease: 'easeOut' } // Smooth animation
};
