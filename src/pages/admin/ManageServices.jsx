// src/pages/admin/ManageServices.jsx
import BackButton from "../../components/BackButton";
import { useEffect, useState } from "react";
import { fetchServices, createService, updateService, deleteService } from "../../services/serviceApi";
import ServiceModal from "../../components/modals/ServiceModal";
import { motion } from "framer-motion";

export default function ManageServices() {
  const [services, setServices] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => {
    async function load() {
      console.log('ManageServices: Loading services...');
      const s = await fetchServices();
      console.log('ManageServices: Loaded services:', s);
      setServices(s);
    }
    load();
  }, []);

  const handleAddService = () => {
    setEditingService(null);
    setIsModalOpen(true);
  };

  const handleEditService = (service) => {
    setEditingService(service);
    setIsModalOpen(true);
  };

  const handleDeleteService = async (serviceId) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteService(serviceId);
        const updatedServices = await fetchServices();
        setServices(updatedServices);
      } catch {
        alert("Failed to delete service");
      }
    }
  };

  const handleSaveService = async (serviceData) => {
    console.log('ManageServices: Saving service:', serviceData);
    try {
      if (editingService) {
        console.log('ManageServices: Updating service with id:', editingService.id);
        await updateService(editingService.id, serviceData);
      } else {
        console.log('ManageServices: Creating new service');
        await createService(serviceData);
      }
      console.log('ManageServices: Fetching updated services...');
      const updatedServices = await fetchServices();
      console.log('ManageServices: Updated services:', updatedServices);
      setServices(updatedServices);
    } catch (error) {
      console.error('ManageServices: Failed to save service:', error);
      alert("Failed to save service");
    }
  };

  return (
    <>
      <BackButton className="mb-4" />

      <div className="bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] min-h-screen w-full flex justify-center relative overflow-hidden" overflow-y-auto>
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden" overflow-y-auto>
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-lime-400/15 to-lime-300/10 rounded-full blur-xl shadow-lg shadow-lime-400/20" overflow-y-auto
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-lime-400/8 to-lime-500/5 rounded-full blur-2xl shadow-xl shadow-lime-400/10" overflow-y-auto
        />

        {/* Rotating geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-lime-400/30 rounded-full shadow-inner shadow-lime-400/20" overflow-y-auto
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/3 w-16 h-16 border border-lime-400/25 rounded-lg rotate-45 shadow-lg shadow-lime-400/15" overflow-y-auto
        />

        {/* Additional floating particles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-32 right-16 w-6 h-6 bg-lime-400/40 rounded-full blur-sm" overflow-y-auto
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-16 w-8 h-8 bg-lime-400/30 rounded-full blur-sm" overflow-y-auto
        />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" overflow-y-auto>
          <div className="absolute inset-0" overflow-y-auto style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(184,255,35,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Responsive container */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-8 relative min-h-screen z-10" overflow-y-auto>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-center mb-16" overflow-y-auto
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6" overflow-y-auto
          >
            <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-300 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-lime-400/30" overflow-y-auto>
              <svg className="w-8 h-8 text-black" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight" overflow-y-auto>
            Manage Services
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed" overflow-y-auto
          >
            Add, edit, and manage campus services available to students.
          </motion.p>
        </motion.div>

        {/* Add Service Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 flex justify-center" overflow-y-auto
        >
          <motion.button
            onClick={handleAddService}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lime-400 text-black font-semibold py-3 px-8 rounded-xl hover:bg-lime-300 transition-modern shadow-medium hover:shadow-lime-400/25 flex items-center gap-2" overflow-y-auto
          >
            <svg className="w-5 h-5" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Add New Service
          </motion.button>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" overflow-y-auto
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="group transition-modern" overflow-y-auto
            >
              <div className="relative" overflow-y-auto>
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-lime-400/20 to-lime-300/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" overflow-y-auto></div>
                <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-neutral-800/50 rounded-xl p-6 shadow-medium hover:shadow-strong transition-modern" overflow-y-auto>
                  <div className="flex justify-between items-start mb-4" overflow-y-auto>
                    <div className="w-12 h-12 bg-lime-400/10 rounded-lg flex items-center justify-center" overflow-y-auto>
                      <svg className="w-6 h-6 text-lime-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="px-2 py-1 bg-lime-400/10 text-lime-400 text-xs font-medium rounded-full" overflow-y-auto>
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-white font-semibold text-lg mb-2" overflow-y-auto>{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2" overflow-y-auto>{service.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-300 mb-4" overflow-y-auto>
                    <span>By {service.vendorName}</span>
                    <span className="font-semibold text-lime-400" overflow-y-auto>${service.price}</span>
                  </div>

                  <div className="flex gap-2" overflow-y-auto>
                    <motion.button
                      onClick={() => handleEditService(service)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-modern" overflow-y-auto
                    >
                      Edit
                    </motion.button>
                    <motion.button
                      onClick={() => handleDeleteService(service.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-red-600 hover:bg-red-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-modern" overflow-y-auto
                    >
                      Delete
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {services.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
            className="col-span-full text-center py-16" overflow-y-auto
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl" overflow-y-auto
            >
              <svg className="w-10 h-10 text-gray-400" overflow-y-auto fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <h3 className="text-gray-300 text-xl font-semibold mb-2" overflow-y-auto>No services found</h3>
            <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed" overflow-y-auto>
              Start by adding your first service to the platform.
            </p>
          </motion.div>
        )}

        {/* Service Modal */}
        <ServiceModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          service={editingService}
          onSave={handleSaveService}
        />
      </div>
    </div>
    </>
  );
}