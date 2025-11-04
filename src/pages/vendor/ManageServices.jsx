// src/pages/vendor/ManageServices.jsx
import BackButton from "../../components/BackButton";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchServices, updateService, deleteService } from "../../services/serviceApi";
import ServiceModal from "../../components/modals/ServiceModal";

export default function ManageServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const data = await fetchServices();
      setServices(data);
    } catch {
      setMessage("Failed to load services.");
      setTimeout(() => setMessage(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setIsModalOpen(true);
  };

  const handleUpdateService = async (serviceData) => {
    try {
      await updateService(editingService.id, serviceData);
      setMessage("Service updated successfully!");
      setIsModalOpen(false); // Close modal after success
      setTimeout(() => setMessage(""), 3000);
      loadServices();
    } catch {
      setMessage("Failed to update service. Please try again.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const handleDeleteService = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteService(id);
        setMessage("Service deleted successfully!");
        setTimeout(() => setMessage(""), 3000);
        loadServices();
      } catch {
        setMessage("Failed to delete service. Please try again.");
        setTimeout(() => setMessage(""), 3000);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingService(null);
  };

  if (loading) {
    return (
      <>
        <BackButton className="mb-4" />

        <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center" >
          <div className="text-white text-xl" >Loading services...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <BackButton className="mb-4" />

      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-8" >
      <div className="max-w-6xl mx-auto" >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8" 
        >
          <h1 className="text-4xl font-bold text-white mb-4" >Manage Services</h1>
          <p className="text-gray-400 text-lg" >
            View, edit, and manage all your services
          </p>
        </motion.div>

        {message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mb-6 p-4 rounded-lg text-center ${
              message.includes("successfully")
                ? "bg-green-500/10 border border-green-500/20 text-green-400"
                : "bg-red-500/10 border border-red-500/20 text-red-400"
            }`}
          >
            {message}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" 
        >
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-2xl p-6 shadow-strong hover:shadow-lime-400/10 transition-all duration-300" 
            >
              <div className="flex justify-between items-start mb-4" >
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1" >{service.name}</h3>
                  <p className="text-gray-400 text-sm" >{service.vendorName}</p>
                </div>
                <span className="bg-lime-400/10 text-lime-400 px-3 py-1 rounded-full text-sm font-medium" >
                  {service.category}
                </span>
              </div>

              <p className="text-gray-300 mb-4 line-clamp-2" >{service.description}</p>

              <div className="flex items-center justify-between mb-4" >
                <span className="text-2xl font-bold text-lime-400" >{service.price}</span>
                <div className="flex items-center gap-1" >
                  <svg className="w-4 h-4 text-yellow-400"  fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-300 text-sm" >{service.rating} ({service.reviews})</span>
                </div>
              </div>

              <div className="flex gap-2" >
                <button
                  onClick={() => handleEditService(service)}
                  className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-lg font-medium transition-modern text-sm" 
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteService(service.id)}
                  className="flex-1 bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg font-medium transition-modern text-sm" 
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {services.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center py-12" 
          >
            <div className="w-24 h-24 bg-gray-700/20 rounded-full flex items-center justify-center mx-auto mb-6" >
              <svg className="w-12 h-12 text-gray-500"  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2" >No Services Found</h3>
            <p className="text-gray-400" >You haven't added any services yet.</p>
          </motion.div>
        )}
      </div>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={editingService}
        onSave={handleUpdateService}
      />
    </div>
    </>
  );
}