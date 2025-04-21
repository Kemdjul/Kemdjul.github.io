"use client";
import Image from "next/image";

import styles from "./CartProductsItem.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { em, Text, Title } from "@mantine/core";
import { breakpoints } from "~/utils/breakpoints";
import Counter from "~/components/global/Counter/Counter";
import { CartEdge } from "~/types/cart";
import { useAppSelector } from "~/store/hooks";
import { selectCart } from "~/store/features/cart/cartSlice";

interface Props {
  item: CartEdge;
}

const CartProductsItem = ({ item }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const cart = useAppSelector(selectCart);

  return (
    <li className={styles.cartProductItem} key={item.node.id}>
      <div className={styles.cartProductUpper}>
        <Image
          loader={() => item.node.merchandise?.image?.url ?? ""}
          src={item.node.merchandise?.image?.url ?? ""}
          alt={item.node.merchandise?.image?.altText ?? ""}
          width={240}
          height={280}
          className={styles.productImage}
        />

        <div className={styles.cartProductDesc}>
          <span className={styles.cartProductName}>
            <Title order={4} size="h5" fw={isMobile ? 500 : 700}>
              {item.node.merchandise?.product?.title}
            </Title>
            <Text size={isMobile ? "p" : "h6"}>
              {item.node.merchandise?.product?.description}
            </Text>
          </span>

          <div className={styles.cartProductSelects}>
            <span className={styles.cartProductSelect}>
              <Title order={4} size={isMobile ? "p" : "h6"}>
                Veličina:
              </Title>
              <Text>{item.node.merchandise?.title?.split(" ")[2]}</Text>
            </span>

            <span className={styles.cartProductSelect}>
              <Title order={4} size={isMobile ? "p" : "h6"}>
                Boja:
              </Title>
              <Text>{item.node.merchandise?.title?.split(" ")[0]}</Text>
            </span>
          </div>

          <Text size="h5" className={styles.hidden}>
            {item.node.cost?.totalAmount?.amount}€
          </Text>
        </div>
      </div>

      <div className={styles.cartProductLower}>
        <Counter
          amount={item.node.quantity}
          onAddClick={() => {}}
          onRemoveClick={() => {}}
        />

        <Text size="h5" fw={700}>
          Ukupno: {cart.cost?.totalAmount?.amount ?? "0.00"}€
        </Text>
      </div>
    </li>
  );
};

export default CartProductsItem;
