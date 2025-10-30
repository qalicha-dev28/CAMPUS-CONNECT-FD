import { NavLink, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const nav = [
  { to: "/dashboard/student", label: "Overview", exact: true },
  { to: "/dashboard/student/services", label: "Browse Services" },
  { to: "/dashboard/student/bookings", label: "My Bookings" },
  { to: "/dashboard/student/profile", label: "My Profile" },
];

export default function StudentLayout() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white flex">
      {/* Sidebar */}
      <aside className="hidden md:flex w-[240px] flex-col border-r border-gray-800/80 bg-[#111111]">
        <div className="px-5 py-5 border-b border-gray-800/80">
          <div className="text-sm text-gray-400">CampusConnect</div>
          <div className="mt-1 text-[15px] font-semibold">Student</div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.exact}
              className={({ isActive }) =>
                [
                  "block rounded-lg px-3 py-2 text-[13.5px] transition-all",
                  isActive
                    ? "bg-[#141414] border border-gray-800 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.6)] text-white"
                    : "text-gray-400 hover:text-white hover:bg-[#141414] border border-transparent",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 py-4 border-t border-gray-800/80 text-[12.5px] text-gray-400">
          <div className="mb-2">Signed in as</div>
          <div className="text-[13.5px] text-white truncate">{user?.name || "Student"}</div>
          <button
            onClick={logout}
            className="mt-3 w-full rounded-md bg-[#b8ff23] text-black font-semibold py-[8px] text-[13px] hover:shadow-[0_16px_36px_-12px_rgba(184,255,35,0.65)] transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Top bar */}
        <div className="h-[58px] border-b border-gray-800/80 px-4 md:px-6 flex items-center justify-between bg-[#0F0F0F]">
          <div className="text-[13px] text-gray-400">Student Dashboard</div>
          <div className="text-[13px] text-gray-400">
            {user?.email ? <span className="text-gray-300">{user.email}</span> : null}
          </div>
        </div>

        <motion.main
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-4 md:p-6"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
}
