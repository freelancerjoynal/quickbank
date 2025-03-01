import { FaTrophy, FaCertificate, FaMedal, FaHandHoldingHeart } from 'react-icons/fa';
import {motion} from "framer-motion"
import { fadeIn } from '@/lib/Animations';

const awardsData = [
  {
    title: "Best CSR Bank Global",
    year: "2021",
    awardBy: "International Economics Group",
    icon: <FaTrophy />,
  },
  {
    title: "Best CSR Bank Global",
    year: "2022",
    awardBy: "Global Economics Institute",
    icon: <FaCertificate />,
  },
  {
    title: "Sustainability Excellence",
    year: "2022",
    awardBy: "World Sustainability Council",
    icon: <FaMedal />,
  },
  {
    title: "Best Primary Dealer Bank",
    year: "2022",
    awardBy: "World Bank Group",
    icon: <FaHandHoldingHeart />,
  }
];

const AwardsSection = () => {
  return (
    <motion.div
    {...fadeIn}
    className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900">Awards & Major Achievements</h2>
          <p className="text-gray-600 mt-2 font-semibold">Outstanding performance and achievements.</p>
        </div>

        <div className="relative flex flex-col md:flex-row">
          {/* Left column */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Map through awards data */}
            {awardsData.slice(0, 2).map((award, index) => (
              <motion.div
              key={index}
              {...fadeIn}
              transition={{duration: index * .6, delay: index * .2}}
              className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-start mb-6">
                  <div className="mr-4 text-gray-500 text-4xl">
                    {award.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{award.title}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="w-24 text-gray-500">Year</span>
                    <span className="text-gray-500">:</span>
                    <span className="ml-2">{award.year}</span>
                  </div>
                  <div className="flex">
                    <span className="w-24 text-gray-500">Award by</span>
                    <span className="text-gray-500">:</span>
                    <span className="ml-2">{award.awardBy}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center column with trophy */}
          <div className="w-full md:w-1/3 flex justify-center items-center py-8 md:py-0">
            <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center">
              <img
                src="/assets/images/trophy.png"
                alt="Trophy"
                className="w-96 lg:w-lg h-auto object-contain"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Map through awards data */}
            {awardsData.slice(2).map((award, index) => (
              <motion.div
              key={index}
              {...fadeIn}
              transition={{duration: index * .6, delay: index * .2}}
              className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-start mb-6">
                  <div className="mr-4 text-gray-500 text-4xl">
                    {award.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{award.title}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex">
                    <span className="w-24 text-gray-500">Year</span>
                    <span className="text-gray-500">:</span>
                    <span className="ml-2">{award.year}</span>
                  </div>
                  <div className="flex">
                    <span className="w-24 text-gray-500">Award by</span>
                    <span className="text-gray-500">:</span>
                    <span className="ml-2">{award.awardBy}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AwardsSection;
