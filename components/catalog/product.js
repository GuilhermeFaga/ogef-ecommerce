import { Image } from "@mantine/core";
import { useState } from "react";
import styles from "/styles/Product.module.css";

export default function Product({ product }) {
  const [image, setImage] = useState(product?.ProductImage?.[0].https);

  return (
    <div className={styles.container}>
      <a href={`roupas/${product.id}`}>
        <Image
          className={styles.image}
          src={image}
          placeholder={
            <Image
              className={styles.image}
              src={product.ProductImage?.[0].thumbs["180"].https}
            />
          }
        />
        {/* <img src={product.ProductImage[0].https} /> */}
      </a>
      <div className={styles.bottom}>
        <span className={styles.price}>
          R${product.price.replace(/\..+/, "")}
        </span>
        {!!product?.colors?.length && (
          <Colors setState={setImage} image={image} colors={product.colors} />
        )}
      </div>
    </div>
  );
}

function Colors({ colors, image, setState }) {
  return (
    <div className={styles.colorsDiv}>
      {colors.map((color) => (
        <button
          key={color.color}
          className={styles.bcolor}
          onClick={() => setState(color.image)}
        >
          <div
            className={
              styles.color +
              " " +
              (image === color.image ? styles.colorSelected : "")
            }
            style={{ backgroundColor: color.color }}
          ></div>
        </button>
      ))}
    </div>
  );
}
