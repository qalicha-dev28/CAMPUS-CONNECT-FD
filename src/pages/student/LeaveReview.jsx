import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../../components/BackButton";
import { useEffect, useState, useCallback } from "react";
import { createMockReview, fetchReviewsByService } from "../../services/reviewsApi";

export default function LeaveReview() {
  const { serviceName } = useParams();
  const navigate = useNavigate();

  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [reviews, setReviews] = useState([]);

  const fetchReviews = useCallback(async () => {
    const res = await fetchReviewsByService(serviceName);
    setReviews(res);
  }, [serviceName]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  async function handleSubmit(e) {
    e.preventDefault();
    await createMockReview(serviceName, rating, comment);

    alert("✅ Review submitted!");
    navigate("/student/bookings");
  }

  return (
    <>
      <BackButton className="mb-4" />

      <div className="text-white p-6" overflow-y-auto>
      <h2 className="text-2xl font-bold mb-4" overflow-y-auto>Leave a Review for {serviceName}</h2>

      <form onSubmit={handleSubmit} className="space-y-3 max-w-md" overflow-y-auto>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
          className="w-full bg-gray-800 p-2 rounded" overflow-y-auto
        >
          <option value="">Select rating</option>
          <option value="⭐">⭐</option>
          <option value="⭐⭐">⭐⭐</option>
          <option value="⭐⭐⭐">⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
          <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
        </select>

        <textarea
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          className="w-full bg-gray-800 p-2 h-24 rounded" overflow-y-auto
        />

        <button className="bg-lime-400 text-black px-4 py-2 rounded" overflow-y-auto>
          Submit Review
        </button>
      </form>

      <h3 className="mt-6 text-xl font-bold" overflow-y-auto>Existing Reviews:</h3>
      <ul className="mt-2 space-y-2" overflow-y-auto>
        {reviews.map((r) => (
          <li
            key={r.id}
            className="bg-gray-800 p-2 rounded text-sm" overflow-y-auto
          >
            <strong>{r.rating}</strong> - {r.comment}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}
