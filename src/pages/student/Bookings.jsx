// src/pages/student/Bookings.jsx

import { useEffect, useState } from "react";
import { fetchMockBookings } from "../../services/serviceApi";
import { useNavigate } from "react-router-dom";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function load() {
      const data = await fetchMockBookings();
      setBookings(data);
    }
    load();
  }, []);

  return (
    <div className="text-white p-6">
      <h1 className="text-2xl font-semibold mb-4">My Bookings</h1>

      <div className="bg-[#111] border border-gray-800 rounded-xl p-4">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="flex justify-between bg-[#181818] border border-gray-700 rounded-lg px-4 py-3 mb-3"
          >
            <div>
              <div className="text-sm font-bold">{b.service}</div>
              <div className="text-gray-400 text-xs">{b.vendor}</div>
              <div className="text-gray-500 text-xs">{b.date}</div>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`text-xs px-2 py-1 rounded ${
                  b.status === "confirmed"
                    ? "bg-green-700"
                    : b.status === "pending"
                    ? "bg-yellow-700"
                    : "bg-gray-700"
                }`}
              >
                {b.status}
              </span>

              {/* ✅ Leave Review Button */}
              {b.status === "completed" && (
                <button
                  onClick={() => navigate(`/student/review/${b.service}`)}
                  className="text-xs bg-gray-800 px-2 py-1 rounded hover:bg-gray-700"
                >
                  Leave Review
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
