import { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Cart from "../components/ui/cart";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.getElementById("mantine-ssr-styles");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat"
          rel="stylesheet"
        />
      </Head>
      <Provider store={store}>
        <div className={styles.container}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
        <Cart />
      </Provider>
    </>
  );
}

export default MyApp;
