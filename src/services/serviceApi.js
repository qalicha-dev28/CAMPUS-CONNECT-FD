// src/services/serviceApi.js

/** Mock services list - stored in memory for CRUD operations */
let mockServices = [
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
    description: "Expert tutors available for academic support."
  },
  {
    id: 4,
    name: "Campus Meal Plan",
    vendorName: "Campus Dining",
    rating: 4.5,
    reviews: 2003,
    price: "$15/day",
    category: "Food",
    description: "Healthy meals delivered anywhere on campus."
  },
  {
    id: 5,
    name: "Eco Bike Rental",
    vendorName: "GreenRide",
    rating: 4.4,
    reviews: 67,
    price: "$5/day",
    category: "Transport",
    description: "Affordable environmentally-friendly bike rentals."
  },
];

export async function fetchServices() {
  return [...mockServices];
}

// CRUD Operations for Services
export async function createService(serviceData) {
  const newService = {
    id: Math.max(...mockServices.map(s => s.id)) + 1,
    ...serviceData,
    rating: 0,
    reviews: 0,
  };
  mockServices.push(newService);
  return newService;
}

export async function updateService(id, serviceData) {
  const index = mockServices.findIndex(s => s.id === id);
  if (index !== -1) {
    mockServices[index] = { ...mockServices[index], ...serviceData };
    return mockServices[index];
  }
  throw new Error('Service not found');
}

export async function deleteService(id) {
  const index = mockServices.findIndex(s => s.id === id);
  if (index !== -1) {
    const deletedService = mockServices.splice(index, 1)[0];
    return deletedService;
  }
  throw new Error('Service not found');
}

/** Mock bookings - stored in memory for CRUD operations */
let mockBookings = [
  {
    id: 1,
    service: "Express Laundry Service",
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
];

export async function fetchMockBookings() {
  return [...mockBookings];
}

// CRUD Operations for Bookings
export async function createBooking(bookingData) {
  const newBooking = {
    id: Math.max(...mockBookings.map(b => b.id)) + 1,
    ...bookingData,
  };
  mockBookings.push(newBooking);
  return newBooking;
}

export async function updateBooking(id, bookingData) {
  const index = mockBookings.findIndex(b => b.id === id);
  if (index !== -1) {
    mockBookings[index] = { ...mockBookings[index], ...bookingData };
    return mockBookings[index];
  }
  throw new Error('Booking not found');
}

export async function deleteBooking(id) {
  const index = mockBookings.findIndex(b => b.id === id);
  if (index !== -1) {
    const deletedBooking = mockBookings.splice(index, 1)[0];
    return deletedBooking;
  }
  throw new Error('Booking not found');
}

// ✅ Stored reviews (mock)
let mockReviews = [];

// ✅ Create review
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

// ✅ Get reviews for a service
export async function fetchReviewsByService(service) {
  return mockReviews.filter((r) => r.service === service);
}

// Mock users list - stored in memory for CRUD operations
let mockUsers = [
  { id: 1, name: "John Doe", email: "john.doe@campus.edu", role: "Student", status: "Active", joinDate: "2024-01-15" },
  { id: 2, name: "Jane Smith", email: "jane.smith@campus.edu", role: "Student", status: "Active", joinDate: "2024-02-20" },
  { id: 3, name: "Mike Johnson", email: "mike.johnson@campus.edu", role: "Student", status: "Inactive", joinDate: "2024-03-10" },
  { id: 4, name: "Sarah Wilson", email: "sarah.wilson@campus.edu", role: "Student", status: "Active", joinDate: "2024-01-05" },
  { id: 5, name: "Admin User", email: "admin@campus.edu", role: "Admin", status: "Active", joinDate: "2023-12-01" },
];

export async function fetchUsers() {
  return [...mockUsers];
}

// CRUD Operations for Users
export async function createUser(userData) {
  const newUser = {
    id: Math.max(...mockUsers.map(u => u.id)) + 1,
    ...userData,
    joinDate: new Date().toISOString().split('T')[0],
  };
  mockUsers.push(newUser);
  return newUser;
}

export async function updateUser(id, userData) {
  const index = mockUsers.findIndex(u => u.id === id);
  if (index !== -1) {
    mockUsers[index] = { ...mockUsers[index], ...userData };
    return mockUsers[index];
  }
  throw new Error('User not found');
}

export async function deleteUser(id) {
  const index = mockUsers.findIndex(u => u.id === id);
  if (index !== -1) {
    const deletedUser = mockUsers.splice(index, 1)[0];
    return deletedUser;
  }
  throw new Error('User not found');
}
