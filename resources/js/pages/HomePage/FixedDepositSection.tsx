import { fadeIn } from "@/lib/Animations";
import { delay, motion } from "framer-motion";
const FixedDepositSection = () => {
    // Array of key benefits
    const keyBenefits = [
      { id: 1, text: '100% Guaranteed returns' },
      { id: 2, text: 'Loan against FD available' },
      { id: 3, text: 'Flexible tenure options' },
    ];

    return (
      <motion.section
      {...fadeIn}
       className="flex flex-col md:flex-row items-center gap-6 p-8 space-y-8 md:space-y-0 max-w-5xl mx-auto">
        {/* Left Section: Image */}
        <div className="flex justify-center md:w-1/2">
          <img
            src={`${route('home')}/assets/images/moneyman.jpg`} // Replace with the image path
            alt="Fixed Deposit"
            className="w-full max-w-3xl h-auto rounded-lg"
          />
        </div>

        {/* Right Section: Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4">Fixed Deposit</h2>
          <p className="text-lg mb-6">
            Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.
          </p>

          {/* Key Benefits List */}
          <div className="space-y-4">

            {keyBenefits.map((benefit, index) => (
              <motion.div key={benefit.id} className="flex items-center"
              {...fadeIn}
              >
                <motion.span className="text-xl mr-2" {...fadeIn} transition={{duration: index * .2,  delay: index * .2}}  >✔</motion.span>
                <motion.p className="text-lg" {...fadeIn}  transition={{duration: index * .2, delay: index * .3}}    >{benefit.text}</motion.p>
              </motion.div>
            ))}

          </div>

          {/* Download Button */}
          <motion.a
            href="/guide-to-fixed-deposits.pdf" // Link to the PDF file
            className="mt-6 inline-block text-lg py-2 px-6 rounded-full shadow-lg transition-all"
            {...fadeIn}
            transition={{duration: 2}}
          >
            Download Guide to Fixed Deposits
          </motion.a>
        </div>
      </motion.section>
    );
  };

  export default FixedDepositSection;
