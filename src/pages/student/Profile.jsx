import BackButton from "../components/BackButton";

export default function Profile() {
  return (
    <>
      <BackButton className="mb-4" />

      <div className="text-white">
        <h2 className="text-xl font-bold mb-6">My Profile</h2>

        <div className="bg-[#151515] border border-gray-800 rounded-xl p-6">
          <p className="text-gray-300">
            Profile editing coming soon…
          </p>
        </div>
      </div>
    </>
  );
}
