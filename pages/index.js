import React, { useState } from "react";
import Head from "next/head";
import Product from "../components/catalog/product";
import styles from "../styles/Home.module.css";
import { firestore } from "../util/firebase";
import Feature from "../components/ui/feature";

export default function Home({ products, features }) {
  console.log(features);
  return (
    <>
      <Head>
        <title>OGEF</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {features.map((f) => (
          <Feature key={f.link} feature={f} products={products} />
        ))}
        <div className={styles.products}>
          <h3>TODOS OS PRODUTOS</h3>
          <div className={styles.grid}>
            {products.map((product) => (
              <Product key={product.Product.id} product={product.Product} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const products_json = await getProducts();
  const features = await getFeatures();

  return {
    props: {
      features: features,
      products: products_json.Products,
    },
    revalidate: 60,
  };
}

async function getProducts() {
  const products_res = await fetch(
    `${process.env.api_url}products?available=1`
  );
  const products_json = await products_res.json();

  var i = 0;
  for (const product of products_json.Products) {
    const product_variants = product.Product.Variant;
    if (!product_variants.length) continue;

    var colors = [];
    for (const variant of product_variants) {
      const variant_res = await fetch(
        `${process.env.api_url}products/variants?type_2=Cor&id=${variant.id}`
      );
      var variant_json = await variant_res.json();

      if (!variant_json.Variants.length) continue;

      variant_json = variant_json.Variants[0].Variant;

      const color = getColor(variant_json.Sku[1].value);
      const image = variant_json.VariantImage[0].https;

      if (!hasColor(colors, color))
        colors.push({
          color: color,
          image: image,
        });
    }
    products_json.Products[i].Product.colors = colors;
    i += 1;
  }

  return products_json;
}

async function getFeatures() {
  const DOC = firestore().doc("website/home");
  const snapshot = await DOC.get();
  const features = snapshot.data().features;

  return features;
}

function hasColor(array, color) {
  for (const obj of array) {
    if (obj.color === color) return true;
  }
  return false;
}

function getColor(color) {
  switch (color) {
    case "Branco":
      return "#FFFFFF";
    case "Preto":
      return "#000000";
    default:
      return "#000000";
  }
}
