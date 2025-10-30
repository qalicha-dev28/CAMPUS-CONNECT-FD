import { Link } from "react-router-dom";

export default function Overview() {
  return (
    <div className="max-w-5xl">
      <h1 className="text-[22px] font-semibold mb-1">Welcome Back 👋</h1>
      <p className="text-[13.5px] text-gray-400 mb-6">
        Find and book campus services, manage your bookings, and keep your profile up to date.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <QuickCard title="Browse Services" to="/dashboard/student/services" />
        <QuickCard title="My Bookings" to="/dashboard/student/bookings" />
        <QuickCard title="My Profile" to="/dashboard/student/profile" />
      </div>
    </div>
  );
}

function QuickCard({ title, to }) {
  return (
    <Link
      to={to}
      className="rounded-xl bg-[#111111] border border-gray-800/80 p-5 hover:border-gray-700 hover:-translate-y-[2px] transition-all block"
    >
      <div className="text-[14px] font-medium text-white">{title}</div>
      <div className="text-[12.5px] text-gray-500 mt-1">Open</div>
    </Link>
  );
}
