"use client";
import { Card, RangeSlider, Title } from "@mantine/core";
import styles from "./ShopFilters.module.scss";
import ArrowUp from "~/assets/svg/ArrowUp";
import Button from "~/components/global/Button/Button";

import { CheckboxGroup, Checkbox } from "@mantine/core";

const ShopFilters = () => {
  return (
    <section className={styles.filtersContainer}>
      <Card padding="sm" className={styles.filtersCard}>
        <span className={styles.filtersTitle}>
          <Title order={5}>Kategorije</Title>
          <ArrowUp />
        </span>

        <div className={styles.filtersOptions}>
          <Button
            className={styles.filtersCategoriesButton}
            includeStyles={false}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Title order={6}>Dukse</Title>
          </Button>

          <Button
            className={styles.filtersCategoriesButton}
            includeStyles={false}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Title order={6}>Majice</Title>
          </Button>

          <Button
            className={styles.filtersCategoriesButton}
            includeStyles={false}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Title order={6}>Trenerke</Title>
          </Button>

          <Button
            className={styles.filtersCategoriesButton}
            includeStyles={false}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Title order={6}>Jakne</Title>
          </Button>

          <Button
            className={styles.filtersCategoriesButton}
            includeStyles={false}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Title order={6}>Obuća</Title>
          </Button>

          <Button
            className={styles.filtersCategoriesButton}
            includeStyles={false}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Title order={6}>Zimska</Title>
          </Button>
        </div>
      </Card>

      <Card padding="sm" className={styles.filtersCard}>
        <span className={styles.filtersTitle}>
          <Title order={5}>Kategorije</Title>
          <ArrowUp />
        </span>

        <CheckboxGroup>
          <div className={styles.filtersCheckboxGroup}>
            <Checkbox
              value="M"
              labelPosition="left"
              label="M"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="L"
              labelPosition="left"
              label="L"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="XL"
              labelPosition="left"
              label="XL"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="XXL"
              labelPosition="left"
              label="XXL"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="XXXL"
              labelPosition="left"
              label="XXXL"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="XXXXL"
              labelPosition="left"
              label="XXXXL"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
          </div>
        </CheckboxGroup>
      </Card>

      <Card padding="sm" className={styles.filtersCard}>
        <span className={styles.filtersTitle}>
          <Title order={5}>Boje</Title>
          <ArrowUp />
        </span>

        <CheckboxGroup>
          <div className={styles.filtersCheckboxGroup}>
            <Checkbox
              value="red"
              labelPosition="left"
              label="Crvena"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="Plava"
              labelPosition="left"
              label="Plava"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="rose"
              labelPosition="left"
              label="Roza"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="purple"
              labelPosition="left"
              label="Ljubičasta"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="green"
              labelPosition="left"
              label="Zelena"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="yellow"
              labelPosition="left"
              label="Žuta"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
          </div>
        </CheckboxGroup>
      </Card>

      <Card padding="sm" className={styles.filtersCard}>
        <span className={styles.filtersTitle}>
          <Title order={5}>Cijena</Title>
          <ArrowUp />
        </span>

        <RangeSlider
          mt={24}
          step={1}
          min={0}
          max={230}
          label={(value) => `${value}€`}
          labelAlwaysOn
          defaultValue={[10, 20]}
          classNames={{ track: styles.filtersPriceTrack }}
        />
      </Card>

      <Card padding="sm" className={styles.filtersCard}>
        <span className={styles.filtersTitle}>
          <Title order={5}>Proizvođač</Title>
          <ArrowUp />
        </span>

        <CheckboxGroup>
          <div className={styles.filtersCheckboxGroup}>
            <Checkbox
              value="dunauone"
              labelPosition="left"
              label="Dunauone"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="xin-ban"
              labelPosition="left"
              label="Xin ban"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="lijepa-moda"
              labelPosition="left"
              label="Lijepa moda"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="coppa"
              labelPosition="left"
              label="Coppa"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="ouno"
              labelPosition="left"
              label="Ouno"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
          </div>
        </CheckboxGroup>
      </Card>
    </section>
  );
};

export default ShopFilters;
