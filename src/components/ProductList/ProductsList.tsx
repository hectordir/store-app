import { Producto, ProductoResponse } from "../../interfaces/productos";
import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "./ProductsList.module.css";
import { Product } from "../Product/Product";

export function ProductsList() {
  const [datos, setDatos] = useState<Producto[]>([]);

  async function getData() {
    try {
      const res = await axios.get<ProductoResponse>(
        "https://dummyjson.com/products"
      );
      const productos = res.data.products;
      setDatos(productos);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={Styles.productListContainer}>
      {datos.map((producto: Producto) => (
        <Product key={producto.id} data={producto} />
      ))}
    </div>
  );
}
