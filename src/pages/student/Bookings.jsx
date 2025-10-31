import { useEffect, useState } from "react";
import { fetchMockBookings } from "../../services/serviceApi";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMockBookings().then((data) => setBookings(data));
  }, []);

  return (
    <div className="text-white p-6">

      {/* TOP BAR */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">CampusConnect</h2>

        <div className="flex gap-4 items-center">
          <span className="text-gray-300">{user?.email}</span>
          <button
            onClick={() => navigate("/student/profile")}
            className="text-gray-300 hover:text-white"
          >
            Profile
          </button>
          <button
            onClick={logout}
            className="bg-lime-400 text-black px-4 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </div>

      {/* TABS */}
      <div className="flex gap-4 mb-4">
        <Link
          to="/student/services"
          className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600"
        >
          Browse Services
        </Link>

        <span className="bg-lime-400 text-black px-3 py-1 rounded">
          My Bookings
        </span>
      </div>

      <h1 className="text-2xl font-semibold mb-1">My Bookings</h1>
      <p className="text-gray-400 mb-4">View and manage your bookings</p>

      <div className="flex flex-col gap-4">
        {bookings.map((b, idx) => (
          <div key={idx} className="bg-[#111] p-4 rounded border border-gray-700">

            <h2 className="text-lg font-semibold">{b.service}</h2>

            <p className="text-gray-400 mb-1">By {b.vendor}</p>
            <p className="text-gray-400 mb-1">📅 {b.date}</p>

            <div className="flex justify-between items-center mt-3">
              <span
                className={`px-3 py-1 rounded text-sm ${
                  b.status === "completed"
                    ? "bg-green-500 text-black"
                    : b.status === "pending"
                    ? "bg-yellow-500 text-black"
                    : "bg-lime-400 text-black"
                }`}
              >
                {b.status}
              </span>

              {/* LEAVE REVIEW BUTTON */}
              {b.status === "completed" && (
                <button className="bg-gray-700 px-3 py-1 rounded hover:bg-gray-600">
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
