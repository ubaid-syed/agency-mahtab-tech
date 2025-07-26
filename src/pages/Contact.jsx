import React, { useState } from "react";
import { motion } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 * i, duration: 0.7, type: "spring" },
  }),
};

const inputVariants = (delay) => ({
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, delay } },
});

const Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setForm({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      alert("Message sent!");
    }, 1200);
  };

  return (
    <div className="w-full min-h-screen bg-gray-300 pt-2 md:pt-6 pb-0">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10 mt-48">
        {/* Left: Info */}
        <div className="flex flex-col justify-start">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-black"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            <span className="inline-block">
              We are always ready
              <br />
              to help you and
              <br />
              answer your
              <br />
              questions
            </span>
          </motion.h1>
          <motion.p
            className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={2}
          >
            Feel free to raise issue, query, pain point or block; product &amp;
            <br />
            non-product customer support (Knowledge &amp; support).
          </motion.p>
          <motion.div
            className="mb-8"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={3}
          >
            <div>
              <div className="text-xs text-gray-400 mb-1">Call Center</div>
              <div className="text-base md:text-lg text-black font-semibold">+020 120 235-234</div>
              <div className="text-base md:text-lg text-black font-semibold">+020 120 235-6178</div>
            </div>
            <div className="mt-6">
              <div className="text-xs text-gray-400 mb-1">Our Location</div>
              <div className="text-base md:text-lg text-black font-semibold">USA, New York - 10510</div>
              <div className="text-base md:text-lg text-black font-semibold">St. First Avenue 5</div>
            </div>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-6"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={4}
          >
            <div>
              <div className="text-xs text-gray-400 mb-1">Email</div>
              <div className="text-base md:text-lg text-black font-semibold">mahtab-tech@gmail.co</div>
            </div>
            <div>
              <div className="text-xs text-gray-400 mb-1">Social network</div>
              <div className="flex gap-4 mt-1">
                <motion.a
                  href="#"
                  className="text-black hover:text-gray-600 text-2xl transition-all"
                  aria-label="Facebook"
                  whileHover={{ scale: 1.2, color: "#1877f2" }}
                >
                  <i className="ri-facebook-fill"></i>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-black hover:text-gray-600 text-2xl transition-all"
                  aria-label="Instagram"
                  whileHover={{ scale: 1.2, color: "#e1306c" }}
                >
                  <i className="ri-instagram-line"></i>
                </motion.a>
                <motion.a
                  href="#"
                  className="text-black hover:text-gray-600 text-2xl transition-all"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.2, color: "#0077b5" }}
                >
                  <i className="ri-linkedin-box-fill"></i>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Right: Form */}
        <motion.div
          className="flex justify-center items-start"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          custom={5}
        >
          <motion.div
            className="w-full max-w-md bg-gray-100 rounded-xl shadow p-10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
          >
            <motion.div
              className="text-2xl font-bold mb-3 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Get in Touch
            </motion.div>
            <motion.div
              className="text-sm text-gray-500 mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Define your goals and identify areas where AI can add value to your business.
            </motion.div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Full Name */}
              <motion.div
                variants={inputVariants(0.6)}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-1"
              >
                <label htmlFor="fullName" className="text-sm font-medium text-gray-700 mb-1">
                  Full name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter Your Name"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#240054] focus:border-transparent text-base bg-white transition-all duration-200 outline-none"
                  autoComplete="name"
                />
              </motion.div>
              {/* Email Address */}
              <motion.div
                variants={inputVariants(0.7)}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-1"
              >
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
                  Email address<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#240054] focus:border-transparent text-base bg-white transition-all duration-200 outline-none"
                  autoComplete="email"
                />
              </motion.div>
              {/* Phone */}
              <motion.div
                variants={inputVariants(0.8)}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-1"
              >
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">
                  Phone<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone*"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#240054] focus:border-transparent text-base bg-white transition-all duration-200 outline-none"
                  autoComplete="tel"
                />
              </motion.div>
              {/* Company */}
              <motion.div
                variants={inputVariants(0.9)}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-1"
              >
                <label htmlFor="company" className="text-sm font-medium text-gray-700 mb-1">
                  Company<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#240054] focus:border-transparent text-base bg-white transition-all duration-200 outline-none"
                  autoComplete="organization"
                />
              </motion.div>
              {/* Message */}
              <motion.div
                variants={inputVariants(1.0)}
                initial="initial"
                animate="animate"
                className="flex flex-col gap-1"
              >
                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#240054] focus:border-transparent text-base bg-white resize-none transition-all duration-200 outline-none"
                />
              </motion.div>
              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submitting}
                className={`w-full bg-black text-white text-lg font-semibold py-3 rounded-lg transition-all duration-200 hover:bg-gray-800 shadow-md ${
                  submitting ? "opacity-60 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: submitting ? 1 : 1.04 }}
                whileTap={{ scale: submitting ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                {submitting ? "Sending..." : "Send a message"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
      {/* Map Section */}
      <motion.div
        className="w-full mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <iframe
          title="Contact Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.370798539343!2d74.34078797469614!3d31.51397434745966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904596d226695%3A0xf5fb6d9420427d18!2sAl%20Hafeez%20Shopping%20Mall!5e0!3m2!1sen!2s!4v1753302535318!5m2!1sen!2s"
          className="w-full h-[700px] grayscale rounded-xl border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
         
        ></iframe>
       
      </motion.div>
    </div>
  );
};

export default Contact;
