import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="bg-[#0e0e0e] min-h-screen w-full flex justify-center">
      {/* FIXED Figma frame */}
      <div className="w-[1536px] h-[1235px] px-8 pt-8 relative">

        {/* Navbar */}
        <div className="flex justify-between items-center text-white text-sm">
          <span className="font-medium">CampusConnect</span>

          <div className="space-x-4">
            <Link to="/login" className="hover:opacity-80">
              Login
            </Link>
            <Link
              to="/signup"
              className="px-3 py-1 rounded-md bg-lime-400 text-black hover:shadow-[0_0_10px_#b3ff3a] transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="flex justify-between items-center mt-28 px-10">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white w-[500px]"
          >
            <h1
              className="text-[42px] font-semibold leading-tight"
            >
              Your Campus Services,<br />Just a Click Away
            </h1>

            <p className="text-[16px] text-gray-300 mt-4 leading-relaxed">
              Connect with essential campus services instantly. From laundry to
              tutoring, everything you need in one convenient platform.
            </p>

            <div className="flex items-center mt-6 space-x-6">
              <Link
                to="/signup"
                className="bg-lime-400 text-black px-4 py-2 rounded-md hover:shadow-[0_0_12px_#b3ff3a] transition-all"
              >
                Get Started
              </Link>

              <Link to="/services" className="text-gray-300 hover:text-white">
                Browse Services →
              </Link>
            </div>
          </motion.div>

          {/* Hero Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-[#121212] h-[300px] w-[480px] rounded-md flex items-center justify-center shadow-inner"
          >
            {/* Simple Figma people icon */}
            <div className="flex items-center space-x-6">
              <div className="h-20 w-6 bg-lime-400 rounded" />
              <div className="h-3 w-12 bg-lime-400 rounded" />
              <div className="h-20 w-6 bg-gray-400 rounded" />
            </div>
          </motion.div>
        </div>

        {/* Popular Services */}
        <div className="mt-36 text-center text-white">
          <h2 className="text-lg font-semibold">Popular Services</h2>
          <p className="text-gray-400 text-sm">
            Everything you need for campus life
          </p>

          <div className="flex justify-center space-x-8 mt-10">
            {/* CARD */}
            {[
              { title: "Laundry", desc: "Professional wash & fold service" },
              { title: "Printing", desc: "24/7 print and copy services" },
              { title: "Tutoring", desc: "Expert academic support" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-[#1a1a1a] w-[240px] h-[110px] rounded-md shadow-md cursor-pointer"
              >
                <div className="text-left px-4 py-3">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-10 w-full text-gray-500 text-xs flex justify-between px-12">
          <span>© 2025 CampusConnect. All rights reserved.</span>

          <div className="flex space-x-8">
            <Link className="hover:text-white">About</Link>
            <Link className="hover:text-white">Services</Link>
            <Link className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
