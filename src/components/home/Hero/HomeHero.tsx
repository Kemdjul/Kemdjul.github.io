"use client";
import { em, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "~/assets/svg/ArrowRight";
import { fadeIn } from "~/utils/animations";
import styles from "./HomeHero.module.scss";

import * as motion from "motion/react-client";
import { breakpoints } from "~/utils/breakpoints";
import { useMediaQuery } from "@mantine/hooks";

const HomeHero = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <Image
        src={"/hero-img.jpg"}
        alt="Zimsko sniženje"
        width={1920}
        height={704}
        className={styles.heroImage}
      />

      <Link href="#" className={`${styles.heroTextContainer} bold`}>
        <motion.span
          className={styles.heroText}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <Title order={2} c="white" size={isMobile ? "h4" : "h2"} fw={700}>
            Pogledajte našu ponudu zimskih artikala na sniženju <ArrowRight />
          </Title>
        </motion.span>
      </Link>
    </motion.section>
  );
};

export default HomeHero;
