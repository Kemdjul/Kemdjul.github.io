"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./HomeCategories.module.scss";
import { em, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";

import { fadeIn } from "~/utils/animations";
import * as motion from "motion/react-client";

const HomeCategories = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <section className={styles.categoriesContainer}>
      <ul className={styles.categories}>
        <div className={styles.categoryRow}>
          <motion.li
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="home-category-jackets"
          >
            <Image
              src={"/category-jackets.jpg"}
              alt="Jakne na sniženju"
              width={824}
              height={512}
              className={styles.categoryImage}
            />

            <Link href="#" className={styles.categoryLink}>
              <Title
                order={3}
                size={isMobile ? "h5" : "h3"}
                fw={isMobile ? 500 : 700}
              >
                Jakne
              </Title>
            </Link>
          </motion.li>

          <motion.li
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="home-category-hoodies"
          >
            <Image
              src={"/category-hoodies.jpg"}
              alt="Dukse na sniženju"
              width={824}
              height={512}
              className={styles.categoryImage}
            />

            <Link href="#" className={styles.categoryLink}>
              <Title
                order={3}
                size={isMobile ? "h5" : "h3"}
                fw={isMobile ? 500 : 700}
              >
                Dukse
              </Title>
            </Link>
          </motion.li>
        </div>

        <div className={styles.categoryRow}>
          <motion.li
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="home-category-trousers"
          >
            <Image
              src={"/category-trousers.jpg"}
              alt="Hlače na sniženju"
              width={824}
              height={512}
              className={styles.categoryImage}
            />

            <Link href="#" className={styles.categoryLink}>
              <Title
                order={3}
                size={isMobile ? "h5" : "h3"}
                fw={isMobile ? 500 : 700}
              >
                Hlače
              </Title>
            </Link>
          </motion.li>

          <motion.li
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="home-category-footwear"
          >
            <Image
              src={"/category-footwear.jpg"}
              alt="Obuća na sniženju"
              width={824}
              height={512}
              className={styles.categoryImage}
            />

            <Link href="#" className={styles.categoryLink}>
              <Title
                order={3}
                size={isMobile ? "h5" : "h3"}
                fw={isMobile ? 500 : 700}
              >
                Obuća
              </Title>
            </Link>
          </motion.li>
        </div>
      </ul>
    </section>
  );
};

export default HomeCategories;
