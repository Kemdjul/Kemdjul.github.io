"use client";
import { em, Text, TextInput, Title } from "@mantine/core";
import Radio from "~/components/global/Radio/Radio";
import styles from "./CheckoutForm.module.scss";
import Button from "~/components/global/Button/Button";
import Separator from "~/components/global/Separator/Separator";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";

const CheckoutForm = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  return (
    <section className={styles.container}>
      <Title order={3} size={isMobile ? "h5" : "h3"} fw={700}>
        Vaši podaci
      </Title>

      <Separator />

      <form className={styles.form}>
        <div className={styles.formInputs}>
          <span className={styles.formName}>
            <TextInput
              label="Ime"
              required
              classNames={{ root: styles.formInputRoot }}
            />
            <TextInput
              label="Prezime"
              required
              classNames={{ root: styles.formInputRoot }}
            />
          </span>

          <TextInput label="Ulica i kućni broj" required />
          <TextInput label="Grad" required />
          <TextInput label="Poštanski broj" required />
          <TextInput label="Email" />
          <TextInput label="Kontakt broj" />
        </div>

        <Separator />

        <span className={styles.formRadio}>
          <Radio />
          <Radio />
        </span>

        <span className={styles.formSubmit}>
          <Button type="submit">
            <Text size="h5">Završi narudžbu</Text>
          </Button>
        </span>
      </form>
    </section>
  );
};

export default CheckoutForm;
