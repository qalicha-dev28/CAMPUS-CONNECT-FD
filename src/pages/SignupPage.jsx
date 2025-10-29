export default function SignupPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-darklight p-8 rounded w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>

        <input placeholder="Email" className="w-full bg-dark p-2 rounded mb-3" />
        <input placeholder="Password" type="password" className="w-full bg-dark p-2 rounded mb-3" />

        <select className="w-full bg-dark p-2 rounded mb-3">
          <option value="student">Student</option>
          <option value="vendor">Vendor</option>
        </select>

        <button className="w-full bg-neon text-black p-2 rounded font-bold">
          CREATE
        </button>

        <p className="text-sm mt-3 text-gray-500">
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}
