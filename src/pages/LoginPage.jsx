import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await login(form.email, form.password);
    navigate("/dashboard/student");
  }

  return (
    <main className="bg-[#0E0E0E] text-white min-h-screen px-8 py-10">
      <div className="max-w-[1500px] mx-auto">
        <Link to="/" className="text-gray-300 text-sm hover:text-white">
          ← Back
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
          {/* Left Block */}
          <div>
            <h2 className="text-[28px] font-bold leading-tight">
              Welcome Back to <br />
              <span className="text-[#B8FF23]">CampusConnect</span>
            </h2>

            <p className="mt-3 w-96 text-gray-400 text-[12.5px]">
              Login to access all your campus services and manage your bookings
              in one convenient place.
            </p>

            {/* Demo credentials box */}
            <div className="bg-[#111] border border-gray-800 rounded mt-6 px-6 py-4 text-[11.5px] text-gray-400 leading-relaxed">
              <p className="font-medium text-gray-300">
                Quick login demo accounts:
              </p>
              <p className="text-[#B8FF23]">Student:</p>
              student@campus.edu <br />
              <p className="text-[#B8FF23] mt-1">Vendor:</p>
              vendor@campus.edu <br />
              <p className="text-[#B8FF23] mt-1">Admin:</p>
              admin@campus.edu <br />
              <p className="mt-2 text-xs">Password: any</p>
            </div>
          </div>

          {/* Right Block - Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 w-full max-w-[420px]"
          >
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-[#111] border border-gray-800 px-4 py-2.5 text-sm rounded"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-[#111] border border-gray-800 px-4 py-2.5 text-sm rounded"
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-[#B8FF23] text-black text-sm py-2 rounded font-medium hover:opacity-90"
            >
              Login
            </button>

            <p className="text-[11.5px] text-gray-400">
              Don’t have an account?
              <Link to="/signup" className="ml-1 text-[#B8FF23]">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}
