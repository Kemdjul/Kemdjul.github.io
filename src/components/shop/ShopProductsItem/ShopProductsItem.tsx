import Link from "next/link";
import { Title } from "@mantine/core";
import Image from "next/image";
import styles from "./ShopProductsItem.module.scss";

const ShopProductsItem = ({ product }) => {
  return (
    <Link
      key={product.node.id}
      href={`/trgovina/${product.node.id.split("/")[4]}`}
      className={styles.productsItem}
      style={{ textDecoration: "none" }}
    >
      <Image
        loader={() => product.node.featuredImage.url}
        src={product.node.featuredImage.url}
        width={320}
        height={360}
        alt={product.node.featuredImage.alt}
        className={styles.productsItemsImage}
      />

      <div className={styles.productsItemTitle}>
        <Title order={6} fw={700}>
          {product.node.title}
        </Title>
        <span className={styles.productsPrice}>
          <Title order={5}>
            {product.node.priceRange.minVariantPrice.amount}€
          </Title>
          <Title order={6} td="line-through">
            109.99€
          </Title>
        </span>
      </div>
    </Link>
  );
};

export default ShopProductsItem;
