// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Load user from localStorage (persist B)
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved
      ? JSON.parse(saved)
      : {
          fullName: "John Foe",
          email: "student@campus.ac",
          role: "Vendor",
        };
  });

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

