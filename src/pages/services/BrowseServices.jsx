import { useState, useEffect } from "react";
import ServiceCard from "../../components/ServiceCard";
import { fetchServices } from "../../services/serviceApi";

const categories = ["All", "Laundry", "Printing", "Tutoring", "Transport", "Food", "Wellness"];

export default function BrowseServices() {
  const [active, setActive] = useState("All");
  const [services, setServices] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const load = async () => {
      const data = await fetchServices();
      setServices(data);
    };
    load();
  }, []);

  const filtered = services.filter((item) => {
    const matchCat = active === "All" || item.category === active;
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#0F0F0F] text-white px-8 pt-6">
      <h2 className="text-center text-2xl font-semibold mb-1">Browse Services</h2>
      <p className="text-center text-sm text-gray-400 mb-6">Everything you need for campus life</p>

      {/* Search */}
      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          placeholder="🔍 Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#131313] border border-[#222] rounded-lg px-4 py-2 text-sm outline-none focus:border-lime-400 duration-200"
        />
      </div>

      {/* Category Chips */}
      <div className="flex justify-center gap-3 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1 rounded-full text-sm transition-all duration-300 ${
              active === cat
                ? "bg-lime-400 text-black font-semibold shadow-lg shadow-lime-700/20"
                : "bg-[#181818] text-gray-300 border border-[#222] hover:border-lime-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {filtered.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
}
