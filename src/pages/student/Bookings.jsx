import { useEffect, useState } from "react";
import { fetchMockBookings } from "../../services/serviceApi";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchMockBookings().then((res) => {
      setBookings(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="max-w-5xl">
      <div className="mb-5">
        <h1 className="text-[20px] font-semibold">My Bookings</h1>
        <p className="text-[12.5px] text-gray-500">View and manage your bookings</p>
      </div>

      {loading ? (
        <div className="text-[13px] text-gray-400">Loading…</div>
      ) : bookings.length === 0 ? (
        <div className="text-[13.5px] text-gray-400">No bookings yet.</div>
      ) : (
        <div className="space-y-3">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="rounded-lg bg-[#111111] border border-gray-800/80 p-4 flex items-start justify-between"
            >
              <div>
                <div className="text-[14px] font-medium text-white">{b.title}</div>
                <div className="text-[12px] text-gray-500 mt-1">
                  {b.date} • {b.location} • ${b.price}
                </div>
              </div>
              <span
                className={
                  "text-[11px] px-2 py-[3px] rounded-md " +
                  (b.status === "confirmed"
                    ? "bg-[#b8ff23] text-black"
                    : b.status === "pending"
                    ? "bg-yellow-500/20 text-yellow-300"
                    : "bg-emerald-500/20 text-emerald-300")
                }
              >
                {b.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
