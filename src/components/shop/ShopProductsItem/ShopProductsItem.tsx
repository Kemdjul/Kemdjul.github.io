import Link from "next/link";
import { Title } from "@mantine/core";
import Image from "next/image";
import styles from "./ShopProductsItem.module.scss";
import { Product } from "~/types/products";

interface Props {
  product: Product;
}

const ShopProductsItem = ({ product }: Props) => {
  return (
    <Link
      key={product.id}
      href={`/trgovina/${product.id.split("/")[4]}`}
      className={styles.productsItem}
      style={{ textDecoration: "none" }}
    >
      <Image
        loader={() => product.featuredImage?.url ?? ""}
        src={product.featuredImage?.url ?? ""}
        width={320}
        height={360}
        alt={product.featuredImage?.altText ?? ""}
        className={styles.productsItemsImage}
      />

      <div className={styles.productsItemTitle}>
        <Title order={6} fw={700}>
          {product.title}
        </Title>
        <span className={styles.productsPrice}>
          <Title order={5}>
            {product.priceRange?.minVariantPrice?.amount}€
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
