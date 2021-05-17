import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <button>
          <Image src="/icons/menu.svg" alt="Menu" width={24} height={24} />
        </button>
      </div>
      <div className={styles.logoContainer}>
        <h1>
          <a href="/">
            <Image
              src="https://images.tcdn.com.br/img/img_prod/930272/1612322796_ogef180x180.png"
              alt="OGEF Logo"
              width={100}
              height={100}
            />
          </a>
        </h1>
      </div>
      <div>
        <button className={styles.button}>
          <Image src="/icons/user.svg" alt="Carrinho" width={32} height={32} />
        </button>
        <button className={styles.button}>
          <Image src="/icons/cart.svg" alt="Carrinho" width={32} height={32} />
        </button>
      </div>
    </header>
  );
}
