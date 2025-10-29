export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-darklight p-8 rounded w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Welcome Back</h2>

        <input placeholder="Email" className="w-full bg-dark p-2 rounded mb-3" />
        <input placeholder="Password" type="password" className="w-full bg-dark p-2 rounded mb-3" />

        <button className="w-full bg-neon text-black p-2 rounded font-bold">
          LOGIN
        </button>

        <p className="text-sm mt-3 text-gray-500">
          Don't have an account? Signup
        </p>
      </div>
    </div>
  );
}
