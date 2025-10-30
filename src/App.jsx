import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BrowseServices from "./pages/services/BrowseServices";
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes>

        {/* ✅ Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/services" element={<BrowseServices />} />

        {/* ✅ Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allow={["student", "vendor"]}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </AuthProvider>
  );
}

export default App;
