"use client";
import { Card, CardSection, em, Text, Title } from "@mantine/core";
import React, { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";

import styles from "./ProductDescriptionCard.module.scss";
import ArrowUp from "~/assets/svg/ArrowUp";
import ArrowDown from "~/assets/svg/ArrowDown";

interface Props {
  title: string;
  desc: string;
}

const ProductDescriptionCard = ({ title, desc }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      padding="md"
      shadow="md"
      className={styles.productCard}
      onClick={() => setIsOpen(!isOpen)}
    >
      <CardSection className={styles.productCardSection}>
        <Title size={isMobile ? "h6" : "h5"} order={5}>
          {title}
        </Title>
        {isOpen ? <ArrowUp /> : <ArrowDown />}
      </CardSection>

      {isOpen && (
        <CardSection className={styles.productCardSection}>
          <Text>{desc ?? "Nema opisa"}</Text>
        </CardSection>
      )}
    </Card>
  );
};

export default ProductDescriptionCard;
