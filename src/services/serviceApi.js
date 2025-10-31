// src/services/serviceApi.js

/** Mock services list */
export async function fetchServices() {
  return [
    {
      id: 1,
      name: "Express Laundry Service",
      vendorName: "QuickWash Campus",
      rating: 4.8,
      reviews: 45,
      price: "$8.99",
      category: "Laundry",
    },
    {
      id: 2,
      name: "24/7 Printing & Copy",
      vendorName: "CampusPrint Solutions",
      rating: 4.6,
      reviews: 78,
      price: "$0.10/page",
      category: "Printing",
    },
    {
      id: 3,
      name: "Math & Science Tutoring",
      vendorName: "TutorHub",
      rating: 4.7,
      reviews: 32,
      price: "$25/hour",
      category: "Tutoring",
    },
    {
      id: 4,
      name: "Campus Meal Plan",
      vendorName: "Campus Dining",
      rating: 4.5,
      reviews: 2003,
      price: "$15/day",
      category: "Food",
    },
    {
      id: 5,
      name: "Eco Bike Rental",
      vendorName: "GreenRide",
      rating: 4.4,
      reviews: 67,
      price: "$5/day",
      category: "Transport",
    },
  ];
}

/** Mock bookings list */
export async function fetchMockBookings() {
  return [
    {
      id: 1,
      service: "Laundry Service",
      vendor: "QuickWash Campus",
      date: "2025-02-03",
      status: "confirmed",
    },
    {
      id: 2,
      service: "24/7 Printing & Copy",
      vendor: "CampusPrint Solutions",
      date: "2025-02-05",
      status: "pending",
    },
    {
      id: 3,
      service: "Math & Science Tutoring",
      vendor: "TutorHub",
      date: "2025-02-07",
      status: "completed",
    },
     {
      id: 1,
      service: "Campus eATS",
      vendor: "Food orders",
      date: "2025-02-03",
      status: "completed",
    },
     {
      id: 1,
      service: "Eco Bike Rental",
      vendor: "Transport",
      date: "2025-02-03",
      status: "confirmed",
    },
  ];
}
