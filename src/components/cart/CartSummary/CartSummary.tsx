"use client";
import { Card, em, Text, Title } from "@mantine/core";
import Button from "~/components/global/Button/Button";
import Truck from "~/assets/svg/Truck";
import Separator from "~/components/global/Separator/Separator";
import styles from "./CartSummary.module.scss";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import Link from "next/link";
import { useAppSelector } from "~/store/hooks";
import { selectCartTotal } from "~/store/features/cart/cartSlice";

const CartSummary = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const totalPrice = useAppSelector(selectCartTotal);

  return (
    <section className={styles.container}>
      <Title order={3} size={isMobile ? "h5" : "h3"} fw={700}>
        Sažetak
      </Title>

      <Separator />

      <div className={styles.summaryPrice}>
        <span>
          <Title order={4} size={isMobile ? "h6" : "h4"} fw={700}>
            Ukupno: {totalPrice + 2}€
          </Title>
          <Text size={isMobile ? "p" : "h6"}>Troškovi dostave: 2.00€</Text>
        </span>

        <Link href="/pregled" style={{ textDecoration: "none" }}>
          <Button onClick={() => {}}>
            <Text size="h5">Nastavi na plaćanje</Text>
          </Button>
        </Link>
      </div>

      <Separator />

      <ul className={styles.summaryCards}>
        <li>
          <Card shadow="md" className={styles.summaryCard}>
            <Truck />

            <span>
              <Title order={4} size="h5" fw={isMobile ? 500 : 700}>
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
              <Title order={4} size="h5" fw={isMobile ? 500 : 700}>
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
              <Title order={4} size="h5" fw={isMobile ? 500 : 700}>
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
