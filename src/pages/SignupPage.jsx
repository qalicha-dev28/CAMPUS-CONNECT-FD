import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiUser, FiUsers } from "react-icons/fi";

export default function SignupPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");

  return (
    <main className="bg-[#0D0D0D] text-white min-h-screen py-12">
      <div className="max-w-[1360px] mx-auto px-10">

        {/* Top Back Link */}
        <div className="flex justify-end mb-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-400 hover:text-neon text-[13px] transition-colors"
          >
            ← Back
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT FORM SIDE */}
          <div>
            <h1 className="text-[30px] font-bold">Create Account</h1>
            <p className="text-gray-400 text-[14px] mt-1">
              Join thousands of students and vendors on campus
            </p>

            <form className="mt-8 space-y-6 max-w-[480px]">
              {/* Full Name */}
              <div>
                <label className="block text-[13px] text-gray-300 mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-[10px] text-[14px]
                             focus:outline-none focus:border-neon transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[13px] text-gray-300 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="student@campus.edu"
                  className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-[10px] text-[14px]
                             focus:outline-none focus:border-neon transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-[13px] text-gray-300 mb-1">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-[10px] text-[14px]
                             focus:outline-none focus:border-neon transition-colors"
                />
              </div>

              {/* Role Dropdown */}
              <div>
                <label className="block text-[13px] text-gray-300 mb-1">I am a...</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-transparent border border-gray-700 rounded-md px-3 py-[10px] text-[14px]
                             focus:outline-none focus:border-neon transition-colors"
                >
                  <option value="student" className="text-black">
                    Student
                  </option>
                  <option value="vendor" className="text-black">
                    Vendor
                  </option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-neon text-black font-semibold rounded-md py-[11px] text-[14px]
                           hover:shadow-[0_14px_40px_-14px_rgba(184,255,35,0.6)]
                           transition-all"
              >
                Create Account
              </button>
            </form>

            <p className="text-gray-400 text-[13px] mt-5">
              Already have an account?
              <Link to="/login" className="text-neon ml-1 hover:underline">
                Login
              </Link>
            </p>
          </div>

          {/* RIGHT ROLE SELECTOR */}
          <div className="lg:pl-12">
            <h2 className="text-[18px] font-semibold text-center">Get Started Today</h2>
            <p className="text-[13px] text-gray-500 text-center mt-1">
              Choose your account type:
            </p>

            <div className="mt-8 space-y-4 max-w-[360px] mx-auto">
              {/* Student */}
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                className={`rounded-lg px-5 py-4 border cursor-pointer
                  transition-all duration-300
                  ${
                    role === "student"
                      ? "border-neon bg-[#1b1b1b]"
                      : "border-gray-800 bg-[#161616]"
                  }`}
                onClick={() => setRole("student")}
              >
                <div className="flex items-start gap-3">
                  <FiUser className="text-neon mt-[2px]" size={16} />
                  <div>
                    <h3 className="text-[14px] font-medium">Student Account</h3>
                    <p className="text-[12px] text-gray-500 mt-1">
                      Browse services, make bookings, and leave reviews
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Vendor */}
              <motion.div
                whileHover={{ scale: 1.02, y: -3 }}
                className={`rounded-lg px-5 py-4 border cursor-pointer
                  transition-all duration-300
                  ${
                    role === "vendor"
                      ? "border-neon bg-[#1b1b1b]"
                      : "border-gray-800 bg-[#161616]"
                  }`}
                onClick={() => setRole("vendor")}
              >
                <div className="flex items-start gap-3">
                  <FiUsers className="text-neon mt-[2px]" size={16} />
                  <div>
                    <h3 className="text-[14px] font-medium">Vendor Account</h3>
                    <p className="text-[12px] text-gray-500 mt-1">
                      List your services and manage bookings
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
