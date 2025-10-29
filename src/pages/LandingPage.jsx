import { Link } from "react-router-dom";

function PopularCard({ title, subtitle }) {
  return (
    <div className="bg-darklight border border-gray-800 rounded-xl px-5 py-4 w-full sm:w-[300px]">
      <div className="text-[13px] text-gray-400 mb-1">{title}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="bg-dark">
      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 pt-16 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Text */}
        <div>
          <h1 className="text-4xl md:text-[40px] font-extrabold leading-snug">
            Your Campus Services,
            <br /> Just a Click Away
          </h1>

          <p className="mt-4 text-gray-400 max-w-[560px] text-sm md:text-[15px]">
            Discover and book essential campus services instantly—from laundry to
            printing and tutoring. Centralized bookings with seamless updates.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <Link
              to="/signup"
              className="inline-block bg-neon text-black font-semibold rounded px-5 py-2 hover:opacity-90"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="inline-block text-gray-300 hover:text-neon text-sm"
            >
              Browse Services
            </Link>
          </div>
        </div>

        {/* Right: Simple placeholder illustration box (optional) */}
        <div className="hidden md:block">
          <div className="w-full h-[260px] rounded-xl bg-[#1b1b1b] border border-gray-800 flex items-center justify-center">
            {/* Replace with your Figma illustration later */}
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-gray-500" />
              <div className="w-12 h-4 rounded bg-neon" />
              <div className="w-10 h-10 rounded-full bg-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="max-w-6xl mx-auto px-5 pb-24">
        <div className="text-center mb-6">
          <h2 className="text-[18px] font-semibold text-gray-200">
            Popular Services
          </h2>
          <p className="text-[13px] text-gray-500">
            Trending now across campus
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PopularCard title="Laundry" subtitle="Quick pickup & fast service" />
          <PopularCard title="Printing" subtitle="24/7 print and copy" />
          <PopularCard title="Tutoring" subtitle="Expert academic support" />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-5 py-8 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© 2025 CampusConnect. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-neon">About</Link>
            <Link to="/services" className="hover:text-neon">Services</Link>
            <Link to="#" className="hover:text-neon">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
