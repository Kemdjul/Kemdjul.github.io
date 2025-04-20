import Separator from "../Separator/Separator";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import { breakpoints } from "~/utils/breakpoints";
import { Drawer, em, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import styles from "./SidebarCart.module.scss";

import Trash from "~/assets/svg/Trash";
import CartIcon from "~/assets/svg/Cart";
import Image from "next/image";
import { Cart, CartEdge } from "~/types/cart";

interface Props {
  opened: boolean;
  close: () => void;
  cart: Cart;
}

const SidebarCart = ({ opened, close, cart }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  const onDeleteClick = (product: CartEdge) => {};

  return (
    <Drawer
      opened={opened}
      onClose={close}
      position="right"
      size={isMobile ? "100%" : "lg"}
      classNames={{
        body: styles.drawerBody,
        header: styles.drawerContent,
        content: styles.drawerContent,
      }}
    >
      <div className={styles.drawerUpper}>
        <span className={styles.drawerTitle}>
          <CartIcon />
          <Title order={3} size={isMobile ? "h4" : "h3"} fw={700}>
            Košarica
          </Title>
        </span>

        <Separator />

        <ul className={styles.drawerProducts}>
          {cart?.lines.edges.map((product: CartEdge) => (
            <li key={product.node.id}>
              <Image
                loader={() => product.node.merchandise?.image?.url ?? ""}
                src={product.node.merchandise?.image?.url ?? ""}
                alt={product.node.merchandise?.image?.altText ?? ""}
                width={160}
                height={160}
                className={styles.productImage}
              />

              <div className={styles.drawerProduct}>
                <span>
                  <Title order={5} size={isMobile ? "h6" : "h5"} fw={700}>
                    {product.node.merchandise?.product?.title}
                  </Title>
                  <Text size={isMobile ? "p" : "h6"}>
                    {product.node.merchandise?.title}
                  </Text>
                </span>

                <span className={styles.drawerProductPrice}>
                  <Counter
                    amount={product.node.quantity ?? 0}
                    onAddClick={() => {}}
                    onRemoveClick={() => {}}
                  />
                  <Text size={isMobile ? "h5" : "h4"} fw={700}>
                    {`${product.node.cost?.totalAmount?.amount}`}€
                  </Text>
                </span>
              </div>

              <Button
                onClick={() => onDeleteClick(product)}
                includeStyles={false}
                className={styles.drawerProductTrash}
              >
                <Trash />
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.drawerLower}>
        <Separator />

        <div className={styles.drawerCTA}>
          <span className={styles.drawerTotalPrice}>
            <Text size={isMobile ? "h5" : "h4"} fw={700}>
              Subtotal: {`${cart?.cost?.totalAmount?.amount}`}€
            </Text>
            <Text size={isMobile ? "p" : "h6"}>
              Način dostave birate pri plaćanju.
            </Text>
          </span>

          <span>
            {cart?.lines.edges.length ? (
              <Link
                href="/pregled"
                className={styles.cartLink}
                onClick={() => close()}
              >
                <Button>
                  <Text size={isMobile ? "h5" : "h4"}>Nastavi na plaćanje</Text>
                </Button>
              </Link>
            ) : (
              <Button disabled>
                <Text size={isMobile ? "h5" : "h4"}>Nastavi na plaćanje</Text>
              </Button>
            )}

            <Link href="/kosarica" onClick={() => close()}>
              Pogledaj košaricu
            </Link>
          </span>
        </div>
      </div>
    </Drawer>
  );
};

export default SidebarCart;
