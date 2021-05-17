import { Drawer, Text, Loader, Image, Button } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "../../redux/uiReducer";
import styles from "../../styles/CartProduct.module.css";
import useSWR from "swr";

export default function Cart() {
  const cartOpen = useSelector((state) => state.ui.cart.open);
  const dispatch = useDispatch();

  return (
    <Drawer
      opened={cartOpen}
      onClose={() => dispatch(closeCart())}
      padding="md"
      size="xl"
      position="right"
      shadow="xl"
      zIndex={1000}
    >
      <Text align="center" weight={700} size="lg">
        CARRINHO
      </Text>
      <CartContent />
    </Drawer>
  );
}

function CartContent() {
  const visitorId = useSelector((state) => state.user.visitorId);
  const { cart, isLoading, isError } = useCart(visitorId);

  console.log("visitorId", visitorId);
  console.log("cart", cart);

  if (isLoading) return <Loader color="yellow" />;

  if (!cart) return <Text>Carrinho Vazio</Text>;

  return (
    <div className={styles.container}>
      {cart.Products.map((product) => (
        <CartProduct product={product} />
      ))}
      <div className={styles.footer}>
        <Button size="xl" color="pink" fullWidth>
          FINALIZAR
        </Button>
      </div>
    </div>
  );
}

function CartProduct({ product }) {
  const variants = getVariants(product);

  return (
    <div className={styles.productContainer}>
      <div>
        <Image
          radius="sm"
          src={product.ProductImage[0].thumbs["180"].https}
          width={80}
          height={80}
        />
      </div>
      <div className={styles.textContainer}>
        <Text size="sm" weight={500}>
          {product.name.replace(/ \(.+/, "")}
        </Text>
        <Text weight={700}>
          {variants.size ? variants.size : ""}
          {variants.color ? " / " + variants.color : ""}
        </Text>
        <Text weight={500}>
          R${product.price.replace(/\..+/, "")}{" "}
          {product.quantity > 1
            ? `(R$${product.sub_total.replace(/\..+/, "")})`
            : ""}
        </Text>
      </div>
    </div>
  );
}

function getVariants(product) {
  var name = product.name;

  const variants = {
    color: null,
    size: null,
  };

  name = name.replace(/<strong>|<\/strong>|<br \/>|\(.+\)/g, "");
  if (/Cor (.+)/.test(name)) {
    variants.color = name.match(/Cor (.+)/)[1];
    name = name.replace(/Cor (.+)/, "");
  }
  if (/Tamanho (.+)/.test(name)) variants.size = name.match(/Tamanho (.+)/)[1];

  return variants;
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useCart(session_id) {
  if (!session_id) return { cart: {}, isLoading: true, isError: false };

  const { data, error } = useSWR(
    `/api/cart/get?session_id=${session_id}`,
    fetcher
  );

  return {
    cart: data,
    isLoading: !error && !data,
    isError: error,
  };
}
