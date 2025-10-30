import BrowseServices from "../services/BrowseServices";

export default function Services() {
  // Reuse your existing BrowseServices page, but inside dashboard frame.
  return (
    <div className="max-w-[1200px]">
      <BrowseServices />
    </div>
  );
}
