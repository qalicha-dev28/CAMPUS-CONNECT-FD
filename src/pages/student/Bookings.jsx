// src/pages/student/Bookings.jsx
import { useEffect, useState } from "react";
import { fetchMockBookings } from "../../services/serviceApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { motion } from "framer-motion";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const { user, logout } = useAuth?.() || { user: null, logout: () => {} };

  useEffect(() => {
    async function load() {
      const data = await fetchMockBookings();
      setBookings(data);
    }
    load();
  }, []);

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between mb-6"
        >
          <div className="text-sm text-gray-400">CampusConnect</div>

          <div className="flex items-center gap-4 text-sm">
            <span className="text-gray-300">
              {user?.email || "student@campus.edu"}
            </span>
            <button
              onClick={() => navigate("/student/profile")}
              className="text-gray-300 hover:text-white transition-modern"
            >
              Profile
            </button>
            <button
              onClick={logout}
              className="px-3 py-1 rounded bg-lime-400 text-black font-semibold text-xs hover:bg-lime-300 transition-modern"
            >
              Logout
            </button>
          </div>
        </motion.div>

        {/* Tabs row like Figma */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-3 mb-6"
        >
          <button
            onClick={() => navigate("/student/services")}
            className="px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-sm transition-modern"
          >
            Browse Services
          </button>

          <button className="px-4 py-2 rounded-lg bg-lime-400 text-black font-semibold text-sm">
            My Bookings
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">My Bookings</h2>
          <p className="text-gray-400 text-lg">View and manage your bookings</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 w-full max-w-4xl"
        >
          {bookings.map((b, index) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl p-6 flex justify-between shadow-medium hover:shadow-strong transition-modern group"
            >
              {/* Left details (service name, date, vendor) */}
              <div className="flex-1">
                <p className="font-semibold text-white text-lg mb-2">{b.service}</p>
                <div className="space-y-1">
                  <p className="text-sm text-gray-300 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    {b.date}
                  </p>
                  <p className="text-sm text-gray-300 flex items-center">
                    <svg className="w-4 h-4 mr-2 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                    {b.vendor || "N/A"}
                  </p>
                </div>
              </div>

              {/* Right side: status chip + optional Leave Review */}
              <div className="flex flex-col items-end justify-between ml-6">
                <motion.span
                  className={`px-3 py-1 text-sm font-medium rounded-full ${
                    b.status === "confirmed"
                      ? "bg-lime-500 text-black"
                      : b.status === "pending"
                      ? "bg-orange-500 text-black"
                      : "bg-green-600 text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {b.status}
                </motion.span>

                {b.status === "completed" && (
                  <motion.button
                    onClick={() =>
                      navigate(
                        `/student/review/${encodeURIComponent(b.service)}`
                      )
                    }
                    className="text-sm bg-gray-800 px-3 py-2 rounded-lg hover:bg-gray-700 mt-4 transition-modern flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Leave a Review
                  </motion.button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
