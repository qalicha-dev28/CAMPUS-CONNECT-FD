// src/pages/student/Services.jsx
import { useEffect, useState } from "react";
import { fetchServices } from "../../services/serviceApi";
import ServiceCard from "../../components/ServiceCard";
import { motion } from "framer-motion";

export default function Services() {
  const [services, setServices] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      const s = await fetchServices();
      setServices(s);
      setFiltered(s);
    }
    load();
  }, []);

  // filters everything
  useEffect(() => {
    let list = [...services];

    if (activeCategory !== "All") {
      list = list.filter((s) => s.category === activeCategory);
    }

    if (search.length > 0) {
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.vendorName.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFiltered(list);
  }, [activeCategory, search, services]);

  const categories = ["All", "Laundry", "Food", "Transport", "Printing", "Tutoring"];

  return (
    <div className="p-6 text-white space-y-6">
      <h1 className="text-2xl font-semibold">Browse Services</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search services..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 mb-4 focus:outline-none focus:border-lime-400"
      />

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition ${
              activeCategory === cat
                ? "bg-lime-400 text-black font-semibold"
                : "border-gray-700 hover:border-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Card Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4"
      >
        {filtered.map((s) => (
          <ServiceCard key={s.id} service={s} />
        ))}

        {filtered.length === 0 && (
          <p className="text-gray-500 text-sm">No services found.</p>
        )}
      </motion.div>
    </div>
  );
}
