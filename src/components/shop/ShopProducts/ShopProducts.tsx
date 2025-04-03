"use client";
import { Breadcrumbs, Anchor, Select, Title, em, Text } from "@mantine/core";
import Link from "next/link";
import styles from "./ShopProducts.module.scss";
import Button from "~/components/global/Button/Button";
import Filter from "~/assets/svg/Filter";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import Image from "next/image";

const ShopProducts = ({ products }) => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  const breadcrumbsItems = [
    { title: "Naslovnica", href: "/" },
    { title: "Trgovina", href: "/trgovina" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      <Text size={isMobile ? "caption" : "p"}>{item.title}</Text>
    </Anchor>
  ));

  console.log(products[0].node);

  return (
    <section className={styles.productsContainer}>
      <div className={styles.productsTitle}>
        <div>
          <Breadcrumbs separator=">">{breadcrumbsItems}</Breadcrumbs>
          <Title order={3} size={isMobile ? "h5" : "h3"} fw={700}>
            Trgovina
          </Title>
          <Title order={5} size={isMobile ? "h6" : "h5"}>
            100 komada
          </Title>
        </div>

        <div className={styles.productsActions}>
          <Button className={styles.productsActionsFilter}>
            <Filter />
            <Text>Filter</Text>
          </Button>

          <Select
            label={isMobile ? "" : "Sortiraj po"}
            placeholder="Odaberi"
            defaultValue="Preporučeno"
            data={[
              "Preporučeno",
              "Cijena silazno",
              "Cijena uzlazno",
              "Naziv silazno",
              "Naziv uzlazno",
            ]}
            comboboxProps={{
              transitionProps: { transition: "fade-down", duration: 200 },
            }}
            classNames={{ root: styles.sortByRoot }}
          />
        </div>
      </div>

      <div className={styles.productsItemsContainer}>
        {products?.map((product) => (
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
        ))}
      </div>
    </section>
  );
};

export default ShopProducts;
