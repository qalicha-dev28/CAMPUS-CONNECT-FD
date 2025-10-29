export default function StudentDashboard() {
  const bookings = [
    {
      id: 1,
      service: "Express Laundry",
      vendor: "CleanPro Laundry",
      date: "2025-01-21",
      status: "completed",
    },
    {
      id: 2,
      service: "Math & Science Tutoring",
      vendor: "Campus Tutors",
      date: "2025-01-24",
      status: "pending",
    },
    {
      id: 3,
      service: "24/7 Printing & Copy",
      vendor: "CopyPoint",
      date: "2025-01-25",
      status: "confirmed",
    },
  ];

  const statusColor = {
    pending: "bg-yellow-500",
    confirmed: "bg-blue-500",
    completed: "bg-green-500",
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-darklight h-screen p-6 border-r border-gray-800">
        <h2 className="text-xl font-bold mb-8">Student Panel</h2>
        <ul className="flex flex-col gap-4 text-gray-400">
          <li className="hover:text-neon cursor-pointer">My Bookings</li>
          <li className="hover:text-neon cursor-pointer">My Reviews</li>
          <li className="hover:text-neon cursor-pointer">Profile</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

        <div className="flex flex-col gap-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="bg-darklight p-4 rounded border border-gray-800 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{booking.service}</h3>
                <p className="text-gray-400 text-sm">{booking.vendor}</p>
                <p className="text-gray-500 text-xs">{booking.date}</p>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`text-xs text-black px-3 py-1 rounded font-bold ${statusColor[booking.status]}`}
                >
                  {booking.status}
                </span>

                <button className="bg-neon text-black px-4 py-1 rounded font-semibold hover:opacity-80">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
