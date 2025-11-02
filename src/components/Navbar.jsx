import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { motion } from "framer-motion";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center w-full py-6 px-8 lg:px-12 text-sm text-gray-300 shadow-subtle bg-dark/80 backdrop-blur-sm border-b border-neutral-800/50"
    >
      <Link to="/" className="font-semibold text-lg tracking-tight bg-gradient-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent hover:scale-105 transition-transform">
        CampusConnect
      </Link>

      {!user ? (
        <div className="flex gap-6 items-center">
          <Link
            to="/login"
            className="hover:text-white transition-modern font-medium relative group"
          >
            Login
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            to="/signup"
            className="bg-lime-400 text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-lime-300 hover:shadow-medium transition-modern shadow-subtle hover:shadow-lime-400/25"
          >
            Sign Up
          </Link>
        </div>
      ) : (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={logout}
          className="text-red-400 hover:text-red-300 transition-modern font-medium px-4 py-2 rounded-lg hover:bg-red-400/10 hover:shadow-medium"
        >
          Logout
        </motion.button>
      )}
    </motion.nav>
  );
}
