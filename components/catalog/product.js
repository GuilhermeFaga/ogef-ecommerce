import styles from "/styles/Product.module.css";

export default function Product({ product }) {
  return (
    <div className={styles.container}>
      <a href={`roupas/${product.id}`}>
        <img src={product.ProductImage[0].https} className={styles.image} />
      </a>
      <div className={styles.bottom}>
        <span className={styles.price}>
          R${product.price.replace(/\..+/, "")}
        </span>
        {!!product.colors.length && <Colors colors={product.colors} />}
      </div>
    </div>
  );
}

function Colors({ colors }) {
  return (
    <div className={styles.colorsDiv}>
      {colors.map((color) => (
        <button key={color.color}>
          <div
            className={styles.color}
            style={{ backgroundColor: color.color }}
          ></div>
        </button>
      ))}
    </div>
  );
}
