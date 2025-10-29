import ServiceCard from "../components/ServiceCard";

export default function ServicesPage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Browse Services</h2>

      <div className="grid grid-cols-4 gap-6">
        <ServiceCard name="Laundry Express" price={150} category="Laundry" />
        <ServiceCard name="Print Hub" price={20} category="Printing" />
        <ServiceCard name="Campus Bites" price={200} category="Food" />
        <ServiceCard name="Barber Pro" price={350} category="Salon" />
      </div>
    </div>
  );
}
