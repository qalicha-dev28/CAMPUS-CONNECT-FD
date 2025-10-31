// src/pages/student/Bookings.jsx
import { useEffect, useState } from "react";
import { fetchMockBookings } from "../../services/serviceApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

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
    <div className="p-6 text-white">
      {/* Top mini bar: CampusConnect | user email | Profile | Logout */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-gray-400">CampusConnect</div>

        <div className="flex items-center gap-4 text-sm">
          <span className="text-gray-300">
            {user?.email || "student@campus.edu"}
          </span>
          <button
            onClick={() => navigate("/student/profile")}
            className="text-gray-300 hover:text-white"
          >
            Profile
          </button>
          <button
            onClick={logout}
            className="px-3 py-1 rounded bg-lime-400 text-black font-semibold text-xs hover:opacity-90"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Tabs row like Figma */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => navigate("/student/services")}
          className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700 text-sm"
        >
          Browse Services
        </button>

        <button className="px-3 py-1 rounded bg-lime-400 text-black font-semibold text-sm">
          My Bookings
        </button>
      </div>

      <h2 className="text-2xl font-bold">My Bookings</h2>
      <p className="text-sm text-gray-400 mb-6">View and manage your bookings</p>

      <div className="space-y-4 w-full max-w-4xl">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-[#111111] border border-gray-800 rounded-lg p-4 flex justify-between"
          >
            {/* Left details (service name, date, vendor) */}
            <div>
              <p className="font-semibold">{b.service}</p>
              <p className="text-xs text-gray-300">{b.date}</p>
              <p className="text-xs text-gray-300">{b.vendor || "N/A"}</p>
            </div>

            {/* Right side: status chip + optional Leave Review */}
            <div className="flex flex-col items-end justify-between">
              <span
                className={`px-2 py-1 text-xs rounded ${
                  b.status === "confirmed"
                    ? "bg-lime-500 text-black"
                    : b.status === "pending"
                    ? "bg-orange-500 text-black"
                    : "bg-green-600 text-white"
                }`}
              >
                {b.status}
              </span>

              {b.status === "completed" && (
                <button
                  onClick={() =>
                    navigate(
                      `/student/review/${encodeURIComponent(b.service)}`
                    )
                  }
                  className="text-xs bg-gray-800 px-2 py-1 rounded hover:bg-gray-700 mt-2"
                >
                  Leave a Review
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
