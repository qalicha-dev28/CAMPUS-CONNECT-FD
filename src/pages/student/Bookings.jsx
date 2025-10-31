// src/pages/student/Bookings.jsx
import { useEffect, useState } from "react";
import { fetchMockBookings } from "../../services/serviceApi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    fetchMockBookings().then(setBookings);
  }, []);

  return (
    <div className="p-6">
      {/* ✅ Top header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-white">My Bookings</h2>
          <p className="text-gray-400 text-sm">View and manage your bookings</p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-300 text-sm">{user?.email}</span>
          <button
            onClick={() => navigate("/student/profile")}
            className="text-sm hover:text-white"
          >
            Profile
          </button>
          <button
            onClick={logout}
            className="bg-lime-400 text-black px-3 py-1 rounded text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      {/* ✅ Bookings list */}
      <div className="space-y-4">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-[#0d1016] border border-black rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold text-white">{b.service}</h4>
              <p className="text-xs text-gray-400">{b.vendor}</p>

              {/* Meta details */}
              <div className="mt-2 space-y-1 text-xs text-gray-300">
                <p>📅 {b.date}</p>
                <p>🏫 {b.location ?? "N/A"}</p>
                <p>💲 {b.cost ?? "$5.00"}</p>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              {/* booking status badge */}
              <span
                className={`text-xs px-2 py-1 rounded ${
                  b.status === "confirmed"
                    ? "bg-lime-400 text-black"
                    : b.status === "pending"
                    ? "bg-orange-500 text-black"
                    : "bg-gray-700 text-gray-300"
                }`}
              >
                {b.status}
              </span>

              {/* Leave Review */}
              {b.status === "completed" && (
                <button
                  onClick={() => navigate(`/student/review/${b.service}`)}
                  className="text-xs bg-gray-800 px-2 py-1 rounded hover:bg-gray-700"
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
