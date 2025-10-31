// src/App.jsx
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import StudentLayout from "./pages/student/StudentLayout";
import Overview from "./pages/student/Overview";
import Services from "./pages/student/Services";
import Bookings from "./pages/student/Bookings";
import ServiceDetail from "./pages/student/ServiceDetail";
import LeaveReview from "./pages/student/LeaveReview";
import MyProfile from "./pages/student/MyProfile";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route element={<ProtectedRoute role="student" />}>
        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<Overview />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<ServiceDetail />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="profile" element={<MyProfile />} />
          <Route path="review/:serviceName" element={<LeaveReview />} />
        </Route>
      </Route>
    </Routes>
  );
}
