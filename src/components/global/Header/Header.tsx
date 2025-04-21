"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";
import Button from "../Button/Button";
import SearchForm from "../SearchForm/SearchForm";
import SidebarCart from "./SidebarCart";
import { Burger, em, Title } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { slideDown, fillFromLeft } from "~/utils/animations";
import styles from "./Header.module.scss";

import CartIcon from "~/assets/svg/Cart";
import Search from "~/assets/svg/Search";
import * as motion from "motion/react-client";
import Close from "~/assets/svg/Close";
import { breakpoints } from "~/utils/breakpoints";
import { useAppDispatch } from "~/store/hooks";
import { setCart } from "~/store/features/cart/cartSlice";
import { retrieveCart } from "~/utils/shopify";

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const cartId = localStorage.getItem("cartId") ?? "";
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await retrieveCart(cartId);
        dispatch(setCart(res));
        console.log(res);
      } catch (err) {
        console.log(err);
        throw err;
      }
    };

    if (cartId) fetch();
  }, [cartId, dispatch]);

  return (
    <>
      <header className={`${styles.header}`}>
        <motion.div variants={slideDown} initial="hidden" animate="visible">
          {/* Search mobile */}
          {showSearch ? (
            <div className={styles.headerUpper}>
              <motion.span
                variants={fillFromLeft}
                initial="hidden"
                animate="visible"
                className={styles.headerSearch}
              >
                <SearchForm />
              </motion.span>

              <span className={styles.headerSearchCloseIcon}>
                <Button
                  className={styles.headerIconButton}
                  onClick={() => setShowSearch(false)}
                  includeStyles={false}
                >
                  <Close />
                </Button>
              </span>
            </div>
          ) : (
            <div className={styles.headerUpper}>
              {/* Logo desktop */}
              <Link href="/" className={styles.headerUpperLogo}>
                <Title
                  order={3}
                  fw={700}
                  td="none"
                  c="white"
                  className="mantine-hidden-before-lg"
                >
                  T.O. Kassandra
                </Title>

                {/* Logo mobile */}
                <Title
                  order={3}
                  size="h5"
                  fw={500}
                  td="none"
                  c="white"
                  className="mantine-hidden-from-lg"
                >
                  Kassandra
                </Title>
              </Link>

              {/* Search desktop */}
              <span
                className={`${styles.headerSearch} mantine-hidden-before-lg`}
              >
                <SearchForm />
              </span>

              {/* Icons */}
              <div className={styles.headerIcons}>
                <span
                  className={`${styles.headerIcon} ${styles.headerIconSearch}`}
                >
                  <Button
                    onClick={() => setShowSearch(true)}
                    className={styles.headerIconButton}
                    includeStyles={false}
                  >
                    <Search />
                  </Button>
                </span>

                <span className={styles.headerIcon}>
                  <Button
                    onClick={open}
                    className={styles.headerIconButton}
                    includeStyles={false}
                  >
                    <CartIcon />
                  </Button>
                </span>

                {isMobile && (
                  <span className={styles.headerIcon}>
                    <Burger
                      opened={openMenu}
                      onClick={() => setOpenMenu(!openMenu)}
                      size={isMobile ? "sm" : "md"}
                      color="white"
                    />
                  </span>
                )}
              </div>
            </div>
          )}

          {/* NavLinks desktop */}
          <div className={`${styles.headerLower} mantine-hidden-before-lg`}>
            <nav className={styles.headerLowerNav}>
              <NavLink href="/">Naslovnica</NavLink>
              <NavLink href="/trgovina">Trgovina</NavLink>
              <NavLink href="#">dolor</NavLink>
              <NavLink href="#">consectetur</NavLink>
              <NavLink href="#">adipiscing</NavLink>
              <NavLink href="#">elit</NavLink>
            </nav>
          </div>
        </motion.div>
      </header>

      <SidebarCart opened={opened} close={close} />
    </>
  );
};

export default Header;
