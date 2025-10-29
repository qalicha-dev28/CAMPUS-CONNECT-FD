import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const linkBase =
    "text-[12.5px] text-gray-300 hover:text-neon transition-colors relative";

  const underline = (
    <motion.span
      layoutId="nav-underline"
      className="absolute left-0 -bottom-[6px] h-[2px] w-full bg-neon rounded"
    />
  );

  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full bg-dark/90 backdrop-blur border-b border-gray-800"
    >
      <div className="max-w-[1536px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Brand */}
        <motion.div whileHover={{ scale: 1.01 }}>
          <Link
            to="/"
            className="text-[16px] font-semibold text-white hover:text-neon transition-colors"
          >
            CampusConnect
          </Link>
        </motion.div>

        {/* Right actions (Login + Sign Up) */}
        <nav className="flex items-center gap-6">
          <NavLink to="/login" className={linkBase}>
            {({ isActive }) => (
              <span className="relative">
                Login
                {isActive && underline}
              </span>
            )}
          </NavLink>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/signup"
              className="text-[12px] px-3 py-[6px] rounded bg-neon text-black font-semibold
                         shadow-[0_8px_24px_-8px_rgba(184,255,35,0.45)]
                         hover:shadow-[0_12px_28px_-10px_rgba(184,255,35,0.55)]
                         transition-all"
            >
              Sign Up
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
