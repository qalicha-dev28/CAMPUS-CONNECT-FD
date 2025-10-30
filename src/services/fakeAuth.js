export function registerUser({ name, email, password, role }) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const existing = users.find((u) => u.email === email);
  if (existing) throw new Error("User already exists");

  const newUser = { id: Date.now(), name, email, password, role };
  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  // Auto-login
  localStorage.setItem("authUser", JSON.stringify(newUser));
}

export function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) throw new Error("Invalid credentials");

  localStorage.setItem("authUser", JSON.stringify(user));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("authUser"));
}

export function logoutUser() {
  localStorage.removeItem("authUser");
}
