import { useState } from "react";
import BackButton from "../components/BackButton";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";

export default function SignupPage() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setForm({ ...form, role });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log('SignupPage: Attempting registration with:', form);

    try {
      const user = await register(form);
      console.log('SignupPage: Registration successful:', user);

      // Navigate based on role
      if (user.role === "student") {
        navigate("/student/dashboard");
      } else if (user.role === "vendor") {
        navigate("/vendor/dashboard");
      } else if (user.role === "admin") {
        navigate("/admin/dashboard");
      }
    } catch (err) {
      console.error('SignupPage: Registration failed:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] text-white px-8 lg:px-14 py-12 flex flex-col relative overflow-hidden" overflow-y-auto>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden" overflow-y-auto>
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-36 h-36 bg-lime-400/8 rounded-full blur-2xl" overflow-y-auto
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -70, 0],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-32 left-16 w-28 h-28 bg-lime-400/6 rounded-full blur-xl" overflow-y-auto
        />
        <motion.div
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/3 w-20 h-20 border border-lime-400/25 rounded-full" overflow-y-auto
        />
      </div>

      <div className="relative z-10" overflow-y-auto>
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <BackButton to="/" />
          </div>
        </motion.div>

        {/* Top Label */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl font-semibold mb-12 bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent tracking-tight" overflow-y-auto
        >
          CampusConnect
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20" overflow-y-auto>
          {/* LEFT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1" overflow-y-auto
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight" overflow-y-auto>Create Account</h2>
            <p className="text-gray-400 text-base lg:text-lg mb-8 leading-relaxed" overflow-y-auto>
              Join thousands of students and vendors on campus
            </p>

            <form onSubmit={handleSignup} className="space-y-6 w-full lg:w-[520px]" overflow-y-auto>
              <div>
                <label className="text-sm text-gray-300 font-medium block mb-2" overflow-y-auto>Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 rounded-xl px-4 py-3 outline-none border border-neutral-700 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-modern placeholder-gray-500 text-base hover:bg-neutral-700/50" overflow-y-auto
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 font-medium block mb-2" overflow-y-auto>Email Address</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 rounded-xl px-4 py-3 outline-none border border-neutral-700 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-modern placeholder-gray-500 text-base hover:bg-neutral-700/50" overflow-y-auto
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 font-medium block mb-2" overflow-y-auto>Password</label>
                <input
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 rounded-xl px-4 py-3 outline-none border border-neutral-700 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-modern placeholder-gray-500 text-base hover:bg-neutral-700/50" overflow-y-auto
                  placeholder="Create a password"
                />
              </div>

              <div>
                <label className="text-sm text-gray-300 font-medium block mb-2" overflow-y-auto>I am a...</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="w-full bg-neutral-800 rounded-xl px-4 py-3 outline-none border border-neutral-700 focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20 transition-modern text-base hover:bg-neutral-700/50" overflow-y-auto
                >
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="vendor">Vendor</option>
                </select>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full bg-lime-400 py-4 rounded-xl text-black font-semibold hover:bg-lime-300 hover:shadow-medium transition-modern shadow-subtle text-base hover:shadow-lime-400/25 disabled:opacity-50 disabled:cursor-not-allowed" overflow-y-auto
              >
                {loading ? "Creating Account..." : "Create Account"}
              </motion.button>

              {error && (
                <div className="text-red-400 text-sm text-center mt-4" overflow-y-auto>
                  {error}
                </div>
              )}
            </form>

            <p className="text-sm text-gray-300 mt-6" overflow-y-auto>
              Already have an account?{" "}
              <Link to="/login" className="text-lime-400 hover:text-lime-300 transition-modern font-medium relative group" overflow-y-auto>
                Login
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full" overflow-y-auto></span>
              </Link>
            </p>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:mt-0 mt-12" overflow-y-auto
          >
            <h3 className="font-semibold text-2xl mb-2" overflow-y-auto>Get Started Today</h3>
            <p className="text-gray-400 text-base mb-6" overflow-y-auto>Choose your account type:</p>

            {/* Student Box */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleRoleSelect("student")}
              className={`cursor-pointer border-2 rounded-xl w-full lg:w-[320px] p-6 mb-6 transition-modern hover:shadow-medium ${
                form.role === "student"
                  ? "border-lime-400 bg-lime-400/10 shadow-lime-400/20"
                  : "border-neutral-700 bg-neutral-900/60 hover:border-neutral-600"
              }`}
            >
              <div className="flex items-center mb-3" overflow-y-auto>
                <div className={`w-3 h-3 rounded-full mr-3 ${form.role === "student" ? "bg-lime-400" : "bg-gray-500"}`}></div>
                <p className="text-lime-400 font-semibold text-lg" overflow-y-auto>Student Account</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed" overflow-y-auto>
                Browse services, make bookings, and leave reviews
              </p>
            </motion.div>

            {/* Vendor Box */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleRoleSelect("vendor")}
              className={`cursor-pointer border-2 rounded-xl w-full lg:w-[320px] p-6 transition-modern hover:shadow-medium ${
                form.role === "vendor"
                  ? "border-lime-400 bg-lime-400/10 shadow-lime-400/20"
                  : "border-neutral-700 bg-neutral-900/60 hover:border-neutral-600"
              }`}
            >
              <div className="flex items-center mb-3" overflow-y-auto>
                <div className={`w-3 h-3 rounded-full mr-3 ${form.role === "vendor" ? "bg-lime-400" : "bg-gray-500"}`}></div>
                <p className="text-lime-400 font-semibold text-lg" overflow-y-auto>Vendor Account</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed" overflow-y-auto>
                List your services and manage bookings
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
