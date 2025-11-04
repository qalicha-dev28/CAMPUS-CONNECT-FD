// src/pages/admin/ViewReports.jsx
import BackButton from "../../components/BackButton";
import { useState, useEffect } from "react";
import { fetchServices, fetchMockBookings } from "../../services/serviceApi";
import { motion } from "framer-motion";

export default function ViewReports() {
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

  const totalRevenue = bookings
    .filter(b => b.status === 'completed')
    .reduce((sum, booking) => {
      const service = services.find(s => s.name === booking.service);
      return sum + (service ? service.price : 0);
    }, 0);

  const popularServices = services.map(service => ({
    ...service,
    bookings: bookings.filter(b => b.service === service.name && b.status === 'completed').length
  })).sort((a, b) => b.bookings - a.bookings);

  const monthlyData = [
    { month: 'Jan', bookings: 12, revenue: 240 },
    { month: 'Feb', bookings: 19, revenue: 380 },
    { month: 'Mar', bookings: 15, revenue: 300 },
    { month: 'Apr', bookings: 25, revenue: 500 },
    { month: 'May', bookings: 22, revenue: 440 },
    { month: 'Jun', bookings: 18, revenue: 360 },
  ];

  return (
    <>
      <BackButton className="mb-4" />

      <div className="bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] min-h-screen w-full flex justify-center relative overflow-hidden" >
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden" >
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
                <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight" >
            Reports & Analytics
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed" 
          >
            Comprehensive insights into platform performance and user activity.
          </motion.p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12" 
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-xl border border-neutral-800/50 shadow-medium" >
            <div className="flex items-center justify-between mb-3" >
              <div className="p-2 bg-green-400/10 rounded-lg" >
                <svg className="w-6 h-6 text-green-400"  fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium mb-1" >Total Revenue</p>
            <h2 className="text-2xl font-bold text-white" >${totalRevenue}</h2>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-xl border border-neutral-800/50 shadow-medium" >
            <div className="flex items-center justify-between mb-3" >
              <div className="p-2 bg-blue-400/10 rounded-lg" >
                <svg className="w-6 h-6 text-blue-400"  fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium mb-1" >Completed Bookings</p>
            <h2 className="text-2xl font-bold text-white" >{bookings.filter(b => b.status === 'completed').length}</h2>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-xl border border-neutral-800/50 shadow-medium" >
            <div className="flex items-center justify-between mb-3" >
              <div className="p-2 bg-purple-400/10 rounded-lg" >
                <svg className="w-6 h-6 text-purple-400"  fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium mb-1" >Active Services</p>
            <h2 className="text-2xl font-bold text-white" >{services.length}</h2>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] p-6 rounded-xl border border-neutral-800/50 shadow-medium" >
            <div className="flex items-center justify-between mb-3" >
              <div className="p-2 bg-orange-400/10 rounded-lg" >
                <svg className="w-6 h-6 text-orange-400"  fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium mb-1" >Pending Bookings</p>
            <h2 className="text-2xl font-bold text-white" >{bookings.filter(b => b.status === 'pending').length}</h2>
          </div>
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" >
          {/* Monthly Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl p-6 shadow-strong" 
          >
            <h3 className="text-xl font-semibold text-white mb-6" >Monthly Revenue</h3>
            <div className="space-y-4" >
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex items-center justify-between" >
                  <span className="text-gray-400 text-sm w-12" >{data.month}</span>
                  <div className="flex-1 mx-4" >
                    <div className="bg-neutral-700 rounded-full h-2" >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(data.revenue / 500) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        className="bg-lime-400 h-2 rounded-full" 
                      ></motion.div>
                    </div>
                  </div>
                  <span className="text-white text-sm font-medium" >${data.revenue}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Popular Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl p-6 shadow-strong" 
          >
            <h3 className="text-xl font-semibold text-white mb-6" >Popular Services</h3>
            <div className="space-y-4" >
              {popularServices.slice(0, 5).map((service, index) => (
                <div key={service.id} className="flex items-center justify-between" >
                  <div className="flex items-center" >
                    <div className="w-8 h-8 bg-lime-400/10 rounded-lg flex items-center justify-center mr-3" >
                      <span className="text-lime-400 text-xs font-bold" >{index + 1}</span>
                    </div>
                    <span className="text-white text-sm font-medium" >{service.name}</span>
                  </div>
                  <span className="text-gray-400 text-sm" >{service.bookings} bookings</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl overflow-hidden shadow-strong" 
        >
          <div className="p-6 border-b border-neutral-800/50" >
            <h3 className="text-xl font-semibold text-white" >Recent Activity</h3>
          </div>

          <div className="divide-y divide-neutral-800/50" >
            {bookings.slice(0, 5).map((booking, index) => (
              <motion.div
                key={booking.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-6 flex items-center justify-between hover:bg-neutral-900/30 transition-colors" 
              >
                <div className="flex items-center" >
                  <div className={`w-3 h-3 rounded-full mr-4 ${
                    booking.status === 'completed' ? 'bg-green-400' :
                    booking.status === 'pending' ? 'bg-orange-400' : 'bg-blue-400'
                  }`}></div>
                  <div>
                    <p className="text-white font-medium" >{booking.service}</p>
                    <p className="text-gray-400 text-sm" >Booked by {booking.vendor || 'Student'} • {booking.date}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  booking.status === 'completed' ? 'bg-green-400/10 text-green-400' :
                  booking.status === 'pending' ? 'bg-orange-400/10 text-orange-400' :
                  'bg-blue-400/10 text-blue-400'
                }`}>
                  {booking.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}