"use client";
import { em, Text, Title } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import styles from "./ProductRecommended.module.scss";

import * as motion from "motion/react-client";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";

const ProductRecommended = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const isTablet = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <section className={styles.container}>
      <Title order={3} size={isMobile ? "h5" : "h3"} fw={700}>
        Preporučujemo uz ovaj proizvod
      </Title>

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
          <motion.div className={styles.productItem}>
            <div className={styles.tempImage} />

            <div>
              <Title order={6} fw={700}>
                Duksa
              </Title>

              <span className={styles.productItemPrice}>
                <Text size="h5">99.99€</Text>
                <Text size="h6" td="line-through">
                  99.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div className={styles.productItem}>
            <div className={styles.tempImage} />

            <div>
              <Title order={6} fw={700}>
                Duksa
              </Title>

              <span className={styles.productItemPrice}>
                <Text size="h5">99.99€</Text>
                <Text size="h6" td="line-through">
                  99.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div className={styles.productItem}>
            <div className={styles.tempImage} />

            <div>
              <Title order={6} fw={700}>
                Duksa
              </Title>

              <span className={styles.productItemPrice}>
                <Text size="h5">99.99€</Text>
                <Text size="h6" td="line-through">
                  99.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div className={styles.productItem}>
            <div className={styles.tempImage} />

            <div>
              <Title order={6} fw={700}>
                Duksa
              </Title>

              <span className={styles.productItemPrice}>
                <Text size="h5">99.99€</Text>
                <Text size="h6" td="line-through">
                  99.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div className={styles.productItem}>
            <div className={styles.tempImage} />

            <div>
              <Title order={6} fw={700}>
                Duksa
              </Title>

              <span className={styles.productItemPrice}>
                <Text size="h5">99.99€</Text>
                <Text size="h6" td="line-through">
                  99.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>
      </Carousel>
    </section>
  );
};

export default ProductRecommended;
