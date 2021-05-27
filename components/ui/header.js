import styles from "../../styles/Header.module.css";
import Image from "next/image";
import { switchCart } from "../../redux/uiReducer";
import { useDispatch } from "react-redux";
import { HiOutlineShoppingBag, HiMenuAlt2 } from "react-icons/hi";
import { ActionIcon } from "@mantine/core";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <div>
        <ActionIcon variant="transparent" size="md">
          <HiMenuAlt2 className={styles.icon} />
        </ActionIcon>
      </div>
      <div className={styles.logoContainer}>
        <h1>
          <a href="/">
            <Image
              src="https://images.tcdn.com.br/img/img_prod/930272/1612322796_ogef180x180.png"
              alt="OGEF Logo"
              width={66}
              height={66}
            />
          </a>
        </h1>
      </div>
      <div>
        <ActionIcon
          variant="transparent"
          size="md"
          onClick={() => dispatch(switchCart())}
        >
          <HiOutlineShoppingBag className={styles.icon} />
        </ActionIcon>
        {/* <button
          className={styles.button}
          onClick={() => dispatch(switchCart())}
        >
          <Image src="/icons/cart.svg" alt="Carrinho" width={32} height={32} />
        </button> */}
      </div>
    </header>
  );
}
