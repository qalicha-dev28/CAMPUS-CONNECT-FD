import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import BookingCard from "../../components/bookings/BookingCard";
import { api } from "../../services/api";

const TABS = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },     // active = confirmed + pending (for display)
  { key: "pending", label: "Pending" },
  { key: "confirmed", label: "Confirmed" },
  { key: "completed", label: "History" }, // maps to completed
];

export default function StudentDashboard() {
  const [tab, setTab] = useState("all");
  const [data, setData] = useState({ data: [], total: 0, page: 1, limit: 10 });
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let statusParam = "";
    if (tab === "pending") statusParam = "pending";
    else if (tab === "confirmed") statusParam = "confirmed";
    else if (tab === "completed") statusParam = "completed";
    // "active" we will filter client-side (confirmed+pending)
    setLoading(true);
    api.getBookings({ status: statusParam, page: 1, limit: 10 })
      .then((res) => { setData(res); setErr(""); })
      .catch((e) => setErr(e.message || "Failed to load"))
      .finally(() => setLoading(false));
  }, [tab]);

  const bookings = useMemo(() => {
    if (tab === "active") {
      return data.data.filter(b => ["confirmed","pending"].includes(b.status));
    }
    return data.data;
  }, [data, tab]);

  return (
    <main className="bg-[#0D0D0D] text-white min-h-screen">
      <div className="max-w-[1360px] mx-auto px-8 py-10">
        {/* Breadcrumb pills */}
        <div className="flex items-center gap-2 text-[12px] mb-6">
          <Link to="/services" className="px-3 py-[6px] rounded-full bg-[#1b1b1b] border border-gray-800 hover:border-gray-700">
            Browse Services
          </Link>
          <span className="px-3 py-[6px] rounded-full bg-[#1b1b1b] border border-gray-800 text-neon">
            My Bookings
          </span>
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-[24px] font-bold">My Bookings</h1>
          <p className="text-[13px] text-gray-400">View and manage your bookings</p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {TABS.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-3 py-[6px] rounded-full border text-[12.5px] transition-colors
                ${tab === t.key ? "border-neon text-black bg-neon" : "border-gray-800 bg-[#1b1b1b] text-gray-300 hover:border-gray-700"}`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading && <div className="text-gray-400 text-sm">Loading bookings…</div>}
        {err && !loading && <div className="text-rose-400 text-sm">Error: {err}</div>}

        {!loading && !err && (
          <motion.div
            initial="hidden"
            animate="show"
            className="flex flex-col gap-5"
          >
            {bookings.length === 0 ? (
              <div className="text-gray-400 text-sm">
                No bookings to show.{" "}
                <Link to="/services" className="text-neon underline">Browse services</Link>
              </div>
            ) : (
              bookings.map(b => <BookingCard key={b.id} booking={b} />)
            )}
          </motion.div>
        )}
      </div>
    </main>
  );
}
