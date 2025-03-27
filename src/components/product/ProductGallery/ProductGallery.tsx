import styles from "./ProductGallery.module.scss";

const ProductGallery = () => {
  return (
    <section className={styles.galleryContainer}>
      <div className={styles.galleryOptions}>
        <div className={styles.tempImageSmall} />
        <div className={styles.tempImageSmall} />
        <div className={styles.tempImageSmall} />
        <div className={styles.tempImageSmall} />
      </div>

      <div className={styles.tempImage} />
    </section>
  );
};

export default ProductGallery;
