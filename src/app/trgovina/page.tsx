import ShopFilters from "~/components/shop/ShopFilters/ShopFilters";
import ShopProducts from "~/components/shop/ShopProducts/ShopProducts";
import styles from "./styles.module.scss";

import * as motion from "motion/react-client";
import { getAllProducts } from "~/utils/shopify";

const page = async () => {
  const products = await getAllProducts(
    process.env.SHOPIFY_ENDPOINT,
    process.env.SHOPIFY_API_TOKEN
  );

  return (
    <motion.main
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 16 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.8 }}
      className={styles.container}
      key="shop"
      layout
    >
      <ShopFilters />
      <ShopProducts products={products} />
    </motion.main>
  );
};

export default page;
