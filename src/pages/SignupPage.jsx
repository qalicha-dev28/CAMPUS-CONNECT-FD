import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

export default function SignupPage() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRoleSelect = (role) => {
    setForm({ ...form, role });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setUser(form); // mock
    navigate("/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white px-14 py-10 flex flex-col">
      {/* Back */}
      <Link to="/" className="text-gray-400 hover:text-white text-sm mb-4">
        ← Back
      </Link>

      {/* Top Label */}
      <h1 className="text-lg font-semibold mb-6">CampusConnect</h1>

      <div className="flex gap-20">
        {/* LEFT COLUMN */}
        <div>
          <h2 className="text-3xl font-semibold mb-2">Create Account</h2>
          <p className="text-gray-400 text-sm mb-6">
            Join thousands of students and vendors on campus
          </p>

          <form onSubmit={handleSignup} className="space-y-5 w-[520px]">
            <div>
              <label className="text-sm text-gray-300">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-neutral-900 rounded-md px-3 py-2 mt-1 outline-none border border-neutral-800 focus:border-lime-400"
              />
            </div>

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

            <div>
              <label className="text-sm text-gray-300">I am a...</label>
              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full bg-neutral-900 rounded-md px-3 py-2 mt-1 outline-none border border-neutral-800 focus:border-lime-400"
              >
                <option value="student">Student</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>

            <button className="w-full bg-lime-400 py-2 rounded-md text-black font-semibold hover:brightness-105">
              Create Account
            </button>
          </form>

          <p className="text-sm text-gray-300 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-lime-400">
              Login
            </Link>
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">Get Started Today</h3>
          <p className="text-gray-400 text-sm mb-4">Choose your account type:</p>

          {/* Student Box */}
          <div
            onClick={() => handleRoleSelect("student")}
            className={`cursor-pointer border rounded-lg w-[300px] p-4 mb-4 
            ${form.role === "student" ? "border-lime-400 bg-neutral-900/60" : "border-neutral-700 bg-neutral-900"}`}
          >
            <p className="text-lime-400 font-semibold">✦ Student Account</p>
            <p className="text-gray-400 text-sm mt-1">
              Browse services, make bookings, and leave reviews
            </p>
          </div>

          {/* Vendor Box */}
          <div
            onClick={() => handleRoleSelect("vendor")}
            className={`cursor-pointer border rounded-lg w-[300px] p-4
            ${form.role === "vendor" ? "border-lime-400 bg-neutral-900/60" : "border-neutral-700 bg-neutral-900"}`}
          >
            <p className="text-lime-400 font-semibold">👤 Vendor Account</p>
            <p className="text-gray-400 text-sm mt-1">
              List your services and manage bookings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
