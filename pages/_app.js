import "../styles/globals.css";
import styles from "../styles/Home.module.css";
import Header from "../components/ui/header";
import Footer from "../components/ui/footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
