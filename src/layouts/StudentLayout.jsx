// src/layouts/StudentLayout.jsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function StudentLayout() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-56 h-screen bg-black border-r border-gray-900 p-6 text-white">
        <h1 className="text-xl font-bold text-neon mb-8">CampusConnect</h1>

        <nav className="flex flex-col gap-4">
          <NavLink
            to="/student/dashboard"
            className={({ isActive }) =>
              `hover:text-neon ${isActive ? "text-neon" : ""}`
            }
          >
            Overview
          </NavLink>

          <NavLink
            to="/student/services"
            className={({ isActive }) =>
              `hover:text-neon ${isActive ? "text-neon" : ""}`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/student/bookings"
            className={({ isActive }) =>
              `hover:text-neon ${isActive ? "text-neon" : ""}`
            }
          >
            My Bookings
          </NavLink>

          <NavLink
            to="/student/profile"
            className={({ isActive }) =>
              `hover:text-neon ${isActive ? "text-neon" : ""}`
            }
          >
            Profile
          </NavLink>
        </nav>

        <button
          onClick={handleLogout}
          className="text-red-400 hover:text-red-300 absolute bottom-6"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 text-white">
        <Outlet />
      </main>
    </div>
  );
}
