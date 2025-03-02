import { fadeIn } from '@/lib/Animations';
import { motion } from 'framer-motion';
const FixedDepositSection = () => {
    // Array of key benefits
    const keyBenefits = [
        { id: 1, text: '100% Guaranteed returns' },
        { id: 2, text: 'Loan against FD available' },
        { id: 3, text: 'Flexible tenure options' },
    ];

    return (
        <motion.section {...fadeIn} className="mx-auto flex max-w-5xl flex-col items-center gap-6 space-y-8 p-8 md:flex-row md:space-y-0">
            {/* Left Section: Image */}
            <div className="flex justify-center md:w-1/2">
                <img
                    src={`${route('home')}/assets/images/moneyman.jpg`} // Replace with the image path
                    alt="Fixed Deposit"
                    className="h-auto w-full max-w-3xl rounded-lg"
                />
            </div>

            {/* Right Section: Content */}
            <div className="text-center md:w-1/2 md:text-left">
                <h2 className="mb-4 text-3xl font-semibold">Fixed Deposit</h2>
                <p className="mb-6 text-lg">
                    Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.
                </p>

                {/* Key Benefits List */}
                <div className="space-y-4">
                    {keyBenefits.map((benefit, index) => (
                        <motion.div key={benefit.id} className="flex items-center" {...fadeIn}>
                            <motion.span className="mr-2 text-xl" {...fadeIn} transition={{ duration: index * 0.2, delay: index * 0.2 }}>
                                ✔
                            </motion.span>
                            <motion.p className="text-lg" {...fadeIn} transition={{ duration: index * 0.2, delay: index * 0.3 }}>
                                {benefit.text}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>

                {/* Download Button */}
                <motion.a
                    href="/guide-to-fixed-deposits.pdf" // Link to the PDF file
                    className="mt-6 inline-block rounded-full px-6 py-2 text-lg shadow-lg transition-all"
                    {...fadeIn}
                    transition={{ duration: 1 }}
                >
                    Download Guide to Fixed Deposits
                </motion.a>
            </div>
        </motion.section>
    );
};

export default FixedDepositSection;
