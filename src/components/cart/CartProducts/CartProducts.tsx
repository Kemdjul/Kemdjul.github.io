"use client";
import { Select, Text, Title } from "@mantine/core";
import Counter from "~/components/global/Counter/Counter";
import Separator from "~/components/global/Separator/Separator";
import styles from "./CartProducts.module.scss";

const CartProducts = () => {
  return (
    <section className={styles.container}>
      <Title order={3} fw={700}>
        U košarici
      </Title>

      <Separator />

      <ul className={styles.cartProducts}>
        <li className={styles.cartProductItem}>
          <div className={styles.cartProductUpper}>
            <div className={styles.tempImage} />

            <div className={styles.cartProductDesc}>
              <span className={styles.cartProductName}>
                <Title order={4} size="h5" fw={700}>
                  Lorem ipsum
                </Title>
                <Text size="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse a magna metus.
                </Text>
              </span>

              <div className={styles.cartProductSelects}>
                <span className={styles.cartProductSelect}>
                  <Title order={4} size="h6">
                    Veličina:
                  </Title>
                  <Select />
                </span>

                <span className={styles.cartProductSelect}>
                  <Title order={4} size="h6">
                    Boja:{" "}
                  </Title>
                  <Select />
                </span>
              </div>

              <Text size="h5">120.00€</Text>
            </div>
          </div>

          <div className={styles.cartProductLower}>
            <Counter />

            <Text size="h5" fw={700}>
              Ukupno: 120.00€
            </Text>
          </div>
        </li>

        <Separator />

        <li className={styles.cartProductItem}>
          <div className={styles.cartProductUpper}>
            <div className={styles.tempImage} />

            <div className={styles.cartProductDesc}>
              <span className={styles.cartProductName}>
                <Title order={4} size="h5" fw={700}>
                  Lorem ipsum
                </Title>
                <Text size="h6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse a magna metus.
                </Text>
              </span>

              <div className={styles.cartProductSelects}>
                <span className={styles.cartProductSelect}>
                  <Title order={4} size="h6">
                    Veličina:
                  </Title>
                  <Select />
                </span>

                <span className={styles.cartProductSelect}>
                  <Title order={4} size="h6">
                    Boja:{" "}
                  </Title>
                  <Select />
                </span>
              </div>

              <Text size="h5">120.00€</Text>
            </div>
          </div>

          <div className={styles.cartProductLower}>
            <Counter />

            <Text size="h5" fw={700}>
              Ukupno: 120.00€
            </Text>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default CartProducts;
