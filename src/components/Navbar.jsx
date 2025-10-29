import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-800 bg-dark">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-[18px] font-bold tracking-wide">
          CampusConnect
        </Link>

        {/* Right actions (small) */}
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/login" className="text-gray-300 hover:text-neon">
            Login
          </Link>
          <Link
            to="/signup"
            className="px-3 py-[6px] rounded bg-neon text-black font-semibold hover:opacity-90"
          >
            Signup
          </Link>
        </nav>
      </div>
    </header>
  );
}
