// src/components/modals/UserModal.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UserModal({ isOpen, onClose, user, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Student",
    status: "Active",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        role: user.role || "Student",
        status: user.status || "Active",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        role: "Student",
        status: "Active",
      });
    }
  }, [user, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const roles = ["Student", "Vendor", "Admin"];
  const statuses = ["Active", "Inactive"];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-2xl p-8 w-full max-w-md shadow-strong">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {user ? "Edit User" : "Add New User"}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern text-white placeholder-gray-400"
                    placeholder="Enter full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern text-white placeholder-gray-400"
                    placeholder="Enter email address"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern text-white"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role} className="bg-[#0a0a0a]">
                        {role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern text-white"
                  >
                    {statuses.map((status) => (
                      <option key={status} value={status} className="bg-[#0a0a0a]">
                        {status}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-modern"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-lime-400 hover:bg-lime-300 text-black py-3 rounded-lg font-semibold transition-modern shadow-medium hover:shadow-lime-400/25"
                  >
                    {user ? "Update User" : "Add User"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}