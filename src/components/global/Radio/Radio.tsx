import HandMoney from "~/assets/svg/HandMoney";
import { Card, Text, Title } from "@mantine/core";
import styles from "./Radio.module.scss";

const Radio = () => {
  return (
    <Card shadow="md" className={styles.radioCard}>
      <input
        type="radio"
        className={styles.radioInput}
        id="radio"
        name="radio"
      />

      <label className={styles.radioContent} htmlFor="radio">
        <HandMoney />

        <span>
          <Title order={4} fw={700}>
            Plaćanje pouzećem
          </Title>
          <Text size="h6">
            Novac predajete dostavljaču kad vam dostavi vaš paket.
          </Text>
        </span>
      </label>
    </Card>
  );
};

export default Radio;
