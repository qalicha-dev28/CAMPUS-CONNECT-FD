// src/pages/student/ServiceDetail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchServices } from "../../services/serviceApi";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    async function load() {
      const data = await fetchServices();
      const found = data.find((s) => s.id === Number(id));
      setService(found);
    }
    load();
  }, [id]);

  if (!service) return <p className="text-gray-500 p-6">Loading…</p>;

  return (
    <div className="p-6 text-white space-y-6">
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition"
      >
        <FiArrowLeft /> Back
      </button>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-6"
      >
        <h1 className="text-2xl font-semibold">{service.name}</h1>
        <p className="text-gray-500 text-sm">{service.vendorName}</p>

        <div className="mt-3 flex gap-6 text-sm">
          <span>{service.rating}⭐ Rating</span>
          <span>{service.reviews} Reviews</span>
          <span className="text-lime-400">{service.price}</span>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
          {service.description ||
            "This campus service provides convenience, reliability, and fast delivery within campus grounds."}
        </p>

        {/* Category Tag */}
        <span className="inline-block mt-4 px-3 py-1 bg-lime-400 text-black rounded-full text-xs font-medium">
          {service.category}
        </span>

        {/* Booking CTA */}
        <button
          onClick={() => alert("Booking modal coming soon ✅")}
          className="mt-6 bg-lime-400 text-black font-medium px-5 py-2 rounded-md hover:opacity-90 transition"
        >
          Book Service
        </button>
      </motion.div>
    </div>
  );
}
