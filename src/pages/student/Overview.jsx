// src/pages/student/Overview.jsx
import BackButton from "../../components/BackButton";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchServices, fetchMockBookings } from "../../services/serviceApi";
import { motion } from "framer-motion";

export default function Overview() {
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function load() {
      const s = await fetchServices();
      const b = await fetchMockBookings();
      setServices(s);
      setBookings(b);
    }
    load();
  }, []);

  const completed = bookings.filter((b) => b.status === "completed").length;
  const pending = bookings.filter((b) => b.status === "pending").length;

  const stats = [
    {
      title: "Available Services",
      value: services.length,
      icon: (
        <svg className="w-6 h-6 text-lime-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Active Bookings",
      value: pending,
      icon: (
        <svg className="w-6 h-6 text-lime-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Completed",
      value: completed,
      icon: (
        <svg className="w-6 h-6 text-lime-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Pending Reviews",
      value: Math.max(0, completed - pending),
      icon: (
        <svg className="w-6 h-6 text-lime-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    }
  ];

  const quickActions = [
    {
      title: "Browse Services",
      to: "/student/services",
      icon: (
        <svg className="w-8 h-8 text-lime-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "View My Bookings",
      to: "/student/bookings",
      icon: (
        <svg className="w-8 h-8 text-lime-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "My Profile",
      to: "/student/profile",
      icon: (
        <svg className="w-8 h-8 text-lime-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <div className="text-white p-6 space-y-8 overflow-y-auto">
      <BackButton className="mb-4" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-2">Welcome back 👋</h1>
        <p className="text-gray-400">Here's what's happening with your account today.</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6" overflow-y-auto
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.title}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-xl border border-neutral-800/50 shadow-medium hover:shadow-strong transition-modern group" overflow-y-auto
          >
            <div className="flex items-center justify-between mb-3" overflow-y-auto>
              <div className="p-2 bg-lime-400/10 rounded-lg group-hover:bg-lime-400/20 transition-colors" overflow-y-auto>
                {stat.icon}
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium mb-1" overflow-y-auto>{stat.title}</p>
            <h2 className="text-2xl font-bold text-white" overflow-y-auto>{stat.value}</h2>
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Shortcuts */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4" overflow-y-auto
      >
        <h2 className="text-xl font-semibold" overflow-y-auto>Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" overflow-y-auto>
          {quickActions.map((action) => (
            <motion.div
              key={action.title}
              whileHover={{ scale: 1.02, y: -8 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                to={action.to}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] hover:from-[#252525] hover:to-[#2a2a2a] transition-modern border border-neutral-800/50 p-6 rounded-xl text-center block group hover:shadow-medium hover:shadow-lime-400/10" overflow-y-auto
              >
                <div className="flex flex-col items-center space-y-3" overflow-y-auto>
                  <div className="p-3 bg-lime-400/10 rounded-xl group-hover:bg-lime-400/20 transition-colors" overflow-y-auto>
                    {action.icon}
                  </div>
                  <span className="font-semibold text-white group-hover:text-lime-400 transition-colors" overflow-y-auto>
                    {action.title}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
