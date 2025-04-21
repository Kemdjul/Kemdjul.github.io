"use client";
import Image from "next/image";
import styles from "./CheckoutSummaryItem.module.scss";
import { em, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import Counter from "~/components/global/Counter/Counter";
import { CartEdge } from "~/types/cart";

interface Props {
  item: CartEdge;
}

const CheckoutSummaryItem = ({ item }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <li className={styles.checkoutProductItem} key={item.node.id}>
      <div className={styles.checkoutProductUpper}>
        <span>
          <Image
            loader={() =>
              item.node.merchandise?.image
                ? item.node.merchandise.image.url
                : ""
            }
            src={
              item.node.merchandise?.image
                ? item.node.merchandise.image.url
                : ""
            }
            alt={
              item.node.merchandise?.image
                ? item.node.merchandise.image.altText
                : ""
            }
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
              {item.node.merchandise?.product?.title}
            </Title>
            <Text size={isMobile ? "p" : "h6"}>
              {item.node.merchandise?.product?.description}
            </Text>
          </span>

          <div className={styles.checkoutProductSelects}>
            <span className={styles.checkoutProductSelect}>
              <Title order={4} size={isMobile ? "p" : "h6"}>
                Veličina:
              </Title>
              <Text>
                {item.node.merchandise?.selectedOptions &&
                  item.node.merchandise?.selectedOptions[0].value}
              </Text>
            </span>

            <span className={styles.checkoutProductSelect}>
              <Title order={4} size={isMobile ? "p" : "h6"}>
                Boja:
              </Title>
              <Text>
                {item.node.merchandise?.selectedOptions &&
                  item.node.merchandise?.selectedOptions[1].value}
              </Text>
            </span>
          </div>

          {!isMobile && (
            <Text size="h5">{item.node.cost?.amountPerQuantity?.amount}€</Text>
          )}
        </div>
      </div>

      <div className={styles.checkoutProductLower}>
        <Counter
          amount={item.node.quantity}
          onAddClick={() => {}}
          onRemoveClick={() => {}}
        />

        {isMobile ? (
          <Text size="h6" fw={500}>
            {item.node.quantity ??
              0 * parseFloat(item.node.merchandise?.price?.amount ?? "")}
            €
          </Text>
        ) : (
          <Text size="h5" fw={700}>
            Ukupno:{" "}
            {item.node.quantity ??
              0 * parseFloat(item.node.merchandise?.price?.amount ?? "")}
            €
          </Text>
        )}
      </div>
    </li>
  );
};

export default CheckoutSummaryItem;
