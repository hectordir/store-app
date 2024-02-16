import ProductsList from "./components/ProductsList";

interface Props {
  title?: string;
  datos?: string;
}
export function App({ title }: Props) {
  return (
    <div>
      <ProductsList />
    </div>
  );
}
