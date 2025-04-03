"use client";
import { Card, em, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import Truck from "~/assets/svg/Truck";
import Euro from "~/assets/svg/Euro";
import Box from "~/assets/svg/Box";

import { fadeIn } from "~/utils/animations";
import * as motion from "motion/react-client";
import styles from "./HomeCards.module.scss";

const HomeCards = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <section className={styles.categoriesContainer}>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.categoriesCardContainer}
        key="home-cards-1"
      >
        <Card
          padding={isMobile ? "md" : "lg"}
          radius="xl"
          shadow="md"
          className={styles.categoriesCard}
        >
          <span>
            <Truck />
          </span>

          <div className={styles.categoriesCardText}>
            <Title
              order={4}
              size={isMobile ? "h5" : "h4"}
              fw={isMobile ? 500 : 700}
            >
              Dostava unutar 3 radna dana
            </Title>
            <Text size={isMobile ? "p" : "h6"}>
              Vašu narudžbu predajemo Overseas Express-u koji vam dostavlja
              paket unutar 3 radna dana nakon izvršene narudžbe. Na email
              dobivate mogućnost praćčenja narudžbe.
            </Text>
          </div>
        </Card>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.categoriesCardContainer}
        key="home-cards-2"
      >
        <Card
          padding="lg"
          radius="xl"
          shadow="md"
          className={styles.categoriesCard}
        >
          <span>
            <Euro />
          </span>
          <div className={styles.categoriesCardText}>
            <Title
              order={4}
              size={isMobile ? "h5" : "h4"}
              fw={isMobile ? 500 : 700}
            >
              Povrat sredstva nakon 21 dan čekanja paketa
            </Title>
            <Text size={isMobile ? "p" : "h6"}>
              Ako vaš paket kasni 21 dan od narudžbe paketa, vraćamo vam vaš
              novac na vaš račun. Obavjestite nas za kašnjenje putem e-maila ili
              pozivom na naš kontakt broj +385 98 132 8515.
            </Text>
          </div>
        </Card>
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className={styles.categoriesCardContainer}
        key="home-cards-3"
      >
        <Card
          padding="lg"
          radius="xl"
          shadow="md"
          className={styles.categoriesCard}
        >
          <span>
            <Box />
          </span>
          <div className={styles.categoriesCardText}>
            <Title
              order={4}
              size={isMobile ? "h5" : "h4"}
              fw={isMobile ? 500 : 700}
            >
              Pakete plaćate isključivo pouzećem
            </Title>
            <Text size={isMobile ? "p" : "h6"}>
              Naručenu robu plaćate isključivo pouzećem kako bi se spriječila
              mogućnost prijevare ili zabune. Dostavljaču možete platiti putem
              kartice ili gotovinom, a dostavlja vam Overseas Express.
            </Text>
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default HomeCards;
