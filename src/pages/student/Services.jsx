// src/pages/student/Services.jsx
import BackButton from "../../components/BackButton";
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
    <div className="bg-gradient-to-br from-[#0e0e0e] via-[#1a1a1a] to-[#0f0f0f] min-h-screen w-full flex justify-center relative overflow-hidden" >
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden" >
        {/* Primary floating orbs */}
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
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-lime-400/15 to-lime-300/10 rounded-full blur-xl shadow-lg shadow-lime-400/20" 
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
          className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-lime-400/8 to-lime-500/5 rounded-full blur-2xl shadow-xl shadow-lime-400/10" 
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
          className="absolute top-1/2 left-1/4 w-20 h-20 border-2 border-lime-400/30 rounded-full shadow-inner shadow-lime-400/20" 
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
          className="absolute top-1/4 right-1/3 w-16 h-16 border border-lime-400/25 rounded-lg rotate-45 shadow-lg shadow-lime-400/15" 
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
          className="absolute top-32 right-16 w-6 h-6 bg-lime-400/40 rounded-full blur-sm" 
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
          className="absolute bottom-32 left-16 w-8 h-8 bg-lime-400/30 rounded-full blur-sm" 
        />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]" >
          <div className="absolute inset-0"  style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(184,255,35,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      {/* Responsive container */}
      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-8 relative min-h-screen z-10 ">
        {/* Back Button */}
        <div className="mb-4">
          <BackButton />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-6" 
          >
            <div className="w-16 h-16 bg-gradient-to-br from-lime-400 to-lime-300 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-lime-400/30" >
              <svg className="w-8 h-8 text-black"  fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight" >
            Browse Services
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed" 
          >
            Discover and book essential campus services with ease. From laundry to tutoring, everything you need in one place.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8" 
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8" >
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"  fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              placeholder="Search services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-gray-700 rounded-xl p-4 pl-12 focus:outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400/50 transition-modern text-white placeholder-gray-400" 
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" >
            {categories.map((cat, index) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full border text-sm font-medium transition-modern ${
                  activeCategory === cat
                    ? "bg-lime-400 text-black border-lime-400 shadow-medium shadow-lime-400/25"
                    : "border-gray-700 hover:border-lime-400/50 hover:bg-lime-400/5 text-gray-300"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Responsive Card Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10" 
        >
          {filtered.map((s, index) => (
            <motion.div
              key={s.id}
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
              className="group transition-modern" 
            >
              <div className="relative" >
                {/* Glow effect on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-lime-400/20 to-lime-300/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" ></div>
                <div className="relative" >
                  <ServiceCard service={s} />
                </div>
              </div>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
              className="col-span-full text-center py-16" 
            >
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="w-20 h-20 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl" >
                <svg className="w-10 h-10 text-gray-400"  fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <h3 className="text-gray-300 text-xl font-semibold mb-2" >No services found</h3>
              <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed" >
                Try adjusting your search terms or selecting a different category to find what you're looking for.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

