import ProductGallery from "~/components/product/ProductGallery/ProductGallery";
import ProductDescription from "~/components/product/ProductDescription/ProductDescription";
import ProductRecommended from "~/components/product/ProductRecommended/ProductRecommended";
import styles from "./styles.module.scss";

import * as motion from "motion/react-client";

const page = () => {
  return (
    <motion.main
      className={styles.container}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 16 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.8 }}
      key="product"
      layout
    >
      <ProductGallery />
      <ProductDescription />
      <ProductRecommended />
    </motion.main>
  );
};

export default page;
