// src/pages/student/MyProfile.jsx
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function MyProfile() {
  const navigate = useNavigate();
  const { user, setUser, logout } = useAuth();

  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);

  const handleSave = () => {
    setUser({
      ...user,
      fullName,
      email,
    });
    alert("✅ Profile updated!");
  };

  return (
    <div className="p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate("/student/dashboard")}
          className="text-sm text-gray-300 hover:text-white"
        >
          ← Back
        </button>

        <button
          onClick={logout}
          className="bg-lime-400 text-black text-sm px-4 py-1 rounded hover:bg-lime-300"
        >
          Logout
        </button>
      </div>

      <div className="bg-[#111] p-8 rounded-lg mx-auto w-[600px] shadow-lg border border-gray-800">
        <h2 className="text-xl font-semibold mb-2">My Profile</h2>
        <p className="text-sm text-gray-400 mb-6">
          Manage your account information
        </p>

        {/* Full name */}
        <label className="text-sm mb-1 block text-gray-300">Full Name</label>
        <input
          className="w-full bg-[#0a0a0a] border border-gray-700 rounded p-2 mb-4 focus:outline-none"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        {/* Email */}
        <label className="text-sm mb-1 block text-gray-300">Email Address</label>
        <input
          className="w-full bg-[#0a0a0a] border border-gray-700 rounded p-2 mb-4 focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Role */}
        <label className="text-sm mb-1 block text-gray-300">Role</label>
        <div className="w-full bg-[#0a0a0a] border border-gray-700 rounded p-2 mb-6 text-gray-400">
          {user.role}
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-lime-400 text-black font-semibold py-2 rounded hover:bg-lime-300"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
