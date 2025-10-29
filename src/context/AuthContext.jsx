import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const t = localStorage.getItem("cc_token");
    const u = localStorage.getItem("cc_user");
    if (t && u) {
      setToken(t);
      setUser(JSON.parse(u));
    }
  }, []);

  async function login(email, password) {
    // MOCK LOGIN — replace when backend is ready
    const fakeUser = { id: 1, email, role: "student", name: "Test Student" };
    const fakeToken = "mock.jwt.token";

    setUser(fakeUser);
    setToken(fakeToken);
    localStorage.setItem("cc_user", JSON.stringify(fakeUser));
    localStorage.setItem("cc_token", fakeToken);

    if (fakeUser.role === "student") navigate("/dashboard/student");
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem("cc_user");
    localStorage.removeItem("cc_token");
    navigate("/");
  }

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
