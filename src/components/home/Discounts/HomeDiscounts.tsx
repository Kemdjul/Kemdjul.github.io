"use client";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import { em, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";

import { fadeIn } from "~/utils/animations";
import * as motion from "motion/react-client";
import styles from "./HomeDiscounts.module.scss";

const HomeDiscounts = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.sm)})`);
  const isTablet = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <section className={styles.container}>
      <motion.span
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key="home-discounts-1"
      >
        <Title order={2} size={isMobile ? "h4" : "h2"} fw={700}>
          Najveći popusti ovdje
        </Title>
      </motion.span>

      <Carousel
        withIndicators
        height={500}
        withControls={false}
        containScroll="trimSnaps"
        type="container"
        slideSize={isMobile ? "100%" : isTablet ? "50%" : "25%"}
        slideGap="md"
        align="start"
        classNames={{
          indicators: styles.indicators,
          indicator: styles.indicator,
        }}
      >
        <CarouselSlide>
          <motion.div
            variants={fadeIn}
            className={styles.productContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="home-discounts-1"
          >
            <div className={styles.productImage} /> {/* Image here */}
            <div className={styles.productText}>
              <Title order={6} size={isMobile ? "p" : "h6"} fw={700}>
                Lorem ipsum dolor sit amet consectetur{" "}
              </Title>
              <span className={styles.productPrice}>
                <Text size={isMobile ? "h6" : "h5"}>32.99€</Text>
                <Text size={isMobile ? "p" : "h6"} td="line-through">
                  39.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div
            variants={fadeIn}
            className={styles.productContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="home-discounts-2"
          >
            <div className={styles.productImage} /> {/* Image here */}
            <div className={styles.productText}>
              <Title order={6} size={isMobile ? "p" : "h6"} fw={700}>
                Lorem ipsum dolor sit amet consectetur{" "}
              </Title>
              <span className={styles.productPrice}>
                <Text size={isMobile ? "h6" : "h5"}>32.99€</Text>
                <Text size={isMobile ? "p" : "h6"} td="line-through">
                  39.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div
            variants={fadeIn}
            className={styles.productContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="home-discounts-3"
          >
            <div className={styles.productImage} /> {/* Image here */}
            <div className={styles.productText}>
              <Title order={6} size={isMobile ? "p" : "h6"} fw={700}>
                Lorem ipsum dolor sit amet consectetur{" "}
              </Title>
              <span className={styles.productPrice}>
                <Text size={isMobile ? "h6" : "h5"}>32.99€</Text>
                <Text size={isMobile ? "p" : "h6"} td="line-through">
                  39.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div
            variants={fadeIn}
            className={styles.productContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="home-discounts-4"
          >
            <div className={styles.productImage} /> {/* Image here */}
            <div className={styles.productText}>
              <Title order={6} size={isMobile ? "p" : "h6"} fw={700}>
                Lorem ipsum dolor sit amet consectetur{" "}
              </Title>
              <span className={styles.productPrice}>
                <Text size={isMobile ? "h6" : "h5"}>32.99€</Text>
                <Text size={isMobile ? "p" : "h6"} td="line-through">
                  39.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div
            variants={fadeIn}
            className={styles.productContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            key="home-discounts-5"
          >
            <div className={styles.productImage} /> {/* Image here */}
            <div className={styles.productText}>
              <Title order={6} size={isMobile ? "p" : "h6"} fw={700}>
                Lorem ipsum dolor sit amet consectetur{" "}
              </Title>
              <span className={styles.productPrice}>
                <Text size={isMobile ? "h6" : "h5"}>32.99€</Text>
                <Text size={isMobile ? "p" : "h6"} td="line-through">
                  39.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>
      </Carousel>
    </section>
  );
};

export default HomeDiscounts;
