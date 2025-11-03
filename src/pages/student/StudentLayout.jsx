// src/pages/student/StudentLayout.jsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiHome, FiUser, FiBookOpen, FiGrid, FiLogOut } from "react-icons/fi";

export default function StudentLayout() {
  const navigate = useNavigate();

  const logout = () => {
    // For now, just navigate to home since auth is removed
    navigate("/");
  };

  return (
    <div className="flex bg-[#0D0D0D] min-h-screen text-white">

      {/* Sidebar */}
      <aside className="w-60 bg-[#131313] border-r border-gray-800 p-6 flex flex-col gap-6">

        <h1 className="text-xl font-bold text-neon">CampusConnect</h1>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/student/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md ${
                isActive ? "bg-neon text-black" : "text-gray-400 hover:text-white"
              }`
            }
          >
            <FiHome /> Dashboard
          </NavLink>

          <NavLink
            to="/student/services"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md ${
                isActive ? "bg-neon text-black" : "text-gray-400 hover:text-white"
              }`
            }
          >
            <FiGrid /> Browse Services
          </NavLink>

          <NavLink
            to="/student/bookings"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md ${
                isActive ? "bg-neon text-black" : "text-gray-400 hover:text-white"
              }`
            }
          >
            <FiBookOpen /> My Bookings
          </NavLink>

          <NavLink
            to="/student/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-md ${
                isActive ? "bg-neon text-black" : "text-gray-400 hover:text-white"
              }`
            }
          >
            <FiUser /> My Profile
          </NavLink>
        </nav>

        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-400 hover:text-red-300 mt-auto"
        >
          <FiLogOut /> Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
}
