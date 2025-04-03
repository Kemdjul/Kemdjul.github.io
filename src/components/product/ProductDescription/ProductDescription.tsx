"use client";
import { Breadcrumbs, Anchor, Select, Title, Text, em } from "@mantine/core";
import Link from "next/link";
import Button from "~/components/global/Button/Button";
import styles from "./ProductDescription.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import ProductDescriptionCard from "./ProductDescriptionCard/ProductDescriptionCard";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { addItem, selectCartItems } from "~/store/features/cart/cartSlice";
import { useState } from "react";

const ProductDescription = ({ product }) => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCartItems);

  const [color, setColor] = useState<string | null>("");
  const colorSelectData = product.options[0].optionValues.map(
    (value) => value.name
  );

  const [size, setSize] = useState<string | null>("");
  const sizeSelectData = product.options[1].optionValues.map(
    (value) => value.name
  );

  const addToCartAction = () => {
    if (!color || !size) return;

    dispatch(addItem({ ...product, amount: 1, color: color, size: size }));
  };

  const alreadyInCart = cart.some(
    (item) =>
      item.id === product.id && item.color === color && item.size === size
  );

  const items = [
    { title: "Trgovina", href: "/trgovina" },
    { title: product.title, href: "#" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      <Text size={isMobile ? "caption" : "p"}>{item.title}</Text>
    </Anchor>
  ));

  return (
    <section className={styles.container}>
      <div>
        <Breadcrumbs>{items}</Breadcrumbs>
        <span className={styles.productTitle}>
          <Title order={3} size={isMobile ? "h5" : "h3"} fw={"700"}>
            {product.title}
          </Title>
          {product.availableForSale ? (
            <Title order={5} size={isMobile ? "p" : "h5"} c={"#26733A"}>
              Dostupno
            </Title>
          ) : (
            <Title order={5} size={isMobile ? "p" : "h5"} c={"#E94646"}>
              Nedostupno
            </Title>
          )}
        </span>
      </div>

      <div className={styles.productSelects}>
        <div className={styles.productSelectContainer}>
          <Title order={6}>Boja:</Title>
          <Select
            value={color}
            onChange={setColor}
            placeholder="Odaberi boju..."
            data={colorSelectData}
            comboboxProps={{
              transitionProps: { transition: "fade-down", duration: 200 },
            }}
          />
        </div>

        <div className={styles.productSelect}>
          <div className={styles.productSelectWithGuide}>
            <Title order={6}>Veličina:</Title>
            <Select
              value={size}
              onChange={setSize}
              placeholder="Odaberi veličinu..."
              data={sizeSelectData}
              comboboxProps={{
                transitionProps: { transition: "fade-down", duration: 200 },
              }}
            />
          </div>

          <Link href="#">
            <Text size={isMobile ? "caption" : "p"}>Vodič za veličine</Text>
          </Link>
        </div>
      </div>

      <div className={styles.productCards}>
        <ProductDescriptionCard
          title="Opis o proizvodu"
          desc={product.description}
        />

        <ProductDescriptionCard title="Sastav" desc={product.composition} />
      </div>

      <div className={styles.productCTA}>
        <span className={styles.productPrices}>
          {product.maxVariantPrice !== product.minVariantPrice ? (
            <Title
              order={5}
              size={isMobile ? "h6" : "h5"}
              c="#666666"
              td="line-through"
            >
              {product.priceRange.maxVariantPrice.amount}€
            </Title>
          ) : (
            ""
          )}
          <Title
            order={4}
            size={isMobile ? "h5" : "h4"}
            fw={isMobile ? 500 : 700}
          >
            {product.priceRange.minVariantPrice.amount}€
          </Title>
        </span>

        <Button
          onClick={() => addToCartAction()}
          disabled={alreadyInCart || !size || !color}
        >
          {alreadyInCart ? "Već u košarici" : "Dodaj u košaricu"}
        </Button>
      </div>

      <Text size="h6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mollis
        nulla. Integer scelerisque tellus ut diam lobortis vehicula. Donec eu
        purus sit amet nisi aliquet lacinia et in purus.
      </Text>
    </section>
  );
};

export default ProductDescription;
