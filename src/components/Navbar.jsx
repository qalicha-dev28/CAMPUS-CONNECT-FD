import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const onHome = location.pathname === "/";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="w-full py-4 bg-transparent">
      <div className="max-w-[1250px] mx-auto flex justify-between px-8">
        <Link to="/" className="text-white font-medium text-[13px]">
          CampusConnect
        </Link>

        <div className="flex items-center gap-4 text-[11px]">
          {/* 🔥 Always show Login/SignUp on landing page */}
          {onHome && (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-[#B7FF2C] text-black px-3 py-1 rounded-md font-medium hover:brightness-95 transition"
              >
                Sign Up
              </Link>
            </>
          )}

          {/* 🔐 Show these everywhere else when authenticated */}
          {!onHome && user && (
            <>
              <Link to="/dashboard/student" className="text-gray-300 hover:text-white">
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="text-gray-300 hover:text-white"
              >
                Logout
              </button>
            </>
          )}

          {/* 👤 If user is NOT logged in and NOT on home, show login */}
          {!onHome && !user && (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#B7FF2C] text-black px-3 py-1 rounded-md font-medium hover:brightness-95 transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
