"use client";
import { em, Text, Title } from "@mantine/core";
import Separator from "~/components/global/Separator/Separator";
import styles from "./CheckoutSummary.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import { useAppSelector } from "~/store/hooks";
import {
  selectCartItems,
  selectCartTotal,
} from "~/store/features/cart/cartSlice";
import CheckoutSummaryItem from "../CheckoutSummaryItem/CheckoutSummaryItem";

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
          Ukupno: {totalPrice ? totalPrice + 2 : "0"}€
        </Text>
        <Text size={isMobile ? "h6" : "h4"}>Troškovi dostave: 2.00€</Text>
      </span>

      <Separator />

      <ul className={styles.checkoutProducts}>
        {items.map((item) => (
          <CheckoutSummaryItem item={item} key={item} />
        ))}
      </ul>
    </section>
  );
};

export default CheckoutSummary;
