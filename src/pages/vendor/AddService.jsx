// src/pages/vendor/AddService.jsx
import BackButton from "../../components/BackButton";
import { useState } from "react";
import { motion } from "framer-motion";
import { createService } from "../../services/serviceApi";
import ServiceModal from "../../components/modals/ServiceModal";

export default function AddService() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddService = async (serviceData) => {
    try {
      await createService(serviceData);
      setMessage("Service added successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch {
      setMessage("Failed to add service. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <>
      <BackButton className="mb-4" />

      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-8" overflow-y-auto>
      <div className="max-w-4xl mx-auto" overflow-y-auto>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8" overflow-y-auto
        >
          <h1 className="text-4xl font-bold text-white mb-4" overflow-y-auto>Add New Service</h1>
          <p className="text-gray-400 text-lg" overflow-y-auto>
            Expand your offerings by adding a new service to your portfolio
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-2xl p-8 shadow-strong" overflow-y-auto
        >
          <div className="text-center" overflow-y-auto>
            <div className="w-24 h-24 bg-lime-400/10 rounded-full flex items-center justify-center mx-auto mb-6" overflow-y-auto>
              <svg className="w-12 h-12 text-lime-400" overflow-y-auto fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-white mb-4" overflow-y-auto>Ready to Add a Service?</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto" overflow-y-auto>
              Click the button below to open the service creation form and start offering new services to students.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-lime-400 hover:bg-lime-300 text-black px-8 py-4 rounded-xl font-semibold text-lg transition-modern shadow-medium hover:shadow-lime-400/25 transform hover:scale-105" overflow-y-auto
            >
              Add New Service
            </button>
          </div>

          {message && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-6 p-4 rounded-lg text-center ${
                message.includes("successfully")
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}
            >
              {message}
            </motion.div>
          )}
        </motion.div>
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddService}
      />
    </div>
    </>
  );
}