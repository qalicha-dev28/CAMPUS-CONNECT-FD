// ✅ Mock reviews storage
let mockReviews = [];

// ✅ Store a new review
export async function createMockReview(service, rating, comment) {
  const newReview = {
    id: mockReviews.length + 1,
    service,
    rating,
    comment,
    date: new Date().toISOString().split("T")[0],
  };

  mockReviews.push(newReview);
  return newReview;
}

// ✅ Get reviews for a specific service
export async function fetchReviewsByService(service) {
  return mockReviews.filter((r) => r.service === service);
}
