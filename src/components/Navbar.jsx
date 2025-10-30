import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between items-center w-full py-4 px-10 text-sm text-gray-300">
      <div className="font-semibold">CampusConnect</div>

      {!user ? (
        <div className="flex gap-4 items-center">
          <Link to="/login">Login</Link>
          <Link
            to="/signup"
            className="bg-lime-400 text-black px-3 py-1 rounded text-xs"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <button onClick={logout} className="text-red-400 text-xs">
          Logout
        </button>
      )}
    </nav>
  );
}
