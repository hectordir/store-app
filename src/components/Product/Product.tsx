import { Producto } from "../../interfaces/productos";
import styles from "./Product.module.css";
interface ProductProps {
  data: Producto;
}
export const Product = ({ data }: ProductProps) => {
  function descuento(price: number, discountPercentage: number) {
    const descuento = price * (discountPercentage / 100);
    return Math.floor(price - descuento).toString();
  }

  return (
    <div key={data.id} className={`${styles.cartas} card`}>
      <a href="/">
        <img
          src={data.thumbnail}
          alt={`${data.description}`}
          className={styles.imagen}
        />
      </a>
      <a href="/">
        <p className={styles.category}>{data.category}</p>
      </a>
      <a href="/">
        <h2 className={styles.title}>{data.title}</h2>
      </a>
      <div>
        <h4 className={styles.sub}>{data.brand}</h4>
      </div>

      <div className={styles.body}>
        <del style={{ color: "red" }}>Precio : {data.price}</del>
        <h5>Precio :{descuento(data.price, data.discountPercentage)}</h5>
      </div>
      <button className={styles.boton}>Añadir</button>
    </div>
  );
};
