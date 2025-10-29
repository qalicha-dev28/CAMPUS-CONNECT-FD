import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoginPage() {
  const navigate = useNavigate();

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
          {/* LEFT SECTION */}
          <div>
            <h1 className="text-[32px] font-bold leading-snug">
              Welcome Back to <br />
              <span className="text-neon">CampusConnect</span>
            </h1>
            <p className="text-gray-400 text-[14px] mt-2 max-w-[440px]">
              Login to access all your campus services and manage your bookings in one convenient place.
            </p>

            {/* Quick Accounts */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#161616] border border-gray-800 rounded-lg px-5 py-4 mt-6 max-w-[380px]"
            >
              <p className="text-[12.5px] text-gray-400 mb-2">Quick login demo accounts:</p>

              <div className="text-[12.5px] space-y-1">
                <p>
                  <span className="text-neon font-medium">Student:</span> student@campus.edu
                </p>
                <p>
                  <span className="text-neon font-medium">Vendor:</span> vendor@campus.edu
                </p>
                <p>
                  <span className="text-neon font-medium">Admin:</span> admin@campus.edu
                </p>
                <p className="text-gray-500 mt-1">Password: any</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:pr-12">
            <h2 className="text-[18px] font-semibold">Login</h2>
            <p className="text-[13px] text-gray-500 mt-1">
              Enter your credentials to continue
            </p>

            <form className="mt-8 space-y-6 max-w-[420px]">
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

              {/* Forgot */}
              <div className="text-right">
                <button className="text-[12px] text-gray-400 hover:text-neon transition-colors">
                  Forgot password?
                </button>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-neon text-black font-semibold rounded-md py-[11px] text-[14px]
                           hover:shadow-[0_14px_40px_-14px_rgba(184,255,35,0.6)]
                           transition-all"
              >
                Login
              </button>
            </form>

            <p className="text-gray-400 text-[13px] mt-5">
              Don’t have an account?
              <Link to="/signup" className="text-neon ml-1 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
