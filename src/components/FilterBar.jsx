export default function FilterBar() {
  const filters = ["Trending", "Beach", "Cabins", "Luxe", "City", "Countryside"];

  return (
    <div className="flex gap-6 overflow-x-auto px-6 py-4 border-b dark:border-gray-700 bg-white dark:bg-gray-900">
      {filters.map((f) => (
        <span key={f} className="cursor-pointer text-sm font-medium whitespace-nowrap hover:text-red-500">
          {f}
        </span>
      ))}
    </div>
  );
}
