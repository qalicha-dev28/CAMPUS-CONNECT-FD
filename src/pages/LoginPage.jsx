import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, getCurrentUser } from "../services/fakeAuth";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    try {
      loginUser(email, password);

      const u = getCurrentUser();
      setUser(u);

      if (u.role === "student") navigate("/dashboard/student");
      if (u.role === "vendor") navigate("/dashboard/vendor");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen px-20 py-12">
      <Link to="/" className="text-sm text-gray-400 hover:text-neon">
        ← Back
      </Link>

      <div className="mt-10 flex justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Welcome Back to <span className="text-neon">CampusConnect</span>
          </h2>
          <p className="text-gray-400 text-sm max-w-[340px] mt-1">
            Login to access all your campus services and manage your bookings
            in one convenient place.
          </p>

          <div className="bg-[#1B1B1B] border border-gray-700 rounded p-4 text-xs text-gray-300 mt-6">
            <p><span className="text-neon">Student:</span> student@campus.edu</p>
            <p><span className="text-neon">Vendor:</span> vendor@campus.edu</p>
            <p><span className="text-neon">Admin:</span> admin@campus.edu</p>
            <p className="text-gray-500">Password: any</p>
          </div>
        </div>

        <div className="space-y-6 w-[350px]">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm"
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            onClick={submit}
            className="w-full bg-neon text-black font-semibold py-2 rounded hover:opacity-80 transition"
          >
            Login
          </button>

          <p className="text-xs text-gray-500">
            Don't have an account?
            <Link to="/signup" className="text-neon ml-1">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
