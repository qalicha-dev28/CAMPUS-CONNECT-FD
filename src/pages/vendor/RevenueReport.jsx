// src/pages/vendor/RevenueReport.jsx
import BackButton from "../../components/BackButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchMockBookings } from "../../services/serviceApi";

export default function RevenueReport() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const data = await fetchMockBookings();
      setBookings(data);
    } catch (error) {
      console.error("Failed to load bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate revenue metrics
  const completedBookings = bookings.filter(booking => booking.status === "completed");
  const totalRevenue = completedBookings.reduce((sum, booking) => sum + parseFloat(booking.amount), 0);
  const averageRevenue = completedBookings.length > 0 ? totalRevenue / completedBookings.length : 0;

  // Group by month for chart data
  const monthlyRevenue = {};
  completedBookings.forEach(booking => {
    const date = new Date(booking.date);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    monthlyRevenue[monthKey] = (monthlyRevenue[monthKey] || 0) + parseFloat(booking.amount);
  });

  const chartData = Object.entries(monthlyRevenue).map(([month, revenue]) => ({
    month: new Date(month + '-01').toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    revenue
  }));

  if (loading) {
    return (
      <>
        <BackButton className="mb-4" />

        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center" overflow-y-auto>
          <div className="text-white text-xl" overflow-y-auto>Loading revenue report...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <BackButton className="mb-4" />

      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-8" overflow-y-auto>
      <div className="max-w-6xl mx-auto" overflow-y-auto>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8" overflow-y-auto
        >
          <h1 className="text-4xl font-bold text-white mb-4" overflow-y-auto>Revenue Report</h1>
          <p className="text-gray-400 text-lg" overflow-y-auto>
            Track your earnings and business performance
          </p>
        </motion.div>

        {/* Revenue Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" overflow-y-auto
        >
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl p-6" overflow-y-auto>
            <div className="flex items-center justify-between mb-4" overflow-y-auto>
              <div className="p-3 bg-green-400/10 rounded-lg" overflow-y-auto>
                <svg className="w-6 h-6 text-green-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium mb-1" overflow-y-auto>Total Revenue</p>
            <h2 className="text-2xl font-bold text-white" overflow-y-auto>${totalRevenue.toFixed(2)}</h2>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl p-6" overflow-y-auto>
            <div className="flex items-center justify-between mb-4" overflow-y-auto>
              <div className="p-3 bg-blue-400/10 rounded-lg" overflow-y-auto>
                <svg className="w-6 h-6 text-blue-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium mb-1" overflow-y-auto>Completed Bookings</p>
            <h2 className="text-2xl font-bold text-white" overflow-y-auto>{completedBookings.length}</h2>
          </div>

          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl p-6" overflow-y-auto>
            <div className="flex items-center justify-between mb-4" overflow-y-auto>
              <div className="p-3 bg-purple-400/10 rounded-lg" overflow-y-auto>
                <svg className="w-6 h-6 text-purple-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-medium mb-1" overflow-y-auto>Average Revenue</p>
            <h2 className="text-2xl font-bold text-white" overflow-y-auto>${averageRevenue.toFixed(2)}</h2>
          </div>
        </motion.div>

        {/* Monthly Revenue Chart Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl p-6 mb-8" overflow-y-auto
        >
          <h3 className="text-xl font-semibold text-white mb-6" overflow-y-auto>Monthly Revenue</h3>
          <div className="space-y-4" overflow-y-auto>
            {chartData.length > 0 ? (
              chartData.map((data, index) => (
                <div key={index} className="flex items-center justify-between" overflow-y-auto>
                  <span className="text-gray-300" overflow-y-auto>{data.month}</span>
                  <div className="flex items-center gap-4" overflow-y-auto>
                    <div className="w-32 bg-gray-700 rounded-full h-2" overflow-y-auto>
                      <div
                        className="bg-lime-400 h-2 rounded-full" overflow-y-auto
                        style={{ width: `${(data.revenue / Math.max(...chartData.map(d => d.revenue))) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-medium" overflow-y-auto>${data.revenue.toFixed(2)}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8" overflow-y-auto>
                <p className="text-gray-400" overflow-y-auto>No revenue data available yet</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Recent Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl overflow-hidden" overflow-y-auto
        >
          <div className="p-6 border-b border-neutral-800/50" overflow-y-auto>
            <h3 className="text-lg font-semibold text-white" overflow-y-auto>Recent Transactions</h3>
          </div>

          <div className="overflow-x-auto" overflow-y-auto>
            <table className="w-full" overflow-y-auto>
              <thead className="bg-neutral-900/50" overflow-y-auto>
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" overflow-y-auto>Service</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" overflow-y-auto>Customer</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" overflow-y-auto>Date</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider" overflow-y-auto>Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800/50" overflow-y-auto>
                {completedBookings.slice(0, 10).map((booking, index) => (
                  <motion.tr
                    key={booking.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                    className="hover:bg-neutral-900/30 transition-colors" overflow-y-auto
                  >
                    <td className="px-6 py-4 whitespace-nowrap" overflow-y-auto>
                      <div className="text-sm font-medium text-white" overflow-y-auto>{booking.serviceName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap" overflow-y-auto>
                      <div className="text-sm text-gray-400" overflow-y-auto>{booking.customerName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400" overflow-y-auto>
                      {booking.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-lime-400" overflow-y-auto>
                      ${booking.amount}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {completedBookings.length === 0 && (
            <div className="text-center py-16" overflow-y-auto>
              <div className="w-20 h-20 bg-gray-700/20 rounded-full flex items-center justify-center mx-auto mb-6" overflow-y-auto>
                <svg className="w-10 h-10 text-gray-500" overflow-y-auto fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-gray-300 text-xl font-semibold mb-2" overflow-y-auto>No Revenue Yet</h3>
              <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed" overflow-y-auto>
                Complete some bookings to start seeing your revenue data here.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
    </>
  );
}