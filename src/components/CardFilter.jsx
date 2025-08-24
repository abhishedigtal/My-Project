import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBlogger,
  FaBullhorn,
  FaCloudUploadAlt,
  FaCreditCard,
  FaFacebook,
  FaGlobe,
  FaGoogle,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaPalette,
  FaPlug,
  FaRocket,
  FaSearch,
  FaShoppingCart,
  FaSyncAlt,
  FaTools,
  FaWordpress,
} from "react-icons/fa";

const cards = [
  {
    name: "Search Engine Optimization (SEO)",
    type: "Digital Marketing",
    info: "Boost your website's visibility on Google with Off-Page, On-Page, and Technical SEO.",
    icon: <FaSearch className="w-10 h-10 text-blue-600" />,
  },
  {
    name: "Google Ads (PPC Marketing)",
    type: "Digital Marketing",
    info: "Instant traffic and leads with highly targeted Google Ads campaigns.",
    icon: <FaGoogle className="w-10 h-10 text-red-600" />,
  },
  {
    name: "Meta Ads (Facebook & Instagram)",
    type: "Digital Marketing",
    info: "Run optimized Meta Ads to drive conversions across Facebook and Instagram.",
    icon: <FaFacebook className="w-10 h-10 text-blue-600" />,
  },
  {
    name: "Social Media Marketing (SMM)",
    type: "Digital Marketing",
    info: "Engage and grow your audience across all major social platforms.",
    icon: <FaBullhorn className="w-10 h-10 text-pink-600" />,
  },
  {
    name: "Brand Strategy & Consulting",
    type: "Digital Marketing",
    info: "Shape a unique brand identity that connects and converts.",
    icon: <FaPalette className="w-10 h-10 text-purple-600" />,
  },
  {
    name: "Local SEO / GMB Optimization",
    type: "Digital Marketing",
    info: "Dominate local search results and boost your Google My Business presence.",
    icon: <FaMapMarkerAlt className="w-10 h-10 text-green-600" />,
  },
  {
    name: "E-commerce Website",
    type: "Web Design & Development",
    info: "Single or multi-vendor online stores with product, cart, and checkout features.",
    icon: <FaShoppingCart className="w-10 h-10 text-blue-600" />,
  },
  {
    name: "CMS Development",
    type: "Web Design & Development",
    info: "Easy-to-manage websites using coding.",
    icon: <FaWordpress className="w-10 h-10 text-indigo-600" />,
  },
  {
    name: "Blog Website",
    type: "Web Design & Development",
    info: "user-friendly blogging systems to engage your audience.",
    icon: <FaBlogger className="w-10 h-10 text-orange-600" />,
  },
  {
    name: "Landing Page Development",
    type: "Web Design & Development",
    info: "High-converting, fast-loading pages for product launches or marketing campaigns.",
    icon: <FaRocket className="w-10 h-10 text-pink-600" />,
  },
  {
    name: "Admin Panel Development",
    type: "Web Design & Development",
    info: "Powerful dashboards to manage users, data, and site content.",
    icon: <FaTools className="w-10 h-10 text-gray-700" />,
  },
  {
    name: "Payment Gateway Integration",
    type: "Web Design & Development",
    info: "Stripe, Razorpay, PayPal, and other gateways integrated securely.",
    icon: <FaCreditCard className="w-10 h-10 text-green-600" />,
  },
  {
    name: "API Integration",
    type: "Web Design & Development",
    info: "Seamless connections to third-party services or internal systems.",
    icon: <FaPlug className="w-10 h-10 text-yellow-600" />,
  },
  {
    name: "Website Maintenance & Support",
    type: "Web Design & Development",
    info: "Ongoing updates, backups, and security monitoring.",
    icon: <FaSyncAlt className="w-10 h-10 text-teal-600" />,
  },
  {
    name: "Hosting & Deployment",
    type: "Web Design & Development",
    info: "Cloud hosting setup on platforms like Vercel, Netlify, github, hostinger, webhosting.",
    icon: <FaCloudUploadAlt className="w-10 h-10 text-cyan-600" />,
  },
  {
    name: "Business Website",
    type: "Web Design & Development",
    info: "Professional websites tailored for businesses to showcase services, build credibility, and generate leads.",
    icon: <FaGlobe className="w-10 h-10 text-blue-600" />,
  },
];

const CardFilter = () => {
  const uniqueTypes = [...new Set(cards.map((card) => card.type))];
  const [filter, setFilter] = useState(uniqueTypes[0]); // Default = first type

  const filteredData = cards.filter((card) => card.type === filter);

  return (
    <div className="p-6">
      {/* Filter Buttons */}
      <div className="flex items-center justify-center flex-wrap gap-4 mx-auto mb-6">
        {uniqueTypes.map((type, index) => (
          <button
            key={index}
            onClick={() => setFilter(type)}
            className={`border-2 rounded-lg px-4 py-1 sm:px-5 sm:py-2 shadow-2xl transition-all duration-300 ease-in-out cursor-pointer
              ${
                filter === type
                  ? "bg-green-700 text-white border-green-700"
                  : "text-green-600 border-green-600 hover:bg-green-700 hover:text-white"
              }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-xl hover:bg-green-600 hover:text-white transition-all duration-300 group"
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-green-100 group-hover:bg-white p-4 rounded-full transition-all">
                {card.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2 group-hover:text-white">
              {card.name}
            </h3>
            <p className="text-sm text-center text-gray-600 group-hover:text-white">
              {card.info}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardFilter;
