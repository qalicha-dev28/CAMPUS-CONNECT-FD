// src/pages/student/ServiceDetail.jsx
import BackButton from "../../components/BackButton";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchServices } from "../../services/serviceApi";
import { fetchReviewsByService } from "../../services/reviewsApi";

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchServices().then((list) => {
      const found = list.find((s) => s.id === Number(id));
      setService(found);
    });

    fetchReviewsByService(id).then(setReviews);
  }, [id]);

  if (!service) return <p className="text-white p-6" overflow-y-auto>Loading...</p>;

  const avg =
    reviews.length > 0
      ? (reviews.reduce((a, r) => a + Number(r.rating), 0) / reviews.length).toFixed(1)
      : null;

  return (
    <>
      <BackButton className="mb-4" />

      <div className="p-6" overflow-y-auto>
      <button
        onClick={() => navigate(-1)}
        className="text-gray-300 hover:text-white text-sm mb-4" overflow-y-auto
      >
        ← Back
      </button>

      <h2 className="text-white text-xl font-semibold" overflow-y-auto>{service.name}</h2>
      <p className="text-gray-400 text-sm mb-2" overflow-y-auto>{service.vendorName}</p>
      <p className="text-gray-200 text-sm mb-4" overflow-y-auto>{service.description}</p>

      <div className="bg-lime-400 text-black w-fit px-3 py-1 rounded text-sm mb-6" overflow-y-auto>
        {service.price}
      </div>

      <h3 className="text-white text-lg font-semibold mb-2" overflow-y-auto>Reviews</h3>

      {reviews.length === 0 ? (
        <p className="text-gray-400 text-sm" overflow-y-auto>No reviews yet.</p>
      ) : (
        <div className="space-y-3" overflow-y-auto>
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-[#0d1016] border border-black rounded-lg p-4" overflow-y-auto
            >
              <p className="text-yellow-400 text-sm" overflow-y-auto>⭐ {r.rating}/5</p>
              <p className="text-gray-200 text-sm" overflow-y-auto>{r.comment}</p>
              <p className="text-gray-500 text-xs mt-1" overflow-y-auto>{r.date}</p>
            </div>
          ))}
        </div>
      )}

      {avg && (
        <p className="text-gray-300 text-sm mt-4" overflow-y-auto>
          Average rating: <span className="text-yellow-400" overflow-y-auto>{avg}</span>
        </p>
      )}
    </div>
    </>
  );
}
