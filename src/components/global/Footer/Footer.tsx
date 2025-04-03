import NavLink from "~/components/global/NavLink/NavLink";
import styles from "./Footer.module.scss";
import Truck from "~/assets/svg/Truck";
import HandMoney from "~/assets/svg/HandMoney";
import { Text, Title } from "@mantine/core";
import Return from "~/assets/svg/Return";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={`${styles.footerText} ${styles.footerTitle}`}>
        <Title order={6} fw={500}>
          Trgovački obrt Kassandra
        </Title>
        <Text size="p">Trg Ljudevita Gaja 5A, OSIJEK</Text>
      </div>

      <div className={`${styles.footerText} ${styles.footerFirst}`}>
        <NavLink href="/">
          <Text size="p" td="underline">
            Naslovnica
          </Text>
        </NavLink>
        <NavLink href="/trgovina">
          <Text size="p" td="underline">
            Trgovina
          </Text>
        </NavLink>
        <NavLink href="/kontakt">
          <Text size="p" td="underline">
            Kontakt
          </Text>
        </NavLink>
        <NavLink href="/o-nama">
          <Text size="p" td="underline">
            O nama
          </Text>{" "}
        </NavLink>
        <NavLink href="/uvjeti-pruzanja-usluga-i-politika-o-privatnosti">
          <Text size="p" td="underline">
            Uvjeti pružanja usluge i politika o privatnosti
          </Text>{" "}
        </NavLink>
      </div>

      <div className={`${styles.footerText} ${styles.footerSecond}`}>
        <div>
          <Truck />
          <Title order={6}>Dostava unutar tri radna dana</Title>
        </div>

        <div>
          <Return />
          <Title order={6}>Povratak sredstva nakon 21 dan</Title>
        </div>

        <div>
          <HandMoney />
          <Title order={6}>Plaćanje pouzećem</Title>
        </div>
      </div>

      <div className={`${styles.footerText} ${styles.footerThird}`}>
        <NavLink href="#">
          <Text size="p" td="underline">
            Bijeli veš
          </Text>{" "}
        </NavLink>
        <NavLink href="#">
          <Text size="p" td="underline">
            Obuća
          </Text>
        </NavLink>
        <NavLink href="#">
          <Text size="p" td="underline">
            Zimski artikli
          </Text>{" "}
        </NavLink>
        <NavLink href="#">
          <Text size="p" td="underline">
            Ljetni artikli
          </Text>{" "}
        </NavLink>
      </div>

      <div className={`${styles.footerText} ${styles.footerFourth}`}>
        <NavLink href="#">
          <Text size="p" td="underline">
            Dukserice
          </Text>
        </NavLink>
        <NavLink href="#">
          <Text size="p" td="underline">
            Majice
          </Text>
        </NavLink>
        <NavLink href="#">
          <Text size="p" td="underline">
            Trenerke
          </Text>
        </NavLink>
        <NavLink href="#">
          <Text size="p" td="underline">
            Haljine
          </Text>
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
