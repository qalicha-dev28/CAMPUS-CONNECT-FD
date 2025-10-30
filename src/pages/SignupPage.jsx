import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function SignupPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await signup(form);
    navigate("/login");
  }

  return (
    <main className="bg-[#0E0E0E] text-white min-h-screen px-8 py-10">
      <div className="max-w-[1500px] mx-auto">
        <Link to="/" className="text-gray-300 text-sm hover:text-white">
          ← Back
        </Link>

        <h2 className="mt-8 text-[26px] font-semibold">Create Account</h2>
        <p className="text-gray-400 text-[12.5px] mt-1">
          Join thousands of students and vendors on campus
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-10">
          {/* Left form */}
          <form onSubmit={handleSubmit} className="space-y-5 max-w-[500px]">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full bg-[#111] border border-gray-800 px-4 py-2.5 text-sm rounded"
              onChange={handleChange}
            />

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

            <select
              name="role"
              className="w-full bg-[#111] border border-gray-800 px-4 py-2.5 text-sm rounded"
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="vendor">Vendor</option>
            </select>

            <button
              type="submit"
              className="w-full bg-[#B8FF23] text-black text-sm py-2 rounded font-medium hover:opacity-90"
            >
              Create Account
            </button>

            <p className="text-[11.5px] text-gray-400">
              Already have an account?
              <Link to="/login" className="ml-1 text-[#B8FF23]">
                Login
              </Link>
            </p>
          </form>

          {/* Right card */}
          <div>
            <p className="text-sm text-gray-300 mb-3">Get Started Today</p>
            <p className="text-[11.5px] text-gray-500">
              Choose your account type:
            </p>

            <div className="space-y-4 mt-5">
              <div className="bg-[#111] border border-gray-800 rounded px-5 py-4 text-[12px]">
                <span className="text-[#B8FF23] text-xs mr-2">⚑</span>
                <strong>Student Account</strong>
                <p className="mt-1 text-gray-500 text-[11px]">
                  Browse services, make bookings, and leave reviews
                </p>
              </div>

              <div className="bg-[#111] border border-gray-800 rounded px-5 py-4 text-[12px]">
                <span className="text-[#B8FF23] text-xs mr-2">🛍</span>
                <strong>Vendor Account</strong>
                <p className="mt-1 text-gray-500 text-[11px]">
                  List your services and manage bookings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
