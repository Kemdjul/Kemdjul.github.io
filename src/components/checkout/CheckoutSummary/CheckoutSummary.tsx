"use client";
import { em, Select, Text, Title } from "@mantine/core";
import Counter from "~/components/global/Counter/Counter";
import Separator from "~/components/global/Separator/Separator";
import styles from "./CheckoutSummary.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";

const CheckoutSummary = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <section className={styles.container}>
      <Title order={3} size={isMobile ? "h5" : "h3"} fw={700}>
        Košarica
      </Title>

      <Separator />

      <span>
        <Text size={isMobile ? "h6" : "h4"} fw={700}>
          Ukupno: 130.00€
        </Text>
        <Text size={isMobile ? "h6" : "h4"}>Troškovi dostave: 10.00€</Text>
      </span>

      <Separator />

      <ul className={styles.checkoutProducts}>
        <li className={styles.checkoutProductItem}>
          <div className={styles.checkoutProductUpper}>
            <div className={styles.tempImage} />

            <div className={styles.checkoutProductDesc}>
              <span className={styles.checkoutProductName}>
                <Title
                  order={4}
                  size={isMobile ? "h5" : "h3"}
                  fw={isMobile ? 500 : 700}
                >
                  Lorem ipsum
                </Title>
                <Text size={isMobile ? "p" : "h6"}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse a magna metus.
                </Text>
              </span>

              <div className={styles.checkoutProductSelects}>
                <span className={styles.checkoutProductSelect}>
                  <Title order={4} size={isMobile ? "p" : "h6"}>
                    Veličina:
                  </Title>
                  <Select />
                </span>

                <span className={styles.checkoutProductSelect}>
                  <Title order={4} size={isMobile ? "p" : "h6"}>
                    Boja:
                  </Title>
                  <Select />
                </span>
              </div>

              {!isMobile && <Text size="h5">120.00€</Text>}
            </div>
          </div>

          <div className={styles.checkoutProductLower}>
            <Counter />

            {isMobile ? (
              <Text size="h6" fw={500}>
                120.00€
              </Text>
            ) : (
              <Text size="h5" fw={700}>
                Ukupno: 120.00€
              </Text>
            )}
          </div>
        </li>
      </ul>
    </section>
  );
};

export default CheckoutSummary;
