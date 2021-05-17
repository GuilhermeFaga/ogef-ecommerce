import styles from "../../styles/Header.module.css";
import Image from "next/image";
import { switchCart } from "../../redux/uiReducer";
import { useDispatch } from "react-redux";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div>
        <button>
          <Image src="/icons/menu.svg" alt="Menu" width={32} height={32} />
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
        <button
          className={styles.button}
          onClick={() => dispatch(switchCart())}
        >
          <Image src="/icons/cart.svg" alt="Carrinho" width={32} height={32} />
        </button>
      </div>
    </header>
  );
}
