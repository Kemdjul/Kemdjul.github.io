"use client";
import { Breadcrumbs, Anchor, Select, Title, em, Text } from "@mantine/core";
import ShopProductsItem from "../ShopProductsItem/ShopProductsItem";
import Button from "~/components/global/Button/Button";
import Filter from "~/assets/svg/Filter";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import { useAppSelector } from "~/store/hooks";
import { selectAllFilters } from "~/store/features/shop/filtersSlice";
import styles from "./ShopProducts.module.scss";

const ShopProducts = ({ products }) => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const allFilters = useAppSelector(selectAllFilters);

  console.log(products);

  const breadcrumbsItems = [
    { title: "Naslovnica", href: "/" },
    { title: "Trgovina", href: "/trgovina" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      <Text size={isMobile ? "caption" : "p"}>{item.title}</Text>
    </Anchor>
  ));

  const checkCategory = (product) => {
    return (
      !allFilters.category.length ||
      allFilters.category.includes(product.node.category.name)
    );
  };

  const checkSize = (product) => {
    return (
      !allFilters.size.length ||
      product.node.options[1].optionValues.some((item) =>
        allFilters.size.includes(item.name)
      )
    );
  };

  const checkColor = (product) => {
    return (
      !allFilters.color.length ||
      product.node.options[0].optionValues.some((item) =>
        allFilters.color.includes(item.name)
      )
    );
  };

  const checkIfFiltered = (product) => {
    if (checkCategory(product) && checkSize(product) && checkColor(product))
      return true;
    return false;
  };

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
        {products?.map((product) => {
          if (checkIfFiltered(product))
            return <ShopProductsItem product={product} key={product.id} />;
          return "";
        })}
      </div>
    </section>
  );
};

export default ShopProducts;
