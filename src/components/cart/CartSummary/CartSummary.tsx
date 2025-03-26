"use client";
import { Card, Text, Title } from "@mantine/core";
import Button from "~/components/global/Button/Button";
import Truck from "~/assets/svg/Truck";
import Separator from "~/components/global/Separator/Separator";
import styles from "./CartSummary.module.scss";

const CartSummary = () => {
  return (
    <section className={styles.container}>
      <Title order={3} fw={700}>
        Sažetak
      </Title>

      <Separator />

      <div className={styles.summaryPrice}>
        <span>
          <Title order={4} fw={700}>
            Ukupno: 250.00€
          </Title>
          <Text size="h6">Troškovi dostave: 10.00€</Text>
        </span>

        <Button onClick={() => {}}>
          <Text size="h5">Nastavi na plaćanje</Text>
        </Button>
      </div>

      <ul className={styles.summaryCards}>
        <li>
          <Card shadow="md" className={styles.summaryCard}>
            <Truck />

            <span>
              <Title order={4} size="h5" fw={700}>
                Povrat sredstva nakon 21 dan čekanja paketa
              </Title>
              <Text size="p">
                Ukoliko vaš paket kasni 21 dan od obećanog datuma dostave,
                vraćamo vam vaš novac na vaš račun. Obavjestite nas za kašnjenje
                putem e-maila ili pozivom na naš kontakt broj.
              </Text>
            </span>
          </Card>
        </li>

        <li>
          <Card shadow="md" className={styles.summaryCard}>
            <Truck />

            <span>
              <Title order={4} size="h5" fw={700}>
                Povrat sredstva nakon 21 dan čekanja paketa
              </Title>
              <Text size="p">
                Ukoliko vaš paket kasni 21 dan od obećanog datuma dostave,
                vraćamo vam vaš novac na vaš račun. Obavjestite nas za kašnjenje
                putem e-maila ili pozivom na naš kontakt broj.
              </Text>
            </span>
          </Card>
        </li>

        <li>
          <Card shadow="md" className={styles.summaryCard}>
            <Truck />

            <span>
              <Title order={4} size="h5" fw={700}>
                Povrat sredstva nakon 21 dan čekanja paketa
              </Title>
              <Text size="p">
                Ukoliko vaš paket kasni 21 dan od obećanog datuma dostave,
                vraćamo vam vaš novac na vaš račun. Obavjestite nas za kašnjenje
                putem e-maila ili pozivom na naš kontakt broj.
              </Text>
            </span>
          </Card>
        </li>
      </ul>
    </section>
  );
};

export default CartSummary;
