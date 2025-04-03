"use client";
import { Text } from "@mantine/core";
import Button from "../Button/Button";
import styles from "./Counter.module.scss";

const Counter = ({ amount, onAddClick, onRemoveClick }) => {
  return (
    <div className={styles.counter}>
      <Button
        onClick={onAddClick}
        includeStyles={false}
        className={styles.counterItem}
      >
        <Text size="h5" c="#26733A">
          +
        </Text>
      </Button>

      <span className={styles.counterItem}>
        <Text size="h5">{amount}</Text>
      </span>

      <Button
        onClick={onRemoveClick}
        includeStyles={false}
        className={styles.counterItem}
      >
        <Text size="h5" c="#E94646">
          -
        </Text>
      </Button>
    </div>
  );
};

export default Counter;
