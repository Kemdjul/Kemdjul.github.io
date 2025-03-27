"use client";
import Link from "next/link";
import styles from "./NavLink.module.scss";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
  href: string;
  replace?: boolean;
  scroll?: boolean;
  prefetch?: boolean;
  shallow?: boolean;
};

const NavLink = ({
  children,
  href,
  replace = false,
  scroll = true,
  prefetch = true,
  shallow = false,
}: Props) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${styles.link} ${pathname === href && styles.active}`}
      replace={replace}
      scroll={scroll}
      prefetch={prefetch}
      shallow={shallow}
    >
      {children}
    </Link>
  );
};

export default NavLink;
