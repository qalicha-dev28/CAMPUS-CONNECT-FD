import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] min-h-screen w-full flex justify-center relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-lime-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-40 right-20 w-40 h-40 bg-lime-400/5 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/4 w-20 h-20 border border-lime-400/20 rounded-full"
        />
      </div>

      {/* Responsive container */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-8 relative min-h-screen z-10">

        {/* Navbar */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center text-white text-sm shadow-subtle bg-dark/80 backdrop-blur-sm border-b border-neutral-800/50 px-8 lg:px-12 py-6 rounded-b-lg"
        >
          <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
            CampusConnect
          </span>

          <div className="flex space-x-6">
            <Link
              to="/login"
              className="hover:text-white transition-modern font-medium relative group"
            >
              Login
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-lime-400 text-black hover:bg-lime-300 hover:shadow-medium transition-modern font-medium shadow-subtle hover:shadow-lime-400/25"
            >
              Sign Up
            </Link>
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-16 lg:mt-28 px-4 lg:px-10">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white w-full lg:w-[500px] text-center lg:text-left"
          >
            <h1 className="text-3xl lg:text-[42px] font-semibold leading-tight">
              Your Campus Services,<br />
              <span className="bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
                Just a Click Away
              </span>
            </h1>

            <p className="text-base lg:text-[16px] text-gray-300 mt-4 leading-relaxed">
              Connect with essential campus services instantly. From laundry to
              tutoring, everything you need in one convenient platform.
            </p>

            <div className="flex flex-col sm:flex-row items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/signup"
                  className="bg-lime-400 text-black px-8 py-3 rounded-lg hover:bg-lime-300 hover:shadow-medium transition-modern font-medium shadow-subtle hover:shadow-lime-400/25 inline-block"
                >
                  Get Started
                </Link>
              </motion.div>

              <Link
                to="/login"
                className="text-gray-300 hover:text-white transition-modern font-medium flex items-center gap-2 group"
              >
                Browse Services
                <motion.span
                  className="text-lime-400"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-gradient-to-br from-[#121212] to-[#1e1e1e] h-[250px] lg:h-[300px] w-full lg:w-[480px] rounded-xl flex items-center justify-center shadow-strong mt-8 lg:mt-0 border border-neutral-800/50 relative overflow-hidden"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-16 h-16 border border-lime-400 rounded-lg rotate-45"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border border-lime-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-lime-400 rounded-lg"></div>
            </div>

            {/* Modern illustration with icons */}
            <div className="flex items-center space-x-8 relative z-10">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Laundry</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Print</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-lime-400 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Tutor</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Popular Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-36 text-center text-white px-4"
        >
          <h2 className="text-xl lg:text-2xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Popular Services
          </h2>
          <p className="text-gray-400 text-sm lg:text-base mt-2">
            Everything you need for campus life
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 lg:space-x-8 mt-12">
            {/* CARD */}
            {[
              {
                title: "Laundry",
                desc: "Professional wash & fold service",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2L3 7v11a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V7l-7-5z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Printing",
                desc: "24/7 print and copy services",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
                  </svg>
                )
              },
              {
                title: "Tutoring",
                desc: "Expert academic support",
                icon: (
                  <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  y: -12,
                  boxShadow: "0 20px 40px rgba(184, 255, 35, 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] w-full sm:w-[280px] h-[140px] rounded-xl shadow-medium hover:shadow-strong cursor-pointer transition-modern border border-neutral-800/30 p-6 relative overflow-hidden group"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center mb-3">
                    {item.icon}
                    <p className="font-semibold text-white text-lg ml-3">{item.title}</p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-xl border border-lime-400/0 group-hover:border-lime-400/50 transition-colors duration-300"
                  initial={false}
                  animate={{ borderColor: "rgba(184, 255, 35, 0)" }}
                  whileHover={{ borderColor: "rgba(184, 255, 35, 0.5)" }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 lg:mt-40 pb-12 w-full text-gray-500 text-sm flex flex-col sm:flex-row justify-between items-center px-8 lg:px-12 space-y-6 sm:space-y-0 border-t border-neutral-800/30 pt-8"
        >
          <span className="font-medium">© 2025 CampusConnect. All rights reserved.</span>

          <div className="flex space-x-8">
            <Link
              to="/about"
              className="hover:text-white transition-modern font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/services"
              className="hover:text-white transition-modern font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contact"
              className="hover:text-white transition-modern font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
