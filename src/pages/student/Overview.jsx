// src/pages/student/Overview.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchServices, fetchMockBookings } from "../../services/serviceApi";

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

  return (
    <div className="text-white p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Welcome back 👋</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800">
          <p className="text-gray-400 text-sm">Available Services</p>
          <h2 className="text-xl font-bold">{services.length}</h2>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800">
          <p className="text-gray-400 text-sm">Active Bookings</p>
          <h2 className="text-xl font-bold">{pending}</h2>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800">
          <p className="text-gray-400 text-sm">Completed</p>
          <h2 className="text-xl font-bold">{completed}</h2>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded-xl border border-gray-800">
          <p className="text-gray-400 text-sm">Pending Reviews</p>
          <h2 className="text-xl font-bold">{completed - pending}</h2>
        </div>
      </div>

      {/* Quick Shortcuts */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/student/services"
            className="bg-[#1b1b1b] hover:bg-[#2b2b2b] transition border border-gray-800 p-4 rounded-xl text-center"
          >
            Browse Services
          </Link>

          <Link
            to="/student/bookings"
            className="bg-[#1b1b1b] hover:bg-[#2b2b2b] transition border border-gray-800 p-4 rounded-xl text-center"
          >
            View My Bookings
          </Link>

          <Link
            to="/student/profile"
            className="bg-[#1b1b1b] hover:bg-[#2b2b2b] transition border border-gray-800 p-4 rounded-xl text-center"
          >
            My Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
