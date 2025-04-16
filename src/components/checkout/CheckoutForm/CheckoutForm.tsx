"use client";
import { em, Text, TextInput, Title } from "@mantine/core";
import styles from "./CheckoutForm.module.scss";
import Button from "~/components/global/Button/Button";
import Separator from "~/components/global/Separator/Separator";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import { useAppSelector } from "~/store/hooks";
import { selectCartItems } from "~/store/features/cart/cartSlice";
import { useForm } from "@mantine/form";
import {
  checkIfEmpty,
  checkStringLength,
  onlyAlphabet,
  onlyAlphanumeric,
  onlyEmail,
  onlyNumber,
} from "~/utils/validations";

const CheckoutForm = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);
  const items = useAppSelector(selectCartItems);
  const checkoutForm = useForm({
    mode: "uncontrolled",
    validateInputOnBlur: true,
    initialValues: {
      name: {
        first: "",
        last: "",
      },
      address: "",
      city: "",
      postNumber: "",
      email: "",
      contact: "",
    },
    validate: {
      name: {
        first: (value) => {
          if (checkIfEmpty(value)) return "Unesite vaše ime";
          if (!onlyAlphabet(value)) return "Molim koristite samo znakove A-Ž";
          if (checkStringLength(value, 64))
            return "Maksimalan broj znakova je 64";
        },
        last: (value) => {
          if (checkIfEmpty(value)) return "Unesite vaše ime";
          if (!onlyAlphabet(value)) return "Molim koristite samo znakove A-Ž";
          if (checkStringLength(value, 64))
            return "Maksimalan broj znakova je 64";
        },
      },
      address: (value) => {
        if (checkIfEmpty(value)) return "Unesite vašu adresu";
        if (!onlyAlphanumeric(value)) return "Neispravna adresa";
        if (checkStringLength(value, 88))
          return "Maksimalan broj znakova je 88";
      },
      city: (value) => {
        if (checkIfEmpty(value)) return "Unesite grad";
        if (!onlyAlphabet(value)) return "Neispravan naziv grada";
        if (checkStringLength(value, 30))
          return "Maksimalan broj znakova je 30";
      },
      postNumber: (value) => {
        if (checkIfEmpty(value)) return "Unesite poštanski broj";
        if (!onlyNumber(value)) return "Molim koristite samo brojeve";
        if (checkStringLength(value, 5)) return "Maksimalan broj znakova je 5";
      },
      email: (value) => {
        if (!onlyEmail(value)) return "Neispravan email";
        if (checkStringLength(value, 64))
          return "Maksimalan broj znakova je 64";
      },
      contact: (value) => {
        if (checkIfEmpty(value)) return "Molimo unesite vaš kontakt broj";
        if (!onlyNumber(value) || checkStringLength(value, 12, 9))
          return "Neispravan broj mobitela";
      },
    },
  });

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
              key={checkoutForm.key("name.first")}
              {...checkoutForm.getInputProps("name.first")}
            />
            <TextInput
              label="Prezime"
              required
              classNames={{ root: styles.formInputRoot }}
              key={checkoutForm.key("name.last")}
              {...checkoutForm.getInputProps("name.last")}
            />
          </span>

          <TextInput
            label="Ulica i kućni broj"
            required
            key={checkoutForm.key("address")}
            {...checkoutForm.getInputProps("address")}
          />
          <TextInput
            label="Grad"
            required
            key={checkoutForm.key("city")}
            {...checkoutForm.getInputProps("city")}
          />
          <TextInput
            label="Poštanski broj"
            required
            key={checkoutForm.key("postNumber")}
            {...checkoutForm.getInputProps("postNumber")}
          />
          <TextInput
            label="Email"
            key={checkoutForm.key("email")}
            {...checkoutForm.getInputProps("email")}
          />
          <TextInput
            label="Kontakt broj"
            required
            key={checkoutForm.key("contact")}
            {...checkoutForm.getInputProps("contact")}
          />
        </div>

        <Separator />

        {/* <span className={styles.formRadio}>
          <Radio />
          <Radio />
        </span> */}

        <span className={styles.formSubmit}>
          <Button type="submit" disabled={!items.length}>
            <Text size="h5">Završi narudžbu</Text>
          </Button>
        </span>
      </form>
    </section>
  );
};

export default CheckoutForm;
