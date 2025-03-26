"use client";
import { Breadcrumbs, Anchor, Card, Select, Title, Text } from "@mantine/core";
import Link from "next/link";
import ArrowDown from "~/assets/svg/ArrowDown";
import Button from "~/components/global/Button/Button";
import styles from "./ProductDescription.module.scss";

const ProductDescription = () => {
  const items = [
    { title: "Trgovina", href: "#" },
    { title: "Duksa", href: "#" },
  ];

  const colorSelectData = ["Crvena", "Zelena", "Žuta", "Crna"];
  const sizeSelectData = ["M", "L", "XL", "XXL", "XXXL", "XXXXL"];

  return (
    <section className={styles.container}>
      <div>
        <Breadcrumbs>
          {items.map((item, index) => (
            <Anchor href={item.href} key={index}>
              {item.title}
            </Anchor>
          ))}
        </Breadcrumbs>
        <span className={styles.productTitle}>
          <Title order={3} fw={"700"}>
            Dukse s kapuljačom
          </Title>
          <Title order={5} c={"#26733A"}>
            Dostupno
          </Title>
        </span>
      </div>

      <div className={styles.productSelects}>
        <div className={styles.productSelectContainer}>
          <Title order={6}>Boja:</Title>
          <Select
            placeholder="Odaberi boju..."
            data={colorSelectData}
            comboboxProps={{
              transitionProps: { transition: "fade-down", duration: 200 },
            }}
          />
        </div>

        <div className={styles.productSelect}>
          <div className={styles.productSelectWithGuide}>
            <Title order={6}>Veličina:</Title>
            <Select
              placeholder="Odaberi veličinu..."
              data={sizeSelectData}
              comboboxProps={{
                transitionProps: { transition: "fade-down", duration: 200 },
              }}
            />
          </div>

          <Link href="#">
            <Text size="p">Vodič za veličine</Text>
          </Link>
        </div>
      </div>

      <div className={styles.productCards}>
        <Card padding="md" shadow="md" className={styles.productCard}>
          <Title order={5}>Opis o proizvodu</Title>
          <ArrowDown />
        </Card>

        <Card padding="md" shadow="md" className={styles.productCard}>
          <Title order={5}>Sastav</Title>
          <ArrowDown />
        </Card>
      </div>

      <div className={styles.productCTA}>
        <span className={styles.productPrices}>
          <Title order={5} c="#666666" td="line-through">
            99.99€
          </Title>
          <Title order={4} fw={700}>
            99.99€
          </Title>
        </span>

        <Button onClick={() => {}}>Dodaj u košaricu</Button>
      </div>

      <Text size="h6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mollis
        nulla. Integer scelerisque tellus ut diam lobortis vehicula. Donec eu
        purus sit amet nisi aliquet lacinia et in purus.
      </Text>
    </section>
  );
};

export default ProductDescription;
