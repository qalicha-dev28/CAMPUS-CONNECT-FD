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
      description: "Fast turnaround, pickup + drop-off on campus."
    },
    {
      id: 2,
      name: "24/7 Printing & Copy",
      vendorName: "CampusPrint Solutions",
      rating: 4.6,
      reviews: 78,
      price: "$0.10/page",
      category: "Printing",
      description: "Affordable printing, scanning, and photocopying services."
    },
    {
      id: 3,
      name: "Math & Science Tutoring",
      vendorName: "TutorHub",
      rating: 4.7,
      reviews: 32,
      price: "$25/hour",
      category: "Tutoring",
      description: "Expert tutors available for academic support across multiple subjects."
    },
    {
      id: 4,
      name: "Campus Meal Plan",
      vendorName: "Campus Dining",
      rating: 4.5,
      reviews: 2003,
      price: "$15/day",
      category: "Food",
      description: "Healthy meals delivered anywhere on campus, with student discounts."
    },
    {
      id: 5,
      name: "Eco Bike Rental",
      vendorName: "GreenRide",
      rating: 4.4,
      reviews: 67,
      price: "$5/day",
      category: "Transport",
      description: "Affordable environmentally-friendly bike rentals for fast campus mobility."
    }
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
      id: 4,
      service: "Campus Meal Plan",
      vendor: "Campus Dining",
      date: "2025-02-03",
      status: "completed",
    },
    {
      id: 5,
      service: "Eco Bike Rental",
      vendor: "GreenRide",
      date: "2025-02-03",
      status: "confirmed",
    },
  ];
}


export {};
