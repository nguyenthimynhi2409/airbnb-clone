import ListingCard from "./ListingCard";

export default function ListingGrid() {
  const listings = [
    { id: 1, title: "Cozy Beach House", price: "$120/night", img: "https://picsum.photos/400/300?1" },
    { id: 2, title: "Modern Apartment", price: "$90/night", img: "https://picsum.photos/400/300?2" },
    { id: 3, title: "Cabin in the Woods", price: "$150/night", img: "https://picsum.photos/400/300?3" },
    { id: 4, title: "Luxury Villa", price: "$400/night", img: "https://picsum.photos/400/300?4" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {listings.map((l) => (
        <ListingCard key={l.id} {...l} />
      ))}
    </div>
  );
}
