"use client";
import { useState } from "react";
import Link from "next/link";
import NavLink from "../NavLink/NavLink";
import Button from "../Button/Button";
import SearchForm from "../SearchForm/SearchForm";
import SidebarCart from "./SidebarCart";
import { Burger, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { slideDown, fillFromLeft } from "~/utils/animations";
import styles from "./Header.module.scss";

import Cart from "~/assets/svg/Cart";
import Search from "~/assets/svg/Search";
import * as motion from "motion/react-client";
import Close from "~/assets/svg/Close";

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

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
                <span className={styles.headerIcon}>
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
                    <Cart />
                  </Button>
                </span>

                <span className={styles.headerIcon}>
                  <Burger
                    opened={openMenu}
                    onClick={() => setOpenMenu(!openMenu)}
                    color="white"
                  />
                </span>
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
