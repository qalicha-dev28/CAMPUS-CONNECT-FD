// src/layouts/StudentLayout.jsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiHome, FiFileText, FiUser, FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";

export default function StudentLayout() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="bg-[#0D0D0D] text-white flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-60 border-r border-gray-800 p-6 space-y-6">
        <h2 className="text-xl font-bold mb-4">CampusConnect</h2>

        <nav className="space-y-4 text-sm">
          <NavLink
            to="/student/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-lime-400" : "text-gray-400"
              }`
            }
          >
            <FiHome /> Overview
          </NavLink>

          <NavLink
            to="/student/services"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-lime-400" : "text-gray-400"
              }`
            }
          >
            <FiFileText /> Services
          </NavLink>

          <NavLink
            to="/student/bookings"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-lime-400" : "text-gray-400"
              }`
            }
          >
            <FiFileText /> Bookings
          </NavLink>

          <NavLink
            to="/student/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 ${
                isActive ? "text-lime-400" : "text-gray-400"
              }`
            }
          >
            <FiUser /> Profile
          </NavLink>
        </nav>

        <button
          onClick={logout}
          className="flex items-center gap-2 text-gray-400 hover:text-red-400 mt-10 text-sm"
        >
          <FiLogOut /> Logout
        </button>
      </aside>

      
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
