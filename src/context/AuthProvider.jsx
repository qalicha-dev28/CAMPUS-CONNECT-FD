import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { registerUser, loginUser, getCurrentUser, logoutUser } from '../services/fakeAuth';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5004';

const AuthContext = createContext();
export { AuthContext };

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('cc_token'));

  // Setup axios interceptors
  useEffect(() => {
    // Request interceptor
    axios.interceptors.request.use(
      (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
          console.log('Adding auth header to request:', config.url);
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        console.error('API Error:', error.response?.status, error.response?.data || error.message);
        if (error.response?.status === 401) {
          console.log('401 error detected, logging out');
          logout();
        }
        return Promise.reject(error);
      }
    );
  }, [token]);

  // Check for existing token on mount
  useEffect(() => {
    const checkAuth = async () => {
      const storedToken = localStorage.getItem('cc_token');
      if (storedToken) {
        try {
          console.log('Checking auth with stored token');
          const response = await axios.get(`${BASE_URL}/auth/me`);
          setUser(response.data.user);
          setToken(storedToken);
          console.log('Auth check successful');
        } catch (error) {
          console.error('Auth check failed:', error.response || error);
          // Fallback to fake auth if backend fails
          const fakeUser = getCurrentUser();
          if (fakeUser) {
            console.log('Using fake auth fallback:', fakeUser);
            setUser(fakeUser);
          } else {
            localStorage.removeItem('cc_token');
            setToken(null);
          }
        }
      } else {
        // Check fake auth
        const fakeUser = getCurrentUser();
        if (fakeUser) {
          console.log('Using fake auth:', fakeUser);
          setUser(fakeUser);
        }
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    try {
      console.log('Attempting login for:', email);
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });

      const { token: newToken, user: userData } = response.data;
      localStorage.setItem('cc_token', newToken);
      setToken(newToken);
      setUser(userData);
      console.log('Login successful for user:', userData);
      return userData;
    } catch (error) {
      console.error('Login error:', error.response || error);
      // Fallback to fake auth
      try {
        console.log('Trying fake auth fallback');
        loginUser(email, password);
        const fakeUser = getCurrentUser();
        if (fakeUser) {
          console.log('Fake auth successful:', fakeUser);
          setUser(fakeUser);
          return fakeUser;
        }
      } catch (fakeError) {
        console.error('Fake auth also failed:', fakeError);
      }
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, userData);
      const { token: newToken, user: newUser } = response.data;
      localStorage.setItem('cc_token', newToken);
      setToken(newToken);
      setUser(newUser);
      return newUser;
    } catch (error) {
      console.error('Registration error:', error.response || error);
      // Fallback to fake auth
      try {
        console.log('Trying fake auth registration fallback');
        registerUser(userData);
        const fakeUser = getCurrentUser();
        if (fakeUser) {
          console.log('Fake auth registration successful:', fakeUser);
          setUser(fakeUser);
          return fakeUser;
        }
      } catch (fakeError) {
        console.error('Fake auth registration also failed:', fakeError);
      }
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  };

  const logout = () => {
    localStorage.removeItem('cc_token');
    logoutUser(); // Also clear fake auth
    setToken(null);
    setUser(null);
  };

  const updateProfile = async (profileData) => {
    try {
      const response = await axios.put(`${BASE_URL}/auth/me`, profileData);
      setUser(response.data.user);
      return response.data.user;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Profile update failed');
    }
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    updateProfile,
    isAuthenticated: !!user,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
