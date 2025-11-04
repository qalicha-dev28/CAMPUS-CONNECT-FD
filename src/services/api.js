const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const token = localStorage.getItem("cc_token");
  const headers = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...(options.headers || {})
  };

  const res = await fetch(`${BASE_URL}${path}`, { ...options, headers });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `HTTP ${res.status}`);
  }
  const contentType = res.headers.get("content-type") || "";
  return contentType.includes("application/json") ? res.json() : res.text();
}

export const api = {
  // GET /bookings?status=&page=&limit=
  async getBookings({ status = "", page = 1, limit = 10 } = {}) {
    if (!BASE_URL) {
      // Fallback MOCK when no backend URL configured
      return {
        data: [
          {
            id: 1,
            serviceName: "Express Laundry Service",
            date: "2025-10-16T10:00:00Z",
            location: "204B",
            price: 8.99,
            status: "confirmed",
          },
          {
            id: 2,
            serviceName: "Math & Science Tutoring",
            date: "2025-10-17T14:00:00Z",
            location: "Library 3F",
            price: 25.0,
            status: "pending",
          },
          {
            id: 3,
            serviceName: "24/7 Printing & Copy",
            date: "2025-10-15T09:00:00Z",
            location: "N/A",
            price: 5.5,
            status: "completed",
          },
        ],
        page, limit, total: 3
      };
    }
    const qs = new URLSearchParams({ page, limit, ...(status ? { status } : {}) });
    return request(`/bookings?${qs.toString()}`);
  },
};
