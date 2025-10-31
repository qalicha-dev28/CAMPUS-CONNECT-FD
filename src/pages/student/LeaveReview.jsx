// src/pages/student/LeaveReview.jsx

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createMockReview } from "../../services/serviceApi";

export default function LeaveReview() {
  const { service } = useParams();
  const navigate = useNavigate();

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const submitReview = async () => {
    await createMockReview(service, rating, comment);
    alert("✅ Review submitted successfully!");
    navigate("/student/bookings");
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl mb-4">Leave a Review</h1>

      <p className="mb-3 text-gray-400">Service: {service}</p>

      <label className="block mb-2">
        Rating:
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="bg-gray-800 ml-2 p-2 rounded"
        >
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>{r} ⭐</option>
          ))}
        </select>
      </label>

      <textarea
        className="bg-gray-800 p-3 w-full rounded mb-4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write your comment..."
      />

      <button
        onClick={submitReview}
        className="bg-neon text-black px-4 py-2 rounded hover:opacity-80"
      >
        Submit Review
      </button>
    </div>
  );
}
