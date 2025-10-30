// Temporary mock API since backend isn't connected yet
// You can replace these with real fetch calls later.

export async function fetchServices() {
  // simulate network delay
  await new Promise((r) => setTimeout(r, 300));

  return [
    {
      id: 1,
      name: "Express Laundry Service",
      description: "Quick pickup & fold service",
      price: 8.99,
      rating: 4.7,
      category: "Laundry",
    },
    {
      id: 2,
      name: "24/7 Printing & Copy",
      description: "Copy, scanning, document binding",
      price: 5.5,
      rating: 4.4,
      category: "Printing",
    },
    {
      id: 3,
      name: "Math & Science Tutoring",
      description: "Expert academic support",
      price: 25.0,
      rating: 4.9,
      category: "Tutoring",
    },
  ];
}
