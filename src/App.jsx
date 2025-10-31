// src/App.jsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import ProtectedRoute from "./components/ProtectedRoute";

// Student pages
import StudentLayout from "./pages/student/StudentLayout";
import Overview from "./pages/student/Overview";
import Services from "./pages/student/Services";
import ServiceDetail from "./pages/student/ServiceDetail";
import Bookings from "./pages/student/Bookings";
import Profile from "./pages/student/Profile";
import LeaveReview from "./pages/student/LeaveReview";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected Student Dashboard */}
      <Route element={<ProtectedRoute role="student" />}>
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<Overview />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="review/:service" element={<LeaveReview />} />
        </Route>
      </Route>
    </Routes>
  );
}
