"use client";
import { Card, Title } from "@mantine/core";
import styles from "./ShopFiltersCard.module.scss";
import { useState } from "react";
import ArrowUp from "~/assets/svg/ArrowUp";
import ArrowDown from "~/assets/svg/ArrowDown";
import Button from "~/components/global/Button/Button";

const ShopFiltersCard = ({ children, title, defaultShow = false }) => {
  const [showCard, setShowCard] = useState(defaultShow);

  return showCard ? (
    <Card padding="sm" className={styles.filtersCard}>
      <Button
        includeStyles={false}
        className={`${styles.filtersTitle} ${styles.showItem}`}
        onClick={() => setShowCard(!showCard)}
      >
        <Title order={5}>{title}</Title>
        <ArrowDown />
      </Button>

      {children}
    </Card>
  ) : (
    <Card padding="sm" className={styles.filtersCard}>
      <Button
        className={styles.filtersTitle}
        onClick={() => setShowCard(!showCard)}
        includeStyles={false}
      >
        <Title order={5}>{title}</Title>
        <ArrowUp />
      </Button>
    </Card>
  );
};

export default ShopFiltersCard;
