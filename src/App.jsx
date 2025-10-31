// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import StudentLayout from "./layouts/StudentLayout";

// Pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

// Student pages
import Overview from "./pages/student/Overview";
import Services from "./pages/student/Services";
import Bookings from "./pages/student/Bookings";
import Profile from "./pages/student/Profile";
import ServiceDetail from "./pages/student/ServiceDetail";
import LeaveReview from "./pages/student/LeaveReview";

// Auth
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* Protected student routes */}
      <Route element={<ProtectedRoute role="student" />}>
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<Overview />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="profile" element={<Profile />} />

          {/* ✅ Leave Review Route */}
          <Route path="review/:serviceName" element={<LeaveReview />} />
        </Route>
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
