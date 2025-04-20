"use client";
import Image from "next/image";

import styles from "./CartProductsItem.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { em, Text, Title } from "@mantine/core";
import { breakpoints } from "~/utils/breakpoints";
import Counter from "~/components/global/Counter/Counter";
import { Product } from "~/types/products";

interface Props {
  item: Product;
}

const CartProductsItem = ({ item }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <li className={styles.cartProductItem} key={item}>
      <div className={styles.cartProductUpper}>
        <Image
          loader={() => item.featuredImage?.url ?? ""}
          src={item.featuredImage?.url ?? ""}
          alt={item.featuredImage?.altText ?? ""}
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
            {item.priceRange?.minVariantPrice?.amount}€
          </Text>
        </div>
      </div>

      <div className={styles.cartProductLower}>
        <Counter
          amount={item.quantity}
          onAddClick={() => {}}
          onRemoveClick={() => {}}
        />

        <Text size="h5" fw={700}>
          Ukupno:{" "}
          {item.quantity ??
            0 * parseFloat(item.priceRange?.minVariantPrice?.amount ?? "")}
          €
        </Text>
      </div>
    </li>
  );
};

export default CartProductsItem;
