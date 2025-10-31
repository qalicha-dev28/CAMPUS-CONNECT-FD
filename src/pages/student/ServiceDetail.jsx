import { useEffect, useState } from "react";
import { fetchMockBookings, createMockReview } from "../../services/serviceApi";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [showReview, setShowReview] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchMockBookings().then(setBookings);
  }, []);

  const openReviewModal = (service) => {
    setSelectedService(service);
    setShowReview(true);
  };

  const submitReview = async () => {
    await createMockReview(selectedService, rating, comment);
    alert("✅ Review submitted!");
    setShowReview(false);
    setRating(5);
    setComment("");
  };

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-4">My Bookings</h2>

      <div className="space-y-4">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="bg-neutral-900 rounded p-4 flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">{b.service}</p>
              <p className="text-sm text-gray-400">{b.date}</p>
              <p className="text-green-400">${b.price || ""}</p>
            </div>

            <div className="flex items-center space-x-3">
              <span
                className={`px-3 py-1 rounded text-sm ${
                  b.status === "completed"
                    ? "bg-green-600"
                    : b.status === "pending"
                    ? "bg-yellow-600"
                    : "bg-blue-600"
                }`}
              >
                {b.status}
              </span>

              {b.status === "completed" && (
                <button
                  onClick={() => openReviewModal(b.service)}
                  className="text-black bg-lime-400 px-3 py-1 rounded hover:opacity-80"
                >
                  Leave Review
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Review Modal */}
      {showReview && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-neutral-900 p-6 rounded w-80">
            <h3 className="font-bold text-xl mb-3">Review {selectedService}</h3>

            <label className="text-sm text-gray-300">Rating</label>
            <select
              className="w-full bg-neutral-800 p-2 rounded mb-3"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              {[1,2,3,4,5].map(n => (
                <option key={n} value={n}>{n} ⭐</option>
              ))}
            </select>

            <label className="text-sm text-gray-300">Comment</label>
            <textarea
              className="w-full bg-neutral-800 p-2 rounded mb-4"
              rows="3"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write your review…"
            />

            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-600 px-3 py-1 rounded"
                onClick={() => setShowReview(false)}
              >
                Cancel
              </button>
              <button
                className="bg-lime-400 text-black px-3 py-1 rounded"
                onClick={submitReview}
              >
                Submit ✅
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
