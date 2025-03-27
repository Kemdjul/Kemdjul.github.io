import CartProducts from "~/components/cart/CartProducts/CartProducts";
import CartSummary from "~/components/cart/CartSummary/CartSummary";
import CartRecommended from "~/components/cart/CartRecommended/CartRecommended";
import styles from "./styles.module.scss";

const page = () => {
  return (
    <main className={styles.container}>
      <CartProducts />
      <CartSummary />
      <CartRecommended />
    </main>
  );
};

export default page;
