import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiDeviceMobile,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
  HiOutlinePuzzle,
  HiOutlineCode,
  HiOutlineAdjustments,
  HiOutlineDocumentText,
  HiOutlineLockClosed,
  HiOutlineGlobeAlt,
  HiOutlineStar,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import {
  FaWordpress,
  FaElementor,
  FaGoogle,
  FaAward,
  FaAccessibleIcon,
  FaRocket,
  FaRegClock,
  FaCheckCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

// Animation helpers (exported for reuse)
// fadeIn removed everywhere
export const staggerContainer = (staggerChildren = 0.15, delayChildren = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

export const slideIn = (direction, type = "tween", delay = 0, duration = 0.8) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};

export const textVariant = (delay = 0.2) => {
  return {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
};

export const scale = (delay = 0.2) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay,
      },
    },
  };
};

// --- Main ServiceId1 Page Component ---
const ServiceId1 = () => {
  // Shared modal state for all forms
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // Modal form logic
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS config
    const SERVICE_ID = "service_5hd83jn";
    const TEMPLATE_ID = "template_28q7icj";
    const PUBLIC_KEY = "PGUyAo6dkkkPRFJ2K";

    setSubmitting(true);
    try {
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          position: formData.position,
          subject: "New WordPress Project Request",
          message: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Company: ${formData.company}
            Project Details: ${formData.position}
          `,
        },
        PUBLIC_KEY
      );

      if (result.status === 200 || result.text === "OK") {
        alert("Thank you! Your request has been submitted successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          position: "",
        });
        setShowForm(false);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
    setSubmitting(false);
  };

  // --- Hero Section ---
  const heroImage =
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80";
  // --- Company Logo Section ---
  const logos = [
    {
      src: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg",
      alt: "WordPress",
      icon: <FaWordpress className="text-blue-700 text-4xl" />,
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/elementor-1.svg",
      alt: "Elementor",
      icon: <FaElementor className="text-pink-600 text-4xl" />,
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/google-1-1.svg",
      alt: "Google",
      icon: <FaGoogle className="text-yellow-500 text-4xl" />,
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/award-1.svg",
      alt: "Award",
      icon: <FaAward className="text-yellow-400 text-4xl" />,
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/wordpress-vip.svg",
      alt: "WordPress VIP",
      icon: <FaWordpress className="text-indigo-700 text-4xl" />,
    },
  ];

  // --- Purpose Section ---
  const purposeFeatures = [
    {
      icon: <HiOutlineGlobeAlt className="text-blue-600 text-3xl" />,
      title: "WordPress Design & Development",
      description:
        "Our WordPress experts deliver innovative, high-performance websites tailored to your business needs.",
    },
    {
      icon: <FaRocket className="text-green-500 text-3xl" />,
      title: "Performance & Speed",
      description:
        "We optimize every site for fast load times and seamless user experience.",
    },
    {
      icon: <HiOutlineTrendingUp className="text-purple-600 text-3xl" />,
      title: "Enhanced Scalability",
      description:
        "Grow your business with a scalable website that adapts to your needs.",
    },
  ];

  // --- Features Section ---
  const features = [
    {
      icon: <HiDeviceMobile className="text-blue-600 text-4xl drop-shadow-lg" />,
      title: "Responsive Web Design",
      description:
        "Your website will look and work perfectly on all devices, ensuring a consistent experience for every visitor.",
      bg: "from-blue-100 to-cyan-100",
      tag: "Mobile Friendly",
    },
    {
      icon: <HiOutlinePuzzle className="text-pink-600 text-4xl drop-shadow-lg" />,
      title: "Third-Party Integration",
      description:
        "We provide custom API integrations and functionalities for fast, secure, and robust websites.",
      bg: "from-pink-100 to-purple-50",
      tag: "API & Plugins",
    },
    {
      icon: <HiOutlineCode className="text-indigo-600 text-4xl drop-shadow-lg" />,
      title: "PSD To WordPress",
      description:
        "Get a pixel-perfect WordPress site from your PSD design, easy to manage and fully functional.",
      bg: "from-indigo-100 to-blue-50",
      tag: "Custom Build",
    },
    {
      icon: (
        <HiOutlineAdjustments className="text-emerald-600 text-4xl drop-shadow-lg" />
      ),
      title: "Custom Functionality",
      description:
        "We design and develop custom features to fit your unique business requirements.",
      bg: "from-emerald-100 to-green-100",
      tag: "Tailored Solutions",
    },
    {
      icon: (
        <FaAccessibleIcon className="text-yellow-500 text-4xl drop-shadow-lg" />
      ),
      title: "Accessibility",
      description:
        "Our sites are built to be accessible for all, meeting the needs of users with disabilities.",
      bg: "from-yellow-100 to-orange-50",
      tag: "WCAG/ADA",
    },
    {
      icon: <HiOutlineLockClosed className="text-red-500 text-4xl drop-shadow-lg" />,
      title: "Robust Security",
      description:
        "We implement firewalls and advanced security to protect your site from threats and malware.",
      bg: "from-red-100 to-pink-100",
      tag: "Secure",
    },
  ];

  // --- Schedule Section ---
  const industries = [
    {
      key: "maintenance",
      icon: (
        <FaRegClock className="text-blue-600 text-4xl md:text-5xl mb-2 md:mb-4" />
      ),
      title: "Website Maintenance",
      description:
        "Keep your site running smoothly with regular updates, backups, and security monitoring.",
      color: "from-blue-100 to-blue-50",
    },
    {
      key: "seo",
      icon: (
        <FaGoogle className="text-yellow-500 text-4xl md:text-5xl mb-2 md:mb-4" />
      ),
      title: "Search Engine Optimization",
      description:
        "Boost your online presence and reach your market potential with our SEO services.",
      color: "from-yellow-100 to-orange-50",
    },
    {
      key: "branding",
      icon: (
        <HiOutlineStar className="text-purple-600 text-4xl md:text-5xl mb-2 md:mb-4" />
      ),
      title: "Branding & Corporate Image",
      description:
        "Showcase your brand with a custom, interactive website that engages and converts.",
      color: "from-purple-100 to-purple-50",
    },
  ];
  const [activeIndustry, setActiveIndustry] = useState(industries[0].key);

  // --- Monitor Section ---
  const practiceAreas = [
    {
      icon: (
        <HiOutlineDocumentText className="text-blue-600 text-4xl mb-3 drop-shadow-lg" />
      ),
      title: "Content Management",
      desc: "Easy-to-use WordPress CMS for effortless content updates.",
      color: "from-blue-100 to-cyan-100",
    },
    {
      icon: (
        <HiOutlinePuzzle className="text-pink-600 text-4xl mb-3 drop-shadow-lg" />
      ),
      title: "Plugin & API Integration",
      desc: "Integrate any third-party service or plugin to extend your site’s functionality.",
      color: "from-pink-100 to-purple-50",
    },
    {
      icon: (
        <HiOutlineLightningBolt className="text-green-500 text-4xl mb-3 drop-shadow-lg" />
      ),
      title: "Performance Optimization",
      desc: "Speed up your website for better user experience and SEO.",
      color: "from-green-100 to-emerald-100",
    },
    {
      icon: (
        <HiOutlineLockClosed className="text-red-500 text-4xl mb-3 drop-shadow-lg" />
      ),
      title: "Security & Backups",
      desc: "Protect your site with advanced security and regular backups.",
      color: "from-red-100 to-pink-100",
    },
    {
      icon: (
        <FaAccessibleIcon className="text-yellow-500 text-4xl mb-3 drop-shadow-lg" />
      ),
      title: "Accessibility Services",
      desc: "Ensure your website is accessible to everyone, including users with disabilities.",
      color: "from-yellow-100 to-orange-50",
    },
    {
      icon: (
        <HiOutlineTrendingUp className="text-purple-600 text-4xl mb-3 drop-shadow-lg" />
      ),
      title: "SEO & Analytics",
      desc: "Grow your traffic with SEO best practices and analytics integration.",
      color: "from-purple-100 to-blue-100",
    },
  ];
  const monitorFeatures = [
    "Responsive & mobile-friendly design",
    "Custom plugin and API integration",
    "SEO optimization for higher rankings",
    "Ongoing maintenance & security",
  ];

  // --- Render ---
  return (
    <div className="bg-[#0D0B25] min-h-screen w-full">
      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 container mx-auto mb-0 gap-4 md:gap-6"
      >
        {/* Left Column */}
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-5">
          <motion.div>
            <div className="flex items-center gap-2 bg-gray-50 w-fit px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
              <FaWordpress className="text-blue-700" />
              <span className="text-xs sm:text-sm font-medium poppins-regular">
                WordPress Experts
              </span>
            </div>
          </motion.div>
          <motion.h1
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="baloo-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#ffffff] drop-shadow-lg"
          >
            WordPress Design & Development
          </motion.h1>
          <motion.p
            className="poppins-regular text-gray-300 text-base sm:text-lg md:text-xl max-w-xl"
          >
            Our WordPress web developers create innovative, high-performance websites of any complexity. Count on us for an attractive, scalable, and secure website that meets your organization's needs.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-2 max-w-md"
          >
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center gap-2 items-center shadow-xl text-base sm:text-lg bg-gradient-to-r from-[#C7F380] to-green-400 backdrop-blur-md lg:font-semibold isolation-auto border-[#C7F380] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#0D263A] hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-5 sm:px-7 py-2.5 sm:py-3.5 overflow-hidden border-2 rounded-full group"
            >
              <span className="relative z-10 text-[#0D263A] group-hover:text-black transition-colors duration-300 poppins-regular">
                Get An Estimate Quote
              </span>
            </motion.button>
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center gap-2 items-center shadow-xl text-base sm:text-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white font-semibold px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full border-2 border-blue-400 hover:from-blue-500 hover:to-blue-700 transition-all duration-300"
            >
              <span className="relative z-10">Hire An Expert</span>
            </motion.button>
          </motion.div>
        </div>
        {/* Right Column - Images */}
        <motion.div
          className="w-full md:w-1/2 mt-6 sm:mt-8 md:mt-0 pl-0 md:pl-4 lg:pl-6 flex justify-center md:justify-end"
        >
          <div className="relative">
            <img
              src={heroImage}
              alt="WordPress Website Example"
              className="rounded-lg relative z-10 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </motion.div>
      </section>

      {/* Purpose Section */}
      <section
        id="about"
        className="relative w-full bg-gradient-to-br from-gray-50 via-white to-purple-50 py-20 px-4 md:px-8 overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
          >
            <motion.div
              className="baloo-text inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-4"
            >
              WordPress Design and Development
            </motion.div>
            <motion.p
              className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto poppins-regular"
            >
              We build high-performance WordPress websites that reflect your brand and drive results. From responsive design to custom functionality, our team ensures your site is fast, scalable, and secure.
              <br />
              <span className="block mt-4 font-bold text-gray-800 poppins-bold">
                Get a website that grows with your business and delights your customers.
              </span>
            </motion.p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {purposeFeatures.map((feature, idx) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 baloo-text">
                  {feature.title}
                </h3>
                <p className="text-gray-600 poppins-regular">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        className="relative max-w-7xl mx-auto px-4 py-24"
      >
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-b from-[#18486b] via-[#185a8a] to-[#0d253a] rounded-full blur-3xl opacity-30 pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-b from-[#18486b] via-[#185a8a] to-[#0d253a] rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <motion.div
          className="text-center mb-16 relative z-10"
        >
          <motion.div
            className="baloo-text inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold px-5 py-2 rounded-full tracking-wider mb-5 shadow"
          >
            Building A Website That Reflects Your Brand
          </motion.div>
          <motion.h2
            variants={textVariant(0.2)}
            className="baloo-text text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-emerald-600 bg-clip-text text-[#ffffff]"
          >
            Robust Web Design To Showcase Your Brand
          </motion.h2>
          <motion.p
            className="poppins-regular text-gray-300 text-lg md:text-xl max-w-2xl mx-auto"
          >
            An interactive, custom website is your digital footprint. We design and develop sites that engage, convert, and grow your business.
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 8px 32px 0 rgba(99,102,241,0.10)",
              }}
              className={`group bg-gradient-to-br ${feature.bg} rounded-3xl shadow-xl p-10 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-[1.03]`}
            >
              <motion.div
                className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300"
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                variants={textVariant(0.3)}
                className="baloo-text text-2xl font-semibold mb-3 text-gray-900 "
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 text-base poppins-regular"
              >
                {feature.description}
              </motion.p>
              <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 font-semibold">
                {feature.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Schedule Section */}
      <section id="services" className="flex justify-center w-full">
        <motion.section
          className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-12 flex flex-col items-center"
        >
          <motion.div
            className="text-center mb-8 w-full flex flex-col items-center"
          >
            <motion.span
              className="baloo-text inline-block bg-gradient-to-r from-blue-100 via-yellow-100 to-purple-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full tracking-wider mb-4"
            >
              Importance Of Website Maintenance
            </motion.span>
            <motion.h2
              variants={textVariant(0.5)}
              className="baloo-text text-3xl md:text-4xl font-bold text-[#ffffff] mb-2"
            >
              Boost Your Online Presence With A Fully Optimized Website
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto poppins-regular"
            >
              From design and development to SEO and ongoing maintenance, we help you discover your market potential and keep your website at its best.
            </motion.p>
          </motion.div>
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-12 w-full">
            {/* Interactive Tabs */}
            <div className="flex flex-row md:flex-col gap-3 md:gap-6 w-full md:w-1/2 justify-center md:justify-center mb-6 md:mb-0 md:pl-0 md:pr-0 md:ml-9">
              {industries.map((industry) => (
                <button
                  key={industry.key}
                  onClick={() => setActiveIndustry(industry.key)}
                  className={`flex flex-col items-center justify-center w-full md:w-auto px-4 py-3 md:px-5 md:py-4 rounded-2xl font-semibold transition-all duration-200 baloo-text text-base md:text-lg whitespace-normal text-center ${
                    activeIndustry === industry.key
                      ? "bg-gradient-to-r " +
                        industry.color +
                        " text-gray-900 shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  } focus:outline-none focus:ring-2 focus:ring-blue-300`}
                  aria-current={activeIndustry === industry.key ? "true" : "false"}
                  style={{
                    minWidth: 0,
                    wordBreak: "break-word",
                    fontWeight: 600,
                  }}
                >
                  <span className="text-base md:text-lg leading-tight flex items-center gap-2">
                    {industry.icon}
                    {industry.title}
                  </span>
                  {activeIndustry === industry.key && (
                    <motion.span
                      layoutId="active-dot"
                      className="mt-2 w-2 h-2 rounded-full bg-[#0D263A]"
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                  )}
                </button>
              ))}
            </div>
            {/* Animated Card */}
            <div className="w-full md:w-2/3 flex justify-center items-center md:pl-0 md:pr-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndustry}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      duration: 1.25,
                      delay: 0,
                      ease: [0.25, 0.25, 0.25, 0.75],
                    },
                  }}
                  exit={{
                    opacity: 0,
                    y: -40,
                    scale: 0.96,
                    transition: { duration: 0.2 },
                  }}
                  className={`relative bg-gradient-to-br ${
                    industries.find((i) => i.key === activeIndustry).color
                  } rounded-3xl shadow-xl p-7 md:p-14 flex flex-col items-center text-center min-h-[320px] w-full max-w-xl`}
                >
                  <span className="absolute top-4 right-4 text-2xl select-none pointer-events-none animate-pulse">
                    🔹
                  </span>
                  {industries.find((i) => i.key === activeIndustry).icon}
                  <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-2 md:mb-3 baloo-text">
                    {industries.find((i) => i.key === activeIndustry).title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg poppins-regular">
                    {industries.find((i) => i.key === activeIndustry).description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.section>
      </section>

      {/* Monitor Section */}
      <motion.section
        className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left: Content */}
          <motion.div
            className="w-full md:w-1/2"
          >
            <motion.span
              className="baloo-text inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-xs font-semibold px-5 py-2 rounded-full tracking-wider mb-5 shadow"
            >
              Result-Driven Website Design Services
            </motion.span>
            <motion.h2
              variants={textVariant(0.5)}
              className=" baloo-text text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 via-purple-700 to-emerald-600 bg-clip-text text-[#ffffff]"
            >
              Specialized WordPress Services
            </motion.h2>
            <motion.p
              className="text-gray-300 text-lg md:text-xl mb-8 poppins-regular"
            >
              We offer a full suite of WordPress services—from design and development to SEO, security, and accessibility.
            </motion.p>
            <motion.ul
              className="space-y-4 mb-8"
            >
              {monitorFeatures.map((item, idx) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-emerald-500 mt-1" />
                  <span className="text-gray-300 text-base md:text-lg poppins-regular">
                    {item}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            <motion.button
              onClick={() => setShowForm(true)}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="flex justify-center gap-2 items-center shadow-xl text-lg bg-gradient-to-r from-[#C7F380] to-green-400 backdrop-blur-md lg:font-semibold isolation-auto border-[#C7F380] before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#0D263A] hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-8 py-4 overflow-hidden border-2 rounded-full group"
            >
              <span className="relative z-10 text-[#0D263A] group-hover:text-black transition-colors duration-300 baloo-text">
                Get Started
              </span>
            </motion.button>
          </motion.div>
          {/* Right: Animated Practice Areas Grid */}
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {practiceAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 8px 32px 0 rgba(99,102,241,0.10)",
                }}
                className={`bg-gradient-to-br ${area.color} rounded-2xl shadow-lg p-7 flex flex-col items-start hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="mb-2">{area.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors baloo-text">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm poppins-regular">
                  {area.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Modal Form (shared for all CTAs) */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4"
            onClick={() => setShowForm(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md w-full shadow-2xl mx-auto"
            >
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 baloo-text">
                  Request a WordPress Quote
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close form"
                  type="button"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    autoComplete="name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    autoComplete="email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    autoComplete="tel"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="company"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    autoComplete="organization"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors text-sm sm:text-base"
                    placeholder="Enter company name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="position"
                    className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C7F380] focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                    placeholder="Describe your WordPress project or requirements"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full bg-gradient-to-r from-[#C7F380] to-[#A3E635] text-gray-900 font-semibold py-2.5 sm:py-3 px-4 rounded-lg hover:from-[#A3E635] hover:to-[#84CC16] transition-all duration-200 transform hover:scale-105 shadow-lg text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-[#C7F380] ${
                    submitting ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {submitting ? "Submitting..." : "Submit Request"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServiceId1;


