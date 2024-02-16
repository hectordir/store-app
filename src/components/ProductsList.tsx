import Navbar from "./Navbar";
import { Producto } from "../interfaces/productos";
import axios from "axios";
import { useEffect, useState } from "react";
import Styles from "./ProductsList.module.css";

export default function ProductsList() {
  const [datos, setDatos] = useState<Producto[]>([]);

  async function getData() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res.data;
      const productos = data.products;
      setDatos(productos);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  function descuento(price: number, discountPercentage: number) {
    const descuento = price * (discountPercentage / 100);
    return price - descuento;
  }

  return (
    <div className="bg-dark file">
      <Navbar />
      <div className={Styles.productListContainer}>
        {datos.map((producto: Producto) => (
          <div key={producto.id} className="cartas card">
            <a href="/">
              <img src={producto.thumbnail} alt="product" className="imagen" />
            </a>
            <a href="/">
              <p className="category">{producto.category}</p>
            </a>
            <a href="/">
              <h2 className="title">{producto.title}</h2>
            </a>
            <div>
              <h4 className="sub">{producto.brand}</h4>
            </div>

            <div className="body">
              <del style={{ color: "red" }}>Precio : {producto.price}</del>
              <h5>
                Precio :
                {Math.floor(
                  descuento(producto.price, producto.discountPercentage)
                ).toString()}
              </h5>
            </div>
            <button className="boton">Añadir</button>
          </div>
        ))}
      </div>
    </div>
  );
}
