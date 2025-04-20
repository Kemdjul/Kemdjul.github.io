import Separator from "../Separator/Separator";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import { breakpoints } from "~/utils/breakpoints";
import { Drawer, em, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import styles from "./SidebarCart.module.scss";

import Trash from "~/assets/svg/Trash";
import Cart from "~/assets/svg/Cart";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import {
  selectCartTotal,
  selectCartItems,
  removeItem,
} from "~/store/features/cart/cartSlice";
import Image from "next/image";

interface Props {
  opened: boolean;
  close: () => void;
}

const SidebarCart = ({ opened, close }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();

  const cartId = localStorage.getItem("cartId");
  console.log(cartId);

  const onDeleteClick = (product) => {
    dispatch(
      removeItem({ id: product.id, size: product.size, color: product.color })
    );
  };

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
          <Cart />
          <Title order={3} size={isMobile ? "h4" : "h3"} fw={700}>
            Košarica
          </Title>
        </span>

        <Separator />

        <ul className={styles.drawerProducts}>
          {items.map((product) => (
            <li key={product}>
              <Image
                loader={() => product.featuredImage.url}
                src={product.featuredImage.url}
                alt={product.featuredImage.alt}
                width={160}
                height={160}
                className={styles.productImage}
              />

              <div className={styles.drawerProduct}>
                <span>
                  <Title order={5} size={isMobile ? "h6" : "h5"} fw={700}>
                    {product.title}
                  </Title>
                  <Text size={isMobile ? "p" : "h6"}>
                    {product.size}, {product.color}
                  </Text>
                </span>

                <span className={styles.drawerProductPrice}>
                  <Counter
                    amount={product.amount}
                    onAddClick={() => {}}
                    onRemoveClick={() => {}}
                  />
                  <Text size={isMobile ? "h5" : "h4"} fw={700}>
                    {product.priceRange.minVariantPrice.amount}€
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
              Subtotal: {totalPrice}€
            </Text>
            <Text size={isMobile ? "p" : "h6"}>
              Način dostave birate pri plaćanju.
            </Text>
          </span>

          <span>
            {items.length ? (
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
