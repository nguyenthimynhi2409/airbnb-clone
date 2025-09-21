import Navbar from "./components/Navbar";
import FilterBar from "./components/FilterBar";
import ListingGrid from "./components/ListingGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <FilterBar />
      <ListingGrid />
      <Footer />
    </div>
  );
}
