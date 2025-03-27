import { Text, Title } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import styles from "./CartRecommended.module.scss";

import * as motion from "motion/react-client";

const CartRecommended = () => {
  return (
    <section className={styles.container}>
      <Title order={3} fw={700}>
        Možda vam se svidi
      </Title>

      <Carousel
        withIndicators
        height={500}
        withControls={false}
        containScroll="trimSnaps"
        type="container"
        slideSize="25%"
        slideGap="md"
        align="start"
        classNames={{
          indicators: styles.indicators,
          indicator: styles.indicator,
        }}
      >
        <CarouselSlide>
          <motion.div className={styles.recommendedItem}>
            <div className={styles.tempImage} />

            <div>
              <Title order={6} fw={700}>
                Duksa
              </Title>

              <span className={styles.recommendedItemPrice}>
                <Text size="h5">99.99€</Text>
                <Text size="h6" td="line-through">
                  99.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div className={styles.recommendedItem}>
            <div className={styles.tempImage} />

            <div>
              <Title order={6} fw={700}>
                Duksa
              </Title>

              <span className={styles.recommendedItemPrice}>
                <Text size="h5">99.99€</Text>
                <Text size="h6" td="line-through">
                  99.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div className={styles.recommendedItem}>
            <div className={styles.tempImage} />

            <div>
              <Title order={6} fw={700}>
                Duksa
              </Title>

              <span className={styles.recommendedItemPrice}>
                <Text size="h5">99.99€</Text>
                <Text size="h6" td="line-through">
                  99.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div className={styles.recommendedItem}>
            <div className={styles.tempImage} />

            <div>
              <Title order={6} fw={700}>
                Duksa
              </Title>

              <span className={styles.recommendedItemPrice}>
                <Text size="h5">99.99€</Text>
                <Text size="h6" td="line-through">
                  99.99€
                </Text>
              </span>
            </div>
          </motion.div>
        </CarouselSlide>

        <CarouselSlide>
          <motion.div className={styles.recommendedItem}>
            <div className={styles.tempImage} />

            <div>
              <Title order={6} fw={700}>
                Duksa
              </Title>

              <span className={styles.recommendedItemPrice}>
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

export default CartRecommended;
