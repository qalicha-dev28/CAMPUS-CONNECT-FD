// src/pages/student/ServiceDetail.jsx

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchServices } from "../../services/serviceApi";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetchServices().then((list) =>
      setService(list.find((s) => s.id === Number(id)))
    );
  }, [id]);

  if (!service) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="text-gray-400 hover:text-neon mb-4"
      >
        ← Back
      </button>

      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <span className="bg-gray-800 px-2 py-1 text-xs rounded">
          {service.category}
        </span>

        <h1 className="text-3xl font-bold mt-3">{service.name}</h1>
        <p className="text-gray-400">By {service.vendorName}</p>

        <div className="flex gap-5 mt-4 text-sm">
          <span>⭐ {service.rating} ({service.reviews})</span>
          <span className="text-neon font-semibold">{service.price}</span>
        </div>

        <p className="text-gray-300 mt-4 leading-relaxed">
          Book this service easily using our campus platform. Select a date, add
          a comment and confirm instantly.
        </p>

        <button className="mt-6 w-full bg-neon text-black font-bold py-3 rounded">
          Book Now
        </button>
      </div>
    </div>
  );
}
