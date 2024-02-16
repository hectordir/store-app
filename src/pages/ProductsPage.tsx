import { Navbar } from "../components/Navbar";
import { ProductsList } from "../components/ProductList/ProductsList";

export function ProductsPage() {
  return (
    <div className="bg-dark file">
      <Navbar />
      <ProductsList />
    </div>
  );
}
