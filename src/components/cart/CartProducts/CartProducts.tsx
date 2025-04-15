"use client";
import { em, Text, Title } from "@mantine/core";
import Separator from "~/components/global/Separator/Separator";
import styles from "./CartProducts.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import { useAppSelector } from "~/store/hooks";
import { selectCartItems } from "~/store/features/cart/cartSlice";
import CartProductsItem from "../CartProductsItem/CartProductsItem";

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
        {items.length ? (
          items.map((item) => <CartProductsItem item={item} key={item} />)
        ) : (
          <Text>Košarica vam je prazna</Text>
        )}
      </ul>
    </section>
  );
};

export default CartProducts;
