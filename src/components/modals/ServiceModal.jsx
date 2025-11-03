// src/components/modals/ServiceModal.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceModal({ isOpen, onClose, service, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    vendorName: "",
    price: "",
    category: "Laundry",
    description: "",
  });

  useEffect(() => {
    if (service) {
      setFormData({
        name: service.name || "",
        vendorName: service.vendorName || "",
        price: service.price || "",
        category: service.category || "Laundry",
        description: service.description || "",
      });
    } else {
      setFormData({
        name: "",
        vendorName: "",
        price: "",
        category: "Laundry",
        description: "",
      });
    }
  }, [service, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const categories = ["Laundry", "Food", "Transport", "Printing", "Tutoring", "Fitness"];

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
            className="fixed inset-0 flex items-center justify-center z-50 p-4 overflow-y-auto"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-2xl p-8 w-full max-w-md shadow-strong">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">
                  {service ? "Edit Service" : "Add New Service"}
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
                {/* Service Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern text-white placeholder-gray-400"
                    placeholder="Enter service name"
                  />
                </div>

                {/* Vendor Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Vendor Name
                  </label>
                  <input
                    type="text"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern text-white placeholder-gray-400"
                    placeholder="Enter vendor name"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern text-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat} className="bg-[#0a0a0a]">
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern text-white placeholder-gray-400"
                    placeholder="e.g., $10.99, $5/hour"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full bg-[#0a0a0a] border border-gray-700 rounded-lg p-3 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern text-white placeholder-gray-400 resize-none"
                    placeholder="Describe the service"
                  />
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
                    {service ? "Update Service" : "Add Service"}
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