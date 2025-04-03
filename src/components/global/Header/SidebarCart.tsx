import Separator from "../Separator/Separator";
import Counter from "../Counter/Counter";
import Button from "../Button/Button";
import { breakpoints } from "~/utils/breakpoints";
import { Drawer, em, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import styles from "./SidebarCart.module.scss";

import Trash from "~/assets/svg/Trash";
import Cart from "~/assets/svg/Cart";

type Props = {
  opened: boolean;
  close: () => void;
};

const SidebarCart = ({ opened, close }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <Drawer
      opened={opened}
      onClose={close}
      position="right"
      size={isMobile ? "100%" : "lg"}
      classNames={{
        body: styles.drawerBody,
        header: styles.drawerContent,
        content: styles.drawerContent,
      }}
    >
      <div className={styles.drawerUpper}>
        <span className={styles.drawerTitle}>
          <Cart />
          <Title order={3} size={isMobile ? "h4" : "h3"} fw={700}>
            Košarica
          </Title>
        </span>

        <Separator />

        <ul className={styles.drawerProducts}>
          <li>
            <div className={styles.tempImg} />

            <div className={styles.drawerProduct}>
              <span>
                <Title order={5} size={isMobile ? "h6" : "h5"} fw={700}>
                  Dukserica s kapuljačom i dodatcima
                </Title>
                <Text size={isMobile ? "p" : "h6"}>L, crvena</Text>
              </span>

              <span className={styles.drawerProductPrice}>
                <Counter />
                <Text size={isMobile ? "h5" : "h4"} fw={700}>
                  99.99€
                </Text>
              </span>
            </div>

            <Button includeStyles={false} className={styles.drawerProductTrash}>
              <Trash />
            </Button>
          </li>

          <Separator />

          <li>
            <div className={styles.tempImg} />

            <div className={styles.drawerProduct}>
              <span>
                <Title order={5} size={isMobile ? "h6" : "h5"} fw={700}>
                  Dukserica s kapuljačom i dodatcima
                </Title>
                <Text size={isMobile ? "p" : "h6"}>L, crvena</Text>
              </span>

              <span className={styles.drawerProductPrice}>
                <Counter />
                <Text size={isMobile ? "h5" : "h4"} fw={700}>
                  99.99€
                </Text>
              </span>
            </div>

            <Button includeStyles={false} className={styles.drawerProductTrash}>
              <Trash />
            </Button>
          </li>
        </ul>
      </div>

      <div className={styles.drawerLower}>
        <Separator />

        <div className={styles.drawerCTA}>
          <span className={styles.drawerTotalPrice}>
            <Text size={isMobile ? "h5" : "h4"} fw={700}>
              Subtotal: 99.00€
            </Text>
            <Text size={isMobile ? "p" : "h6"}>
              Način dostave birate pri plaćanju.
            </Text>
          </span>

          <span>
            <Link href="/kosarica" className={styles.cartLink}>
              <Button>
                <Text size={isMobile ? "h5" : "h4"}>Nastavi na plaćanje</Text>
              </Button>
            </Link>

            <Link href="#">Pogledaj košaricu</Link>
          </span>
        </div>
      </div>
    </Drawer>
  );
};

export default SidebarCart;
