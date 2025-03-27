import CheckoutForm from "~/components/checkout/CheckoutForm/CheckoutForm";
import CheckoutSummary from "~/components/checkout/CheckoutSummary/CheckoutSummary";
import styles from "./styles.module.scss";

const page = () => {
  return (
    <main className={styles.container}>
      <CheckoutForm />
      <CheckoutSummary />
    </main>
  );
};

export default page;
