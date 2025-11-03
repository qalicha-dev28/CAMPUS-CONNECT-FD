// src/pages/vendor/ViewBookings.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchMockBookings, updateBooking } from "../../services/serviceApi";

export default function ViewBookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      const data = await fetchMockBookings();
      setBookings(data);
    } catch {
      setMessage("Failed to load bookings.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateBooking(id, { status: newStatus });
      setMessage("Booking status updated successfully!");
      setTimeout(() => setMessage(""), 3000);
      loadBookings();
    } catch {
      setMessage("Failed to update booking status. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500/10 border-green-500/20 text-green-400";
      case "pending":
        return "bg-yellow-500/10 border-yellow-500/20 text-yellow-400";
      case "completed":
        return "bg-blue-500/10 border-blue-500/20 text-blue-400";
      case "cancelled":
        return "bg-red-500/10 border-red-500/20 text-red-400";
      default:
        return "bg-gray-500/10 border-gray-500/20 text-gray-400";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center">
        <div className="text-white text-xl">Loading bookings...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-4">View Bookings</h1>
          <p className="text-gray-400 text-lg">
            Manage and track all your service bookings
          </p>
        </motion.div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg text-center ${
              message.includes("successfully")
                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                : "bg-red-500/10 border border-red-500/20 text-red-400"
            }`}
          >
            {message}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-2xl p-6 shadow-strong"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-semibold text-white">{booking.service}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(booking.status)}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">Vendor: {booking.vendor}</p>
                  <p className="text-gray-300">Date: {new Date(booking.date).toLocaleDateString()}</p>
                </div>

                <div className="flex gap-2">
                  {booking.status === "pending" && (
                    <>
                      <button
                        onClick={() => handleStatusChange(booking.id, "confirmed")}
                        className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-medium transition-modern text-sm"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => handleStatusChange(booking.id, "cancelled")}
                        className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg font-medium transition-modern text-sm"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                  {booking.status === "confirmed" && (
                    <button
                      onClick={() => handleStatusChange(booking.id, "completed")}
                      className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition-modern text-sm"
                    >
                      Mark Complete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {bookings.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gray-700/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No Bookings Found</h3>
            <p className="text-gray-400">You don't have any bookings yet.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}