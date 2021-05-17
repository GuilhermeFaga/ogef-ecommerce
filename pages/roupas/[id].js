export default function Product({ product }) {
  return (
    <main>
      <h2>{product.name}</h2>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const products_res = await fetch(
    `https://ogef.com.br/web_api/products?id=${params.id}`
  );
  const products_json = await products_res.json();

  return {
    props: {
      product: products_json.Products[0].Product,
    },
    revalidate: 60,
  };
}

export async function getStaticPaths() {
  const products_res = await fetch("https://ogef.com.br/web_api/products");

  const products_json = await products_res.json();

  const paths = products_json.Products.map((product) => ({
    params: { id: product.Product.id },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
