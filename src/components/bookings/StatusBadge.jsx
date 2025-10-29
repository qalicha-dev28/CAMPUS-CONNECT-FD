export default function StatusBadge({ status }) {
  const map = {
    pending: "bg-amber-500 text-black",
    confirmed: "bg-neon text-black",
    completed: "bg-emerald-500 text-black",
    cancelled: "bg-rose-500 text-black",
  };
  const cls = map[status] || "bg-gray-600 text-white";
  return (
    <span className={`text-[11px] px-2 py-[2px] rounded font-semibold ${cls}`}>
      {status}
    </span>
  );
}
