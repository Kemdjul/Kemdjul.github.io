import ProductGallery from "~/components/product/ProductGallery/ProductGallery";
import ProductDescription from "~/components/product/ProductDescription/ProductDescription";
import ProductRecommended from "~/components/product/ProductRecommended/ProductRecommended";
import styles from "./styles.module.scss";

import * as motion from "motion/react-client";
import { addToCart, getProduct, updateCart } from "~/utils/shopify";
import { Product } from "~/types/products";
import { Cart } from "~/types/cart";

interface Props {
  params: {
    slug: string;
  };
}

const page = async ({ params }: Props) => {
  const product: Product = await getProduct(
    process.env.SHOPIFY_ENDPOINT ?? "",
    process.env.SHOPIFY_API_TOKEN ?? "",
    `gid://shopify/Product/${params.slug}`
  );

  const addProductToCart = async (
    id: string,
    cartId: string
  ): Promise<Cart> => {
    "use server";
    try {
      if (cartId) {
        const result = updateCart(
          process.env.SHOPIFY_ENDPOINT ?? "",
          process.env.SHOPIFY_API_TOKEN ?? "",
          cartId,
          id,
          "1"
        );
        return result;
      } else {
        const result = addToCart(
          process.env.SHOPIFY_ENDPOINT ?? "",
          process.env.SHOPIFY_API_TOKEN ?? "",
          id,
          "1"
        );
        return result;
      }
    } catch (err) {
      if (typeof err === "string") throw new Error(err);
      throw err;
    }
  };
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
      <ProductDescription
        product={product}
        addProductToCart={addProductToCart}
      />
      <ProductRecommended />
    </motion.main>
  );
};

export default page;
