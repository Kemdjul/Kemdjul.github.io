import { Select, Title } from "@mantine/core";
import Link from "next/link";
import styles from "./ShopProducts.module.scss";

const ShopProducts = () => {
  return (
    <section className={styles.productsContainer}>
      <div className={styles.productsTitle}>
        <div>
          <Title order={3} fw={700}>
            Trgovina
          </Title>
          <Title order={5}>100 komada</Title>
        </div>

        <Select
          label="Sortiraj po"
          placeholder="Odaberi"
          defaultValue="Preporučeno"
          data={[
            "Preporučeno",
            "Cijena silazno",
            "Cijena uzlazno",
            "Naziv silazno",
            "Naziv uzlazno",
          ]}
          comboboxProps={{
            transitionProps: { transition: "fade-down", duration: 200 },
          }}
          classNames={{ root: styles.sortByRoot }}
        />
      </div>

      <div className={styles.productsItemsContainer}>
        <Link
          href="/trgovina/duksa"
          className={styles.productsItem}
          style={{ textDecoration: "none" }}
        >
          <div className={styles.tempImage} />

          <div className={styles.productsItemTitle}>
            <Title order={6} fw={700}>
              Duksa
            </Title>
            <span className={styles.productsPrice}>
              <Title order={5}>99.99€</Title>
              <Title order={6} td="line-through">
                109.99€
              </Title>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ShopProducts;
