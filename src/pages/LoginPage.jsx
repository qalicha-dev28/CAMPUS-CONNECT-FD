import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ ...form, role: "student" });
    navigate("/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-14 py-10">
      <Link to="/" className="text-gray-400 hover:text-white text-sm">
        ← Back
      </Link>

      <h1 className="text-lg font-semibold mt-6 mb-14">CampusConnect</h1>

      <div className="flex gap-20">
        {/* LEFT Side */}
        <div>
          <h2 className="text-4xl font-semibold">Welcome Back to</h2>
          <h2 className="text-4xl text-lime-400 font-semibold mb-4">
            CampusConnect
          </h2>
          <p className="text-gray-400 text-sm w-[380px]">
            Login to access all your campus services and manage your bookings in
            one convenient place.
          </p>

          {/* Demo Accounts */}
          <div className="bg-neutral-900 mt-6 p-4 rounded-lg text-sm w-[350px]">
            <p className="text-gray-300 mb-2">Quick login demo accounts:</p>
            <p><span className="text-lime-400">Student:</span> student@campus.edu</p>
            <p><span className="text-lime-400">Vendor:</span> vendor@campus.edu</p>
            <p><span className="text-lime-400">Admin:</span> admin@campus.edu</p>
            <p className="text-gray-400 mt-1">Password: any</p>
          </div>
        </div>

        {/* RIGHT Side */}
        <form onSubmit={handleLogin} className="space-y-5 w-[500px]">
          <h3 className="text-xl font-semibold">Login</h3>
          <p className="text-gray-400 text-sm">Enter your credentials to continue</p>

          <div>
            <label className="text-sm text-gray-300">Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-neutral-900 rounded-md px-3 py-2 mt-1 outline-none border border-neutral-800 focus:border-lime-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full bg-neutral-900 rounded-md px-3 py-2 mt-1 outline-none border border-neutral-800 focus:border-lime-400"
            />
          </div>

          <button className="w-full bg-lime-400 py-2 rounded-md text-black font-semibold hover:brightness-105">
            Login
          </button>

          <p className="text-sm text-gray-300">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-lime-400">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
