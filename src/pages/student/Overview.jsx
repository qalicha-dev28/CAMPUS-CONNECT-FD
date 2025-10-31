import { Link } from "react-router-dom";
import { fetchMockBookings, fetchServices } from "../../services/serviceApi";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Overview() {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Mock data
    fetchMockBookings().then(setBookings);
    fetchServices().then(setServices);
  }, []);

  const pending = bookings.filter((b) => b.status === "pending").length;
  const completed = bookings.filter((b) => b.status === "completed").length;

  return (
    <div className="p-8 text-white min-h-screen">
      <h1 className="text-3xl font-semibold">
        Welcome back, <span className="text-lime-400 capitalize">{user?.name || "Student"}</span> 👋
      </h1>

      <p className="text-gray-400 mt-1 mb-8">
        Here is your activity summary
      </p>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-10">
        <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
          <p className="text-gray-300 text-sm">Total Bookings</p>
          <h2 className="text-2xl font-semibold mt-2 text-lime-400">
            {bookings.length}
          </h2>
        </div>

        <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
          <p className="text-gray-300 text-sm">Completed</p>
          <h2 className="text-2xl font-semibold mt-2 text-lime-400">
            {completed}
          </h2>
        </div>

        <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
          <p className="text-gray-300 text-sm">Pending</p>
          <h2 className="text-2xl font-semibold mt-2 text-yellow-400">
            {pending}
          </h2>
        </div>

        <div className="bg-neutral-900 p-5 rounded-lg border border-neutral-800">
          <p className="text-gray-300 text-sm">Available Services</p>
          <h2 className="text-2xl font-semibold mt-2 text-lime-400">
            {services.length}
          </h2>
        </div>
      </div>

      {/* Quick Actions */}
      <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
      <div className="flex gap-4 mb-10">
        <Link
          to="/student/services"
          className="bg-lime-400 text-black px-4 py-2 rounded-md font-semibold hover:brightness-105"
        >
          Browse Services
        </Link>
        <Link
          to="/student/bookings"
          className="bg-neutral-900 px-4 py-2 rounded-md border border-neutral-700 hover:border-lime-400"
        >
          My Bookings
        </Link>
        <Link
          to="/student/profile"
          className="bg-neutral-900 px-4 py-2 rounded-md border border-neutral-700 hover:border-lime-400"
        >
          Edit Profile
        </Link>
      </div>

      {/* Latest Bookings */}
      <h3 className="text-lg font-semibold mb-3">Recent Bookings</h3>
      <div className="space-y-3">
        {bookings.slice(0, 3).map((b) => (
          <div
            key={b.id}
            className="bg-neutral-900 p-4 rounded-lg border border-neutral-800 flex justify-between"
          >
            <div>
              <p className="font-medium">{b.service}</p>
              <p className="text-gray-400 text-sm">{b.date}</p>
            </div>

            <span
              className={`px-3 py-1 rounded-md text-sm capitalize ${
                b.status === "completed"
                  ? "bg-lime-500 text-black"
                  : b.status === "pending"
                  ? "bg-yellow-500 text-black"
                  : "bg-neutral-700"
              }`}
            >
              {b.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
