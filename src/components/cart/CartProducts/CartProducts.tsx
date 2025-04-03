"use client";
import { em, Select, Text, Title } from "@mantine/core";
import Counter from "~/components/global/Counter/Counter";
import Separator from "~/components/global/Separator/Separator";
import styles from "./CartProducts.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import { useAppSelector } from "~/store/hooks";
import { selectCartItems } from "~/store/features/cart/cartSlice";
import Image from "next/image";

const CartProducts = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const items = useAppSelector(selectCartItems);

  return (
    <section className={styles.container}>
      <Title order={3} size={isMobile ? "h5" : "h3"} fw={700}>
        U košarici
      </Title>

      <Separator />

      <ul className={styles.cartProducts}>
        {items.map((item) => (
          <li className={styles.cartProductItem} key={item}>
            <div className={styles.cartProductUpper}>
              <Image
                loader={() => item.featuredImage.url}
                src={item.featuredImage.url}
                alt={item.featuredImage.alt}
                width={240}
                height={280}
                className={styles.productImage}
              />

              <div className={styles.cartProductDesc}>
                <span className={styles.cartProductName}>
                  <Title order={4} size="h5" fw={isMobile ? 500 : 700}>
                    {item.title}
                  </Title>
                  <Text size={isMobile ? "p" : "h6"}>{item.description}</Text>
                </span>

                <div className={styles.cartProductSelects}>
                  <span className={styles.cartProductSelect}>
                    <Title order={4} size={isMobile ? "p" : "h6"}>
                      Veličina:
                    </Title>
                    <Text>{item.size}</Text>
                  </span>

                  <span className={styles.cartProductSelect}>
                    <Title order={4} size={isMobile ? "p" : "h6"}>
                      Boja:
                    </Title>
                    <Text>{item.color}</Text>
                  </span>
                </div>

                <Text size="h5" className={styles.hidden}>
                  {item.priceRange.minVariantPrice.amount}€
                </Text>
              </div>
            </div>

            <div className={styles.cartProductLower}>
              <Counter
                amount={item.amount}
                onAddClick={() => {}}
                onRemoveClick={() => {}}
              />

              <Text size="h5" fw={700}>
                Ukupno: {item.amount * item.priceRange.minVariantPrice.amount}€
              </Text>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CartProducts;
