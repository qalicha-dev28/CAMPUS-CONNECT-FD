// src/services/serviceApi.js

export async function fetchServices() {
  return [
    {
      id: 1,
      name: "Laundry Service",
      vendorName: "CleanWave Laundry",
      rating: 4.5,
      reviews: 34,
      price: "$5 per kg",
      category: "Laundry",
    },
    {
      id: 2,
      name: "Printing Service",
      vendorName: "SwiftPrint",
      rating: 4.2,
      reviews: 17,
      price: "$0.20 per page",
      category: "Printing",
    },
    {
      id: 3,
      name: "Tutoring",
      vendorName: "TutorHub",
      rating: 4.8,
      reviews: 41,
      price: "$10/hr",
      category: "Tutoring",
    },
  ];
}

export async function fetchMockBookings() {
  return [
    {
      id: 1,
      service: "Laundry Service",
      vendor: "CleanWave Laundry",
      date: "2025-02-03",
      status: "confirmed",
    },
    {
      id: 2,
      service: "Printing Service",
      vendor: "SwiftPrint",
      date: "2025-02-05",
      status: "pending",
    },
    {
      id: 3,
      service: "Tutoring Session",
      vendor: "TutorHub",
      date: "2025-02-07",
      status: "completed",
    },
  ];
}
