import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/fakeAuth";
import { useAuth } from "../context/AuthContext";

export default function SignupPage() {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = () => {
    try {
      registerUser(form);
      setUser(form);

      if (form.role === "student") navigate("/dashboard/student");
      if (form.role === "vendor") navigate("/dashboard/vendor");
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
        {/* LEFT FORM */}
        <div className="w-[420px]">
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="text-gray-400 text-sm mt-1">
            Join thousands of students and vendors on campus
          </p>

          <div className="mt-6 space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm"
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm"
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm"
              onChange={handleChange}
            />

            <select
              name="role"
              className="w-full bg-transparent border border-gray-700 rounded px-3 py-2 text-sm"
              onChange={handleChange}
            >
              <option className="text-black">Student</option>
              <option className="text-black">Vendor</option>
            </select>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              onClick={submit}
              className="w-full bg-neon text-black font-semibold py-2 rounded hover:opacity-80 transition"
            >
              Create Account
            </button>
          </div>

          <p className="text-xs text-gray-500 mt-4">
            Already have an account?
            <Link to="/login" className="text-neon ml-1">
              Login
            </Link>
          </p>
        </div>

        {/* RIGHT BOX */}
        <div className="w-[290px] mt-4">
          <p className="text-center font-semibold mb-3">Get Started Today</p>
          <p className="text-gray-500 text-xs text-center mb-5">
            Choose your account type:
          </p>

          <div className="bg-[#1B1B1B] border border-gray-700 rounded p-3 mb-4">
            <p className="text-neon text-xs">★ Student Account</p>
            <p className="text-gray-500 text-[11px]">
              Browse services, make bookings, and leave reviews
            </p>
          </div>

          <div className="bg-[#1B1B1B] border border-gray-700 rounded p-3">
            <p className="text-neon text-xs">⚑ Vendor Account</p>
            <p className="text-gray-500 text-[11px]">
              List your services and manage bookings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
