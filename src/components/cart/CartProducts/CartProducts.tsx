"use client";
import { em, Select, Text, Title } from "@mantine/core";
import Counter from "~/components/global/Counter/Counter";
import Separator from "~/components/global/Separator/Separator";
import styles from "./CartProducts.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";

const CartProducts = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <section className={styles.container}>
      <Title order={3} size={isMobile ? "h5" : "h3"} fw={700}>
        U košarici
      </Title>

      <Separator />

      <ul className={styles.cartProducts}>
        <li className={styles.cartProductItem}>
          <div className={styles.cartProductUpper}>
            <div className={styles.tempImage} />

            <div className={styles.cartProductDesc}>
              <span className={styles.cartProductName}>
                <Title order={4} size="h5" fw={isMobile ? 500 : 700}>
                  Lorem ipsum
                </Title>
                <Text size={isMobile ? "p" : "h6"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse a magna metus.
                </Text>
              </span>

              <div className={styles.cartProductSelects}>
                <span className={styles.cartProductSelect}>
                  <Title order={4} size={isMobile ? "p" : "h6"}>
                    Veličina:
                  </Title>
                  <Select />
                </span>

                <span className={styles.cartProductSelect}>
                  <Title order={4} size={isMobile ? "p" : "h6"}>
                    Boja:{" "}
                  </Title>
                  <Select />
                </span>
              </div>

              <Text size="h5" className={styles.hidden}>
                120.00€
              </Text>
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
                <Title order={4} size="h5" fw={isMobile ? 500 : 700}>
                  Lorem ipsum
                </Title>
                <Text size={isMobile ? "p" : "h6"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse a magna metus.
                </Text>
              </span>

              <div className={styles.cartProductSelects}>
                <span className={styles.cartProductSelect}>
                  <Title order={4} size={isMobile ? "p" : "h6"}>
                    Veličina:
                  </Title>
                  <Select />
                </span>

                <span className={styles.cartProductSelect}>
                  <Title order={4} size={isMobile ? "p" : "h6"}>
                    Boja:{" "}
                  </Title>
                  <Select />
                </span>
              </div>

              <Text size="h5" className={styles.hidden}>
                120.00€
              </Text>
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
