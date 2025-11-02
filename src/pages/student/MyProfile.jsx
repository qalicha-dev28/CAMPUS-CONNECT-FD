// src/pages/student/MyProfile.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { motion } from "framer-motion";

export default function MyProfile() {
  const navigate = useNavigate();
  const { user, setUser, logout } = useAuth();

  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    setUser({
      ...user,
      fullName,
      email,
    });
    alert("✅ Profile updated!");
  };

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
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-8 relative min-h-screen z-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center mb-8"
        >
          <button
            onClick={() => navigate("/student/dashboard")}
            className="text-sm text-gray-300 hover:text-white transition-modern flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back
          </button>

          <button
            onClick={logout}
            className="bg-lime-400 text-black text-sm px-4 py-2 rounded-lg hover:bg-lime-300 transition-modern"
          >
            Logout
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-8 rounded-xl mx-auto w-full max-w-md shadow-strong border border-neutral-800/50"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-20 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg className="w-10 h-10 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-2">My Profile</h2>
            <p className="text-gray-400">
              Manage your account information
            </p>
          </div>

          {/* Full name */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            <label className="text-sm mb-2 block text-gray-300 font-medium">Full Name</label>
            <input
              className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <label className="text-sm mb-2 block text-gray-300 font-medium">Email Address</label>
            <input
              className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <label className="text-sm mb-2 block text-gray-300 font-medium">Role</label>
            <div className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 text-gray-400 flex items-center">
              <svg className="w-4 h-4 mr-2 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {user.role}
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            onClick={handleSave}
            className="w-full bg-lime-400 text-black font-semibold py-3 rounded-lg hover:bg-lime-300 transition-modern shadow-medium hover:shadow-lime-400/25"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Save Changes
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
