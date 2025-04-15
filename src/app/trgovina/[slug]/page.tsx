import ProductGallery from "~/components/product/ProductGallery/ProductGallery";
import ProductDescription from "~/components/product/ProductDescription/ProductDescription";
import ProductRecommended from "~/components/product/ProductRecommended/ProductRecommended";
import styles from "./styles.module.scss";

import * as motion from "motion/react-client";
import { getProduct } from "~/utils/shopify";

const page: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
} = async ({ params, searchParams }) => {
  const product = await getProduct(
    process.env.SHOPIFY_ENDPOINT,
    process.env.SHOPIFY_API_TOKEN,
    `gid://shopify/Product/${params.slug}`
  );

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
      <ProductGallery product={product} />
      <ProductDescription product={product} />
      <ProductRecommended />
    </motion.main>
  );
};

export default page;
