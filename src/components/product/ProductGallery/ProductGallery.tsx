"use client";
import Image from "next/image";
import styles from "./ProductGallery.module.scss";

const ProductGallery = ({ productImage }) => {
  return (
    <section className={styles.galleryContainer}>
      <div className={styles.galleryOptions}>
        <div className={styles.tempImageSmall} />
        <div className={styles.tempImageSmall} />
        <div className={styles.tempImageSmall} />
        <div className={styles.tempImageSmall} />
      </div>

      <Image
        loader={() => productImage.url}
        src={productImage.url}
        alt={productImage.alt}
        width={1038}
        height={934}
        className={styles.productImage}
      />
    </section>
  );
};

export default ProductGallery;
