"use client";
import Button from "../../global/Button/Button";
import ArrowRight from "~/assets/svg/ArrowRight";
import Image from "next/image";
import styles from "./HomeSuppliers.module.scss";

import { fadeIn } from "~/utils/animations";
import * as motion from "motion/react-client";
import { em, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";

const HomeSuppliers = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <section className={styles.container}>
      <div className={styles.suppliers}>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.supplierContainer}
          key="home-supplier-dunauone"
        >
          <Image
            src="/supplier-dunauone.jpg"
            alt="Proizvođač Dunauone"
            fill
            className={styles.supplierImage}
          />

          <div className={styles.supplierText}>
            <Title order={3} c="white">
              Dunauone
            </Title>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.supplierContainer}
          key="home-supplier-uomo"
        >
          <Image
            src="/supplier-uomo.jpg"
            alt="Proizvođač Uomo"
            fill
            className={styles.supplierImage}
          />

          <div className={styles.supplierText}>
            <Title order={3} c="white">
              Uomo
            </Title>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.supplierContainer}
          key="home-supplier-lijepa-moda"
        >
          <Image
            src="/supplier-lijepa-moda.jpg"
            alt="Proizvođač Lijepa Moda"
            fill
            className={styles.supplierImage}
          />

          <div className={styles.supplierText}>
            <Title order={3} c="white">
              Lijepa moda
            </Title>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.supplierContainer}
          key="home-supplier-coppa"
        >
          <Image
            src="/supplier-Coppa.jpg"
            alt="Proizvođač Coppa"
            fill
            className={styles.supplierImage}
          />

          <div className={styles.supplierText}>
            <Title order={3} c="white">
              Coppa
            </Title>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={styles.supplierContainer}
          key="home-supplier-ouno"
        >
          <Image
            src="/supplier-ouno.jpg"
            alt="Proizvođač Ouno"
            fill
            className={styles.supplierImage}
          />

          <div className={styles.supplierText}>
            <Title order={3} c="white">
              Ouno
            </Title>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true }}
        className={styles.suppliersCTA}
        key="suppliers-button"
      >
        <Button onClick={(e) => e.preventDefault()}>
          <Title order={4} size={isMobile ? "h6" : "h4"}>
            Više proizvođača
          </Title>
          <ArrowRight />
        </Button>
      </motion.div>
    </section>
  );
};

export default HomeSuppliers;
