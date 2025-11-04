import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5004';

export const api = {
  // Services
  async getServices({ category = '', search = '', page = 1, limit = 10 } = {}) {
    console.log('api.getServices called with params:', { category, search, page, limit });
    const params = new URLSearchParams();
    if (category) params.append('category', category);
    if (search) params.append('search', search);
    params.append('page', page);
    params.append('limit', limit);

    const url = `${BASE_URL}/services?${params}`;
    console.log('Making request to:', url);
    const response = await axios.get(url);
    console.log('API response status:', response.status);
    console.log('API response data:', response.data);
    return response.data;
  },

  async getService(id) {
    const response = await axios.get(`${BASE_URL}/services/${id}`);
    return response.data;
  },

  async createService(serviceData) {
    console.log('api.createService called with data:', serviceData);
    const url = `${BASE_URL}/services`;
    console.log('Making POST request to:', url);
    const response = await axios.post(url, serviceData);
    console.log('Create service response status:', response.status);
    console.log('Create service response data:', response.data);
    return response.data;
  },

  async updateService(id, serviceData) {
    const response = await axios.put(`${BASE_URL}/services/${id}`, serviceData);
    return response.data;
  },

  async deleteService(id) {
    const response = await axios.delete(`${BASE_URL}/services/${id}`);
    return response.data;
  },

  // Bookings
  async getBookings({ status = '', page = 1, limit = 10 } = {}) {
    const params = new URLSearchParams();
    if (status) params.append('status', status);
    params.append('page', page);
    params.append('limit', limit);

    const response = await axios.get(`${BASE_URL}/bookings?${params}`);
    return response.data;
  },

  async createBooking(bookingData) {
    const response = await axios.post(`${BASE_URL}/bookings`, bookingData);
    return response.data;
  },

  async updateBooking(id, bookingData) {
    const response = await axios.put(`${BASE_URL}/bookings/${id}`, bookingData);
    return response.data;
  },

  async cancelBooking(id) {
    const response = await axios.delete(`${BASE_URL}/bookings/${id}`);
    return response.data;
  },

  // Reviews
  async getReviews(serviceId) {
    const response = await axios.get(`${BASE_URL}/reviews?serviceId=${serviceId}`);
    return response.data;
  },

  async createReview(reviewData) {
    const response = await axios.post(`${BASE_URL}/reviews`, reviewData);
    return response.data;
  },

  // Posts (Social Features)
  async getPosts({ page = 1, limit = 10 } = {}) {
    const response = await axios.get(`${BASE_URL}/posts?page=${page}&limit=${limit}`);
    return response.data;
  },

  async createPost(postData) {
    const response = await axios.post(`${BASE_URL}/posts`, postData);
    return response.data;
  },

  async likePost(postId) {
    const response = await axios.post(`${BASE_URL}/posts/${postId}/like`);
    return response.data;
  },

  async commentOnPost(postId, commentData) {
    const response = await axios.post(`${BASE_URL}/posts/${postId}/comments`, commentData);
    return response.data;
  },

  // Admin endpoints
  async getUsers({ page = 1, limit = 10 } = {}) {
    const response = await axios.get(`${BASE_URL}/admin/users?page=${page}&limit=${limit}`);
    return response.data;
  },

  async updateUser(id, userData) {
    const response = await axios.put(`${BASE_URL}/admin/users/${id}`, userData);
    return response.data;
  },

  async getAnalytics() {
    const response = await axios.get(`${BASE_URL}/admin/analytics`);
    return response.data;
  },
};
