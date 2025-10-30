// src/pages/student/Services.jsx
import { useEffect, useState } from "react";
import { fetchServices } from "../../services/serviceApi";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices().then(setServices);
  }, []);

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold mb-6">Available Services</h2>

      <div className="grid grid-cols-3 gap-5">
        {services.map((s) => (
          <div
            key={s.id}
            className="bg-[#151515] border border-gray-800 p-4 rounded-xl"
          >
            <h3 className="font-semibold">{s.name}</h3>
            <p className="text-sm text-gray-400">{s.vendorName}</p>
            <p className="mt-2 text-neon font-medium">{s.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
