import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, setUser } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const role = "Student";

  const save = (e) => {
    e.preventDefault();
    // Persist locally (mock). When backend is ready, call API then setUser with server response.
    const updated = { ...user, name, email, role: "student" };
    localStorage.setItem("user", JSON.stringify(updated));
    setUser(updated);
  };

  return (
    <div className="max-w-2xl">
      <div className="rounded-xl border border-gray-800/80 bg-[#111111]">
        <div className="px-5 py-4 border-b border-gray-800/80">
          <h2 className="text-[18px] font-semibold">My Profile</h2>
          <p className="text-[12.5px] text-gray-500">Manage your account information</p>
        </div>

        <form onSubmit={save} className="p-5 space-y-4">
          <Field label="Full Name">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md bg-[#0F0F0F] border border-gray-800/80 px-3 py-2.5 text-[13.5px] outline-none focus:border-gray-600"
              placeholder="john doe"
            />
          </Field>

          <Field label="Email Address">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md bg-[#0F0F0F] border border-gray-800/80 px-3 py-2.5 text-[13.5px] outline-none focus:border-gray-600"
              placeholder="student@campus.edu"
            />
          </Field>

          <Field label="Role">
            <div className="text-[13.5px] text-gray-300">{role}</div>
          </Field>

          <button
            type="submit"
            className="w-full rounded-md bg-[#b8ff23] text-black font-semibold py-[10px] text-[13.5px] hover:shadow-[0_16px_36px_-12px_rgba(184,255,35,0.65)] transition-all"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="text-[12.5px] text-gray-400 mb-1">{label}</div>
      {children}
    </label>
  );
}
