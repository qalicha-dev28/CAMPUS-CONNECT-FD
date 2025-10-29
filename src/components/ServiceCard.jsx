export default function ServiceCard({ name, price, category }) {
  return (
    <div className="bg-darklight p-4 rounded border border-gray-800 hover:border-neon transition cursor-pointer shadow">
      <p className="text-xs text-gray-500">{category}</p>

      <h3 className="text-lg font-semibold mt-1">{name}</h3>

      <div className="flex justify-between mt-4">
        <span className="text-gray-400">KES {price}</span>
        <button className="bg-neon text-black px-4 py-1 rounded font-semibold hover:opacity-80">
          View
        </button>
      </div>
    </div>
  );
}
