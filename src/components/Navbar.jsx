import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-dark border-b border-gray-800">
      {/* Constrain to Figma frame width */}
      <div className="max-w-[1536px] mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: brand */}
        <Link to="/" className="text-[16px] font-semibold text-white">
          CampusConnect
        </Link>

        {/* Right: small Login + neon Sign Up pill */}
        <nav className="flex items-center gap-3">
          <Link to="/login" className="text-[12px] text-gray-300 hover:text-neon">
            Login
          </Link>
          <Link
            to="/signup"
            className="text-[12px] px-3 py-[6px] rounded bg-neon text-black font-semibold hover:opacity-90"
          >
            Sign Up
          </Link>
        </nav>
      </div>
    </header>
  );
}
