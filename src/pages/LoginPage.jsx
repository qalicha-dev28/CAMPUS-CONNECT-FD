import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const role = form.email === "admin@campus.edu" ? "admin" : "student";
    setUser({ ...form, role });
    navigate(role === "admin" ? "/admin/dashboard" : "/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] text-white px-8 lg:px-14 py-12 flex items-center justify-center relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 150, 0],
            y: [0, -80, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 left-20 w-40 h-40 bg-lime-400/8 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-lime-400/6 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 border border-lime-400/30 rounded-full"
        />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="text-gray-400 hover:text-white text-sm transition-modern font-medium flex items-center gap-2 mb-8 group"
          >
            <motion.span
              className="text-lime-400"
              animate={{ x: [-5, 0, -5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ←
            </motion.span>
            Back
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl font-semibold mb-16 bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent tracking-tight"
        >
          CampusConnect
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">
          {/* LEFT Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Welcome Back to</h2>
            <h2 className="text-4xl lg:text-5xl bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent font-bold mb-8 leading-tight">
              CampusConnect
            </h2>
            <p className="text-gray-400 text-base lg:text-lg w-full lg:w-[420px] leading-relaxed">
              Login to access all your campus services and manage your bookings in
              one convenient place.
            </p>

            {/* Demo Accounts */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-neutral-900/80 backdrop-blur-sm mt-10 p-8 rounded-xl text-sm w-full lg:w-[380px] border border-neutral-800/50 shadow-medium hover:shadow-strong transition-modern"
            >
              <p className="text-gray-300 mb-4 font-medium text-base">Quick login demo accounts:</p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                  <span className="text-lime-400 font-semibold">Student:</span> student@campus.edu
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                  <span className="text-lime-400 font-semibold">Vendor:</span> vendor@campus.edu
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-400 rounded-full"></span>
                  <span className="text-lime-400 font-semibold">Admin:</span> admin@campus.edu
                </p>
              </div>
              <p className="text-gray-400 mt-3 font-medium">Password: any</p>
            </motion.div>
          </motion.div>

          {/* RIGHT Side */}
          <motion.form
            onSubmit={handleLogin}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 w-full lg:w-[480px] bg-neutral-900/60 backdrop-blur-sm p-10 rounded-2xl border border-neutral-800/50 shadow-strong hover:shadow-glow transition-modern"
          >
            <div>
              <h3 className="text-3xl font-bold mb-3">Login</h3>
              <p className="text-gray-400 text-base">Enter your credentials to continue</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300 font-medium block">Email Address</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-neutral-800 rounded-xl px-5 py-4 outline-none border border-neutral-700 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-modern placeholder-gray-500 text-base hover:bg-neutral-700/50"
                placeholder="Enter your email"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm text-gray-300 font-medium block">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                className="w-full bg-neutral-800 rounded-xl px-5 py-4 outline-none border border-neutral-700 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-modern placeholder-gray-500 text-base hover:bg-neutral-700/50"
                placeholder="Enter your password"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-lime-400 py-4 rounded-xl text-black font-semibold hover:bg-lime-300 hover:shadow-medium transition-modern shadow-subtle text-base hover:shadow-lime-400/25"
            >
              Login
            </motion.button>

            <p className="text-sm text-gray-300 text-center pt-2">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-lime-400 hover:text-lime-300 transition-modern font-medium relative group"
              >
                Sign up
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </p>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
