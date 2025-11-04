// src/pages/vendor/VendorDashboard.jsx
import BackButton from "../../components/BackButton";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchServices, fetchMockBookings, createService, updateService, deleteService } from "../../services/serviceApi";
import { logoutUser } from "../../services/fakeAuth";
import ServiceModal from "../../components/modals/ServiceModal";
import { motion } from "framer-motion";

export default function VendorDashboard() {
    const navigate = useNavigate();
    const [services, setServices] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingService, setEditingService] = useState(null);

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

   const handleAddService = () => {
     setEditingService(null);
     setIsModalOpen(true);
   };

   const handleEditService = (service) => {
     setEditingService(service);
     setIsModalOpen(true);
   };

   const handleDeleteService = async (serviceId) => {
     if (window.confirm("Are you sure you want to delete this service?")) {
       try {
         await deleteService(serviceId);
         const updatedServices = await fetchServices();
         setServices(updatedServices);
       } catch {
         alert("Failed to delete service");
       }
     }
   };

   const handleSaveService = async (serviceData) => {
     try {
       if (editingService) {
         await updateService(editingService.id, serviceData);
       } else {
         await createService(serviceData);
       }
       const updatedServices = await fetchServices();
       setServices(updatedServices);
       setIsModalOpen(false); // Close modal after success
     } catch {
       alert("Failed to save service");
     }
   };

   const handleLogout = () => {
     logoutUser();
     navigate("/login");
   };

  const stats = [
    {
      title: "My Services",
      value: myServices,
      icon: (
        <svg className="w-6 h-6 text-lime-400"  fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Total Bookings",
      value: totalBookings,
      icon: (
        <svg className="w-6 h-6 text-lime-400"  fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Active Bookings",
      value: activeBookings,
      icon: (
        <svg className="w-6 h-6 text-lime-400"  fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Revenue",
      value: `KSh ${revenue.toLocaleString()}`,
      icon: (
        <svg className="w-6 h-6 text-lime-400"  fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      )
    }
  ];

  const quickActions = [
    {
      title: "View Bookings",
      to: "/vendor/bookings",
      icon: (
        <svg className="w-8 h-8 text-lime-400"  fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Revenue Report",
      to: "/vendor/revenue",
      icon: (
        <svg className="w-8 h-8 text-lime-400"  fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: "Logout",
      onClick: handleLogout,
      icon: (
        <svg className="w-8 h-8 text-lime-400"  fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <>
      <BackButton className="mb-4" />

      <div className="bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] min-h-screen w-full flex justify-center relative overflow-hidden" >
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden" >
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
        <div className="absolute inset-0 opacity-[0.02]" >
          <div className="absolute inset-0"  style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(184,255,35,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Responsive container */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-8 relative min-h-screen z-10" >
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
            <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-300 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-lime-400/30" >
              <svg className="w-8 h-8 text-black"  fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight" >
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
              <div className="flex items-center justify-between mb-3" >
                <div className="p-2 bg-lime-400/10 rounded-lg group-hover:bg-lime-400/20 transition-colors" >
                  {stat.icon}
                </div>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-1" >{stat.title}</p>
              <h2 className="text-2xl font-bold text-white" >{stat.value}</h2>
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
          <h2 className="text-xl font-semibold text-white" >Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6" >
            {quickActions.map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                {action.to ? (
                  <Link
                    to={action.to}
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] hover:from-[#252525] hover:to-[#2a2a2a] transition-modern border border-neutral-800/50 p-6 rounded-xl text-center block group hover:shadow-medium hover:shadow-lime-400/10" 
                  >
                    <div className="flex flex-col items-center space-y-3" >
                      <div className="p-3 bg-lime-400/10 rounded-xl group-hover:bg-lime-400/20 transition-colors" >
                        {action.icon}
                      </div>
                      <span className="font-semibold text-white group-hover:text-lime-400 transition-colors" >
                        {action.title}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <button
                    onClick={action.onClick}
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] hover:from-[#252525] hover:to-[#2a2a2a] transition-modern border border-neutral-800/50 p-6 rounded-xl text-center block group hover:shadow-medium hover:shadow-lime-400/10 w-full" 
                  >
                    <div className="flex flex-col items-center space-y-3" >
                      <div className="p-3 bg-lime-400/10 rounded-xl group-hover:bg-lime-400/20 transition-colors" >
                        {action.icon}
                      </div>
                      <span className="font-semibold text-white group-hover:text-lime-400 transition-colors" >
                        {action.title}
                      </span>
                    </div>
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* My Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16" 
        >
          <div className="flex justify-between items-center mb-8" >
            <h2 className="text-2xl font-semibold text-white" >My Services</h2>
            <motion.button
              onClick={handleAddService}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-lime-400 text-black font-semibold py-3 px-6 rounded-xl hover:bg-lime-300 transition-modern shadow-medium hover:shadow-lime-400/25 flex items-center gap-2" 
            >
              <svg className="w-5 h-5"  fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add Service
            </motion.button>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" 
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  rotateY: 2,
                  transition: { duration: 0.3 }
                }}
                className="group transition-modern" 
              >
                <div className="relative" >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-lime-400/20 to-lime-300/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" ></div>
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl p-6 shadow-medium hover:shadow-strong transition-modern" >
                    <div className="flex justify-between items-start mb-4" >
                      <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center" >
                        <svg className="w-6 h-6 text-lime-400"  fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="px-2 py-1 bg-lime-400/10 text-lime-400 text-xs font-medium rounded-full" >
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-white font-semibold text-lg mb-2" >{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2" >{service.description}</p>

                    <div className="flex items-center justify-between text-sm text-gray-300 mb-4" >
                      <span>By {service.vendorName}</span>
                      <span className="font-semibold text-lime-400" >${service.price}</span>
                    </div>

                    <div className="flex gap-2" >
                      <motion.button
                        onClick={() => handleEditService(service)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-modern" 
                      >
                        Edit
                      </motion.button>
                      <motion.button
                        onClick={() => handleDeleteService(service.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-modern" 
                      >
                        Delete
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {services.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              className="col-span-full text-center py-16" 
            >
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl" 
              >
                <svg className="w-10 h-10 text-gray-400"  fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <h3 className="text-gray-300 text-xl font-semibold mb-2" >No services found</h3>
              <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed" >
                Start by adding your first service to the platform.
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Recent Bookings Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16" 
        >
          <div className="flex justify-between items-center mb-8" >
            <h2 className="text-2xl font-semibold text-white" >Recent Bookings</h2>
            <Link
              to="/vendor/bookings"
              className="text-lime-400 hover:text-lime-300 transition-colors font-medium" 
            >
              View All →
            </Link>
          </div>

          <motion.div
            className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl overflow-hidden shadow-strong" 
          >
            <div className="p-6 border-b border-neutral-800/50" >
              <h3 className="text-lg font-semibold text-white" >Latest Bookings</h3>
            </div>

            <div className="overflow-x-auto" >
              <table className="w-full" >
                <thead className="bg-neutral-900/50" >
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" >Service</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" >Customer</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" >Date</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" >Status</th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" >Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-800/50" >
                  {bookings.slice(0, 5).map((booking, index) => (
                    <motion.tr
                      key={booking.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                      className="hover:bg-neutral-900/30 transition-colors" 
                    >
                      <td className="px-6 py-4 whitespace-nowrap" >
                        <div className="text-sm font-medium text-white" >{booking.serviceName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap" >
                        <div className="text-sm text-gray-400" >{booking.customerName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400" >
                        {booking.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap" >
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          booking.status === 'completed' ? 'bg-green-400/10 text-green-400' :
                          booking.status === 'confirmed' ? 'bg-blue-400/10 text-blue-400' :
                          booking.status === 'pending' ? 'bg-yellow-400/10 text-yellow-400' :
                          'bg-red-400/10 text-red-400'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-lime-400" >
                        KSh {Number(booking.amount).toLocaleString()}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {bookings.length === 0 && (
              <div className="text-center py-16" >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl" 
                >
                  <svg className="w-10 h-10 text-gray-400"  fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </motion.div>
                <h3 className="text-gray-300 text-xl font-semibold mb-2" >No bookings yet</h3>
                <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed" >
                  Your recent bookings will appear here once customers start booking your services.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* Service Modal */}
        <ServiceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={editingService}
          onSave={handleSaveService}
        />
      </div>
    </div>
    </>
  );
}