// src/services/serviceApi.js
import { api } from './api';

/** Mock services list - stored in memory for CRUD operations */
let mockServices = [
  {
    id: 1,
    name: "Express Laundry Service",
    vendorName: "QuickWash Campus",
    rating: 4.8,
    reviews: 45,
    price: "KSh 2,500",
    category: "Laundry",
    description: "Fast turnaround, pickup + drop-off on campus."
  },
  {
    id: 2,
    name: "24/7 Printing & Copy",
    vendorName: "CampusPrint Solutions",
    rating: 4.6,
    reviews: 78,
    price: "KSh 30/page",
    category: "Printing",
    description: "Affordable printing, scanning, and photocopying services."
  },
  {
    id: 3,
    name: "Math & Science Tutoring",
    vendorName: "TutorHub",
    rating: 4.7,
    reviews: 32,
    price: "KSh 7,000/hour",
    category: "Tutoring",
    description: "Expert tutors available for academic support."
  },
  {
    id: 4,
    name: "Campus Meal Plan",
    vendorName: "Campus Dining",
    rating: 4.5,
    reviews: 2003,
    price: "KSh 4,200/day",
    category: "Food",
    description: "Healthy meals delivered anywhere on campus."
  },
  {
    id: 5,
    name: "Eco Bike Rental",
    vendorName: "GreenRide",
    rating: 4.4,
    reviews: 67,
    price: "KSh 1,400/day",
    category: "Transport",
    description: "Affordable environmentally-friendly bike rentals."
  },
  {
    id: 6,
    name: "Campus Gym Membership",
    vendorName: "FitCampus",
    rating: 4.9,
    reviews: 150,
    price: "KSh 5,600/month",
    category: "Fitness",
    description: "Full access to campus gym facilities with personal training options."
  },
];

export async function fetchServices({ category = '', search = '' } = {}) {
  console.log('fetchServices called with params:', { category, search });
  try {
    console.log('Attempting to fetch from backend...');
    const response = await api.getServices({ category, search });
    console.log('Backend response:', response);
    const result = response.data || response;
    console.log('Returning backend data:', result);
    return result;
  } catch (error) {
    console.warn('Backend not available, using mock data:', error.message);
    console.log('Error details:', error);
    // Filter mock data based on parameters
    let filtered = [...mockServices];
    if (category && category !== 'All') {
      filtered = filtered.filter(s => s.category === category);
    }
    if (search) {
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.vendorName.toLowerCase().includes(search.toLowerCase())
      );
    }
    console.log('Returning filtered mock data:', filtered);
    return filtered;
  }
}

// CRUD Operations for Services
export async function createService(serviceData) {
  console.log('createService called with data:', serviceData);
  try {
    console.log('Attempting to create service via backend...');
    const response = await api.createService(serviceData);
    console.log('Backend create response:', response);
    return response.data || response;
  } catch (error) {
    console.warn('Backend create failed, using mock:', error.message);
    console.log('Error details:', error);
    const newService = {
      id: Math.max(...mockServices.map(s => s.id)) + 1,
      ...serviceData,
      rating: 0,
      reviews: 0,
    };
    console.log('Created mock service:', newService);
    mockServices.push(newService);
    return newService;
  }
}

export async function updateService(id, serviceData) {
  console.log('updateService called with id:', id, 'data:', serviceData);
  try {
    console.log('Attempting to update service via backend...');
    const response = await api.updateService(id, serviceData);
    console.log('Backend update response:', response);
    return response.data || response;
  } catch (error) {
    console.warn('Backend update failed, using mock:', error.message);
    console.log('Error details:', error);
    const index = mockServices.findIndex(s => s.id === id);
    if (index !== -1) {
      mockServices[index] = { ...mockServices[index], ...serviceData };
      console.log('Updated mock service:', mockServices[index]);
      return mockServices[index];
    }
    throw new Error('Service not found');
  }
}

export async function deleteService(id) {
  console.log('deleteService called with id:', id);
  try {
    console.log('Attempting to delete service via backend...');
    const response = await api.deleteService(id);
    console.log('Backend delete response:', response);
    return response.data || response;
  } catch (error) {
    console.warn('Backend delete failed, using mock:', error.message);
    console.log('Error details:', error);
    const index = mockServices.findIndex(s => s.id === id);
    if (index !== -1) {
      const deletedService = mockServices.splice(index, 1)[0];
      console.log('Deleted mock service:', deletedService);
      return deletedService;
    }
    throw new Error('Service not found');
  }
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
  try {
    const response = await api.getBookings();
    return response.data || response;
  } catch (error) {
    console.warn('Backend not available, using mock data:', error.message);
    return [...mockBookings];
  }
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
  { id: 5, name: "Admin User", email: "admin@campusconnect.com", role: "Admin", status: "Active", joinDate: "2023-12-01" },
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
