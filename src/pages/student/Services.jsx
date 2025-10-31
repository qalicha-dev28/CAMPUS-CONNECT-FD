import { useEffect, useState } from "react";
import { fetchServices } from "../../services/serviceApi";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const [services, setServices] = useState([]);
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchServices().then(setServices);
  }, []);

  const filtered = services.filter((s) => {
    return (
      (filter === "All" || s.category === filter) &&
      s.name.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mt-2">Browse Services</h1>
      <p className="text-gray-400">Find and book campus services</p>

      {/* Search */}
      <input
        className="mt-4 w-full bg-gray-900 p-3 rounded border border-gray-800"
        placeholder="Search services..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        {["All", "Laundry", "Printing", "Tutoring", "Food", "Transport"].map(
          (cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 rounded ${
                filter === cat ? "bg-neon text-black" : "bg-gray-800"
              }`}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* ✅ Responsive Cards */}
      <div className="mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((s) => (
          <div
            key={s.id}
            className="bg-gray-900 p-4 rounded border border-gray-800"
          >
            <span className="text-xs bg-gray-800 px-2 py-1 rounded">
              {s.category}
            </span>

            <h2 className="mt-2 font-bold">{s.name}</h2>
            <p className="text-gray-400 text-sm">{s.vendorName}</p>

            <div className="mt-2 text-sm flex gap-4">
              ⭐ {s.rating} ({s.reviews})
            </div>

            <p className="text-neon font-bold mt-2">{s.price}</p>

            <button
              onClick={() => navigate(`/student/services/${s.id}`)}
              className="mt-4 w-full bg-neon text-black font-bold py-2 rounded"
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
