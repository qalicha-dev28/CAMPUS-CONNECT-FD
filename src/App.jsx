// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentLayout from "./layouts/StudentLayout";
import Overview from "./pages/student/Overview";
import Services from "./pages/student/Services";
import ServiceDetail from "./pages/student/ServiceDetail";
import Bookings from "./pages/student/Bookings";
import Profile from "./pages/student/Profile";

function App() {
  return (
    <Routes>

      {/* ✅ Landing page restored */}
      <Route path="/" element={<LandingPage />} />

      {/* Public pages */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected student area */}
      <Route element={<ProtectedRoute role="student" />}>
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<Overview />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
