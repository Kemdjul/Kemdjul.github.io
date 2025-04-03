"use client";
import Image from "next/image";
import styles from "./ProductGallery.module.scss";
import { useState } from "react";

const ProductGallery = ({ product }) => {
  const [mainImage, setMainImage] = useState(0);

  return (
    <section className={styles.galleryContainer}>
      <div className={styles.galleryOptions}>
        {product.images.edges.map((image, pos) => (
          <Image
            key={image.node.id}
            loader={() => image.node.url}
            src={image.node.url}
            alt={image.node.alt}
            width={96}
            height={96}
            className={styles.productImageSmall}
            onClick={() => setMainImage(pos)}
          />
        ))}
      </div>

      <Image
        loader={() => product.images.edges[mainImage].node.url}
        src={product.images.edges[mainImage].node.url}
        alt={product.images.edges[mainImage].node.alt}
        width={1038}
        height={934}
        className={styles.productImage}
      />
    </section>
  );
};

export default ProductGallery;
