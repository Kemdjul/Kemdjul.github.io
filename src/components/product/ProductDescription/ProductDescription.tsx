"use client";
import {
  Breadcrumbs,
  Anchor,
  Select,
  Title,
  Text,
  em,
  ComboboxData,
} from "@mantine/core";
import Link from "next/link";
import Button from "~/components/global/Button/Button";
import styles from "./ProductDescription.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import ProductDescriptionCard from "./ProductDescriptionCard/ProductDescriptionCard";
import { useState } from "react";
import { Product } from "~/types/products";
import { Cart, CartEdge } from "~/types/cart";
import { useAppDispatch, useAppSelector } from "~/store/hooks";
import { addItem, selectCart } from "~/store/features/cart/cartSlice";
import { formatToProductVariant } from "~/utils/formatting";

interface Props {
  product: Product;
  addProductToCart: (id: string, cartId: string) => Promise<Cart>;
}

const ProductDescription = ({ product, addProductToCart }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const [color, setColor] = useState<string | null>("");
  const colorSelectData: ComboboxData = product.options
    ? product.options[0].optionValues?.map((value) => value.name)
    : "";

  const [size, setSize] = useState<string | null>("");
  const sizeSelectData: ComboboxData = product.options
    ? product.options[1].optionValues?.map((value) => value.name)
    : "";

  const onAddToCartClick = async () => {
    try {
      const selectedProductIndex = product.variants?.edges.findIndex((item) =>
        item.node.selectedOptions
          ? item.node.selectedOptions[0].value === color &&
            item.node.selectedOptions[1].value === size
          : false
      );

      if (selectedProductIndex === -1 || selectedProductIndex === undefined)
        return;

      const selectedProductVariant = formatToProductVariant(
        product,
        product.variants.edges[selectedProductIndex]
      );

      const addToCartAction = await addProductToCart(
        product.variants?.edges[selectedProductIndex].node.id ?? "",
        localStorage.getItem("cartId") ?? ""
      );

      dispatch(addItem(selectedProductVariant));

      if (!localStorage.getItem("cartId")) {
        localStorage.setItem("cartId", addToCartAction.cartCreate.cart.id);
      }
    } catch (err) {
      if (typeof err === "string") throw new Error(err);
      throw err;
    }
  };

  const alreadyInCart = cart.lines.edges?.find(
    (item: CartEdge) =>
      item.node.merchandise?.product?.id === product.id &&
      item.node.merchandise?.title?.split(" ")[0] === color &&
      item.node.merchandise?.title?.split(" ")[2] === size
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
          desc={product.description ?? ""}
        />

        <ProductDescriptionCard title="Sastav" desc={"product.composition"} />
      </div>

      <div className={styles.productCTA}>
        <span className={styles.productPrices}>
          {product.priceRange?.maxVariantPrice?.amount !==
          product.priceRange?.minVariantPrice?.amount ? (
            <Title
              order={5}
              size={isMobile ? "h6" : "h5"}
              c="#666666"
              td="line-through"
            >
              {product.priceRange?.maxVariantPrice?.amount}€
            </Title>
          ) : (
            ""
          )}
          <Title
            order={4}
            size={isMobile ? "h5" : "h4"}
            fw={isMobile ? 500 : 700}
          >
            {product.priceRange?.minVariantPrice?.amount}€
          </Title>
        </span>

        <Button
          onClick={() => onAddToCartClick()}
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
