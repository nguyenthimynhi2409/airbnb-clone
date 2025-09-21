import { Search, Globe, Menu, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b shadow-sm sticky top-0 bg-white dark:bg-gray-900 z-50">
      <h1 className="text-red-500 font-bold text-2xl cursor-pointer">airbnb</h1>

      <div className="flex items-center gap-2 border rounded-full px-4 py-2 shadow-sm hover:shadow-md transition cursor-pointer dark:border-gray-600">
        <span className="text-sm font-medium">Anywhere</span>
        <span className="text-gray-400">|</span>
        <span className="text-sm font-medium">Any week</span>
        <span className="text-gray-400">|</span>
        <span className="text-gray-500 dark:text-gray-400">Add guests</span>
        <button className="bg-red-500 text-white rounded-full p-2">
          <Search size={14} />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium cursor-pointer">Airbnb your home</span>
        <Globe className="cursor-pointer" />
        <ThemeToggle />
        <div className="flex items-center gap-2 border px-3 py-2 rounded-full cursor-pointer hover:shadow-md transition dark:border-gray-600">
          <Menu />
          <User className="bg-gray-500 text-white rounded-full p-1 w-6 h-6" />
        </div>
      </div>
    </nav>
  );
}
