"use client";
import { em, Select, Text, Title } from "@mantine/core";
import Counter from "~/components/global/Counter/Counter";
import Separator from "~/components/global/Separator/Separator";
import styles from "./CheckoutSummary.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import { useAppSelector } from "~/store/hooks";
import {
  selectCartItems,
  selectCartTotal,
} from "~/store/features/cart/cartSlice";
import Image from "next/image";

const CheckoutSummary = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const totalPrice = useAppSelector(selectCartTotal);
  const items = useAppSelector(selectCartItems);

  return (
    <section className={styles.container}>
      <Title order={3} size={isMobile ? "h5" : "h3"} fw={700}>
        Košarica
      </Title>

      <Separator />

      <span>
        <Text size={isMobile ? "h6" : "h4"} fw={700}>
          Ukupno: {totalPrice + 2}€
        </Text>
        <Text size={isMobile ? "h6" : "h4"}>Troškovi dostave: 2.00€</Text>
      </span>

      <Separator />

      <ul className={styles.checkoutProducts}>
        {items.map((item) => (
          <li className={styles.checkoutProductItem} key={item}>
            <div className={styles.checkoutProductUpper}>
              <span>
                <Image
                  loader={() => item.featuredImage.url}
                  src={item.featuredImage.url}
                  alt={item.featuredImage.alt}
                  width={240}
                  height={280}
                  className={styles.productImage}
                />
              </span>

              <div className={styles.checkoutProductDesc}>
                <span className={styles.checkoutProductName}>
                  <Title
                    order={4}
                    size={isMobile ? "h5" : "h3"}
                    fw={isMobile ? 500 : 700}
                  >
                    {item.title}
                  </Title>
                  <Text size={isMobile ? "p" : "h6"}>{item.description}</Text>
                </span>

                <div className={styles.checkoutProductSelects}>
                  <span className={styles.checkoutProductSelect}>
                    <Title order={4} size={isMobile ? "p" : "h6"}>
                      Veličina:
                    </Title>
                    <Text>{item.size}</Text>
                  </span>

                  <span className={styles.checkoutProductSelect}>
                    <Title order={4} size={isMobile ? "p" : "h6"}>
                      Boja:
                    </Title>
                    <Text>{item.color}</Text>
                  </span>
                </div>

                {!isMobile && (
                  <Text size="h5">
                    {item.priceRange.minVariantPrice.amount}€
                  </Text>
                )}
              </div>
            </div>

            <div className={styles.checkoutProductLower}>
              <Counter
                amount={item.amount}
                onAddClick={() => {}}
                onRemoveClick={() => {}}
              />

              {isMobile ? (
                <Text size="h6" fw={500}>
                  {item.priceRange.minVariantPrice.amount * item.amount}€
                </Text>
              ) : (
                <Text size="h5" fw={700}>
                  Ukupno: {item.priceRange.minVariantPrice.amount * item.amount}
                  €
                </Text>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CheckoutSummary;
