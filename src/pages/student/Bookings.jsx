// src/pages/student/Bookings.jsx
import { useEffect, useState } from "react";
import { fetchMockBookings } from "../../services/serviceApi";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchMockBookings().then(setBookings);
  }, []);

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold mb-6">My Bookings</h2>

      <div className="space-y-4">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-[#151515] border border-gray-800 p-4 rounded-xl flex justify-between"
          >
            <div>
              <div className="font-semibold">{b.service}</div>
              <div className="text-gray-400 text-sm">{b.vendor}</div>
            </div>
            <span className="text-neon font-medium">{b.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
