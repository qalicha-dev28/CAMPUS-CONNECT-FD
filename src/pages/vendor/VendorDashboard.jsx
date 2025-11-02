// src/pages/vendor/VendorDashboard.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchServices, fetchMockBookings } from "../../services/serviceApi";
import { motion } from "framer-motion";

export default function VendorDashboard() {
  const [services, setServices] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function load() {
      const s = await fetchServices();
      const b = await fetchMockBookings();
      // Filter services and bookings for this vendor (assuming vendor name from auth)
      // For demo, we'll use all, but in real app filter by vendor
      setServices(s);
      setBookings(b);
    }
    load();
  }, []);

  // Calculate vendor-specific stats
  const myServices = services.length; // In real app, filter by vendor
  const totalBookings = bookings.length;
  const activeBookings = bookings.filter((b) => b.status === "pending" || b.status === "confirmed").length;
  const revenue = bookings.filter((b) => b.status === "completed").length * 25; // Mock revenue calculation

  const stats = [
    {
      title: "My Services",
      value: myServices,
      icon: (
        <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Total Bookings",
      value: totalBookings,
      icon: (
        <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Active Bookings",
      value: activeBookings,
      icon: (
        <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Revenue",
      value: `$${revenue}`,
      icon: (
        <svg className="w-6 h-6 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      )
    }
  ];

  const quickActions = [
    {
      title: "Add Service",
      to: "/vendor/add-service",
      icon: (
        <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Manage Services",
      to: "/vendor/services",
      icon: (
        <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "View Bookings",
      to: "/vendor/bookings",
      icon: (
        <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Revenue Report",
      to: "/vendor/revenue",
      icon: (
        <svg className="w-8 h-8 text-lime-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] min-h-screen w-full flex justify-center relative overflow-hidden">
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-lime-400/15 to-lime-300/10 rounded-full blur-xl shadow-lg shadow-lime-400/20"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-lime-400/8 to-lime-500/5 rounded-full blur-2xl shadow-xl shadow-lime-400/10"
        />

        {/* Rotating geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-lime-400/30 rounded-full shadow-inner shadow-lime-400/20"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/3 w-16 h-16 border border-lime-400/25 rounded-lg rotate-45 shadow-lg shadow-lime-400/15"
        />

        {/* Additional floating particles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 right-16 w-6 h-6 bg-lime-400/40 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-16 w-8 h-8 bg-lime-400/30 rounded-full blur-sm"
        />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(184,255,35,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Responsive container */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-8 relative min-h-screen z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-300 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-lime-400/30">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
            Vendor Dashboard
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Manage your services, track bookings, and monitor your business performance.
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-xl border border-neutral-800/50 shadow-medium hover:shadow-strong transition-modern group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 bg-lime-400/10 rounded-lg group-hover:bg-lime-400/20 transition-colors">
                  {stat.icon}
                </div>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-1">{stat.title}</p>
              <h2 className="text-2xl font-bold text-white">{stat.value}</h2>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          <h2 className="text-xl font-semibold text-white">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to={action.to}
                  className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] hover:from-[#252525] hover:to-[#2a2a2a] transition-modern border border-neutral-800/50 p-6 rounded-xl text-center block group hover:shadow-medium hover:shadow-lime-400/10"
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className="p-3 bg-lime-400/10 rounded-xl group-hover:bg-lime-400/20 transition-colors">
                      {action.icon}
                    </div>
                    <span className="font-semibold text-white group-hover:text-lime-400 transition-colors">
                      {action.title}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}