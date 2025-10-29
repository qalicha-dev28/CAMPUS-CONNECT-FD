import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Call context login (mock until backend connected)
    login(email, password);
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex flex-col px-8 py-16">
      {/* Back link */}
      <Link to="/" className="text-sm text-gray-400 hover:text-gray-200 mb-6">
        ← Back
      </Link>

      {/* Heading */}
      <div className="flex gap-16 justify-center w-full">
        <div>
          <h1 className="text-4xl font-semibold leading-tight">
            Welcome Back to
            <span className="block text-lime-400">CampusConnect</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-md text-sm">
            Login to access all your campus services and manage your bookings in one convenient place.
          </p>

          {/* Quick demo accounts */}
          <div className="mt-6 bg-[#141414] p-4 rounded-lg text-sm text-gray-300">
            <p className="text-gray-400 mb-2">Quick login demo accounts:</p>
            <p>
              <span className="text-lime-400 mr-2">Student:</span> student@campus.edu
            </p>
            <p>
              <span className="text-lime-400 mr-2">Vendor:</span> vendor@campus.edu
            </p>
            <p>
              <span className="text-lime-400 mr-2">Admin:</span> admin@campus.edu
            </p>
            <p className="mt-2 text-gray-500 text-xs">Password: any</p>
          </div>
        </div>

        {/* Login form */}
        <form
          onSubmit={handleSubmit}
          className="bg-[#141414] p-6 rounded-xl w-[360px] shadow-lg"
        >
          <h2 className="text-xl font-medium mb-4">Login</h2>

          <label className="text-sm text-gray-400">Email Address</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mt-1 mb-4 bg-[#0e0e0e] border border-gray-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-lime-400"
          />

          <label className="text-sm text-gray-400">Password</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mt-1 bg-[#0e0e0e] border border-gray-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-lime-400"
          />

          <p className="text-xs text-gray-500 mt-2 mb-4 hover:underline cursor-pointer">
            Forgot password?
          </p>

          <button
            type="submit"
            className="w-full bg-lime-400 text-black py-2 rounded-lg font-medium hover:bg-lime-300 transition-all duration-200"
          >
            Login
          </button>

          <p className="mt-4 text-center text-sm text-gray-400">
            Don't have an account?
            <Link
              to="/signup"
              className="text-lime-400 ml-1 hover:text-lime-300"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
