import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BrowseServices from "./pages/services/BrowseServices";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import VendorDashboard from "./pages/dashboard/VendorDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/services" element={<BrowseServices />} />

      <Route
        path="/dashboard/student"
        element={
          <ProtectedRoute allow={["student"]}>
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard/vendor"
        element={
          <ProtectedRoute allow={["vendor"]}>
            <VendorDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
