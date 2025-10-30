// src/services/serviceApi.js (append if missing)
export async function fetchMockBookings() {
  // simulate network
  await new Promise((r) => setTimeout(r, 350));
  return [
    {
      id: 1,
      title: "Express Laundry Service",
      date: "2025-10-16 10:00",
      location: "204B",
      price: 8.99,
      status: "confirmed",
    },
    {
      id: 2,
      title: "Math & Science Tutoring",
      date: "2025-10-17 14:00",
      location: "Library 3F",
      price: 25.0,
      status: "pending",
    },
    {
      id: 3,
      title: "24/7 Printing & Copy",
      date: "2025-10-15 09:00",
      location: "N/A",
      price: 5.5,
      status: "completed",
    },
  ];
}
