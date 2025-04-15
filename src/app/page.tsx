import HomeHero from "~/components/home/Hero/HomeHero";
import HomeCategories from "~/components/home/Categories/HomeCategories";
import HomeCards from "~/components/home/Cards/HomeCards";
import HomeDiscounts from "~/components/home/Discounts/HomeDiscounts";
import HomeSuppliers from "~/components/home/Suppliers/HomeSuppliers";

import * as motion from "motion/react-client";

export default async function Home() {
  return (
    <motion.main
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 16 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.8 }}
      key="home"
      layout
    >
      <HomeHero />
      <HomeCategories />
      <HomeCards />
      <HomeDiscounts />
      <HomeSuppliers />
    </motion.main>
  );
}
