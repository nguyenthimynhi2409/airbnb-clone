export default function ListingCard({ title, price, img }) {
  return (
    <div className="cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
      <img src={img} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="font-medium text-lg">{title}</h3>
        <p className="text-gray-500">{price}</p>
      </div>
    </div>
  );
}
