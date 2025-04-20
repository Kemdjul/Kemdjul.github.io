"use client";
import { em, RangeSlider, Title } from "@mantine/core";
import styles from "./ShopFilters.module.scss";
import Button from "~/components/global/Button/Button";

import { CheckboxGroup, Checkbox } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { breakpoints } from "~/utils/breakpoints";
import ShopFiltersCard from "../ShopFiltersCard/ShopFiltersCard";
import { useEffect, useState } from "react";
import { useAppDispatch } from "~/store/hooks";
import { clearAllFilters, setFilter } from "~/store/features/shop/filtersSlice";

const ShopFilters = () => {
  const dispatch = useAppDispatch();
  const isMobile = useMediaQuery(`(max-width: ${em(breakpoints.lg)})`);

  const [category, setCategory] = useState<string | string[]>("");
  const [size, setSize] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [price, setPrice] = useState<[number, number]>([0, 100]);
  const [supplier, setSupplier] = useState<string[]>([]);

  useEffect(() => {
    dispatch(clearAllFilters());
  }, [dispatch]);

  const toggleFilter = (filter: string, items: string | string[]) => {
    if (typeof items === "string") {
      if (category === items) {
        dispatch(setFilter({ filter: "category", items: "" }));
        setCategory("");
      } else {
        dispatch(setFilter({ filter: "category", items: items }));
        setCategory(items);
      }

      return;
    }

    switch (filter) {
      case "size":
        setSize(items);
        dispatch(setFilter({ filter: "size", items: items }));
        break;

      case "color":
        setColor(items);
        dispatch(setFilter({ filter: "color", items: items }));
        break;

      case "supplier":
        setSupplier(items);
        dispatch(setFilter({ filter: "supplier", items: items }));
        break;

      default:
        return;
    }
  };

  return (
    <section className={styles.filtersContainer}>
      {isMobile && (
        <div className={styles.filtersMobileTitle}>
          <Button>
            <p>Gotovo</p>
          </Button>
        </div>
      )}

      <ShopFiltersCard title="Kategorije" defaultShow>
        <div className={styles.filtersOptions}>
          <Button
            className={`${styles.filtersCategoriesButton} ${category === "dukse" ? styles.active : ""}`}
            includeStyles={false}
            onClick={() => {
              toggleFilter("category", "dukse");
            }}
          >
            <Title order={6}>Dukse</Title>
          </Button>

          <Button
            className={`${styles.filtersCategoriesButton} ${category === "majice" ? styles.active : ""}`}
            includeStyles={false}
            onClick={() => {
              toggleFilter("category", "majice");
            }}
          >
            <Title order={6}>Majice</Title>
          </Button>

          <Button
            className={`${styles.filtersCategoriesButton} ${category === "trenerke" ? styles.active : ""}`}
            includeStyles={false}
            onClick={() => {
              toggleFilter("category", "trenerke");
            }}
          >
            <Title order={6}>Trenerke</Title>
          </Button>

          <Button
            className={`${styles.filtersCategoriesButton} ${category === "jakne" ? styles.active : ""}`}
            includeStyles={false}
            onClick={() => {
              toggleFilter("category", "jakne");
            }}
          >
            <Title order={6}>Jakne</Title>
          </Button>

          <Button
            className={`${styles.filtersCategoriesButton} ${category === "obuca" ? styles.active : ""}`}
            includeStyles={false}
            onClick={() => {
              toggleFilter("category", "obuca");
            }}
          >
            <Title order={6}>Obuća</Title>
          </Button>

          <Button
            className={`${styles.filtersCategoriesButton} ${category === "zimska" ? styles.active : ""}`}
            includeStyles={false}
            onClick={() => {
              toggleFilter("category", "zimska");
            }}
          >
            <Title order={6}>Zimska</Title>
          </Button>
        </div>
      </ShopFiltersCard>

      <ShopFiltersCard title="Veličine" defaultShow>
        <CheckboxGroup
          value={size}
          onChange={(value) => toggleFilter("size", value)}
        >
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
              value="2XL"
              labelPosition="left"
              label="2XL"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="3XL"
              labelPosition="left"
              label="3XL"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
            <Checkbox
              value="4XL"
              labelPosition="left"
              label="4XL"
              classNames={{ body: styles.filtersCheckboxBody }}
            />
          </div>
        </CheckboxGroup>
      </ShopFiltersCard>

      <ShopFiltersCard title="Boje">
        <CheckboxGroup
          value={color}
          onChange={(value) => toggleFilter("color", value)}
        >
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
      </ShopFiltersCard>

      <ShopFiltersCard title="Cijena" defaultShow>
        <RangeSlider
          mt={24}
          step={1}
          min={0}
          max={100}
          label={(value) => `${value}€`}
          labelAlwaysOn
          defaultValue={price}
          classNames={{ track: styles.filtersPriceTrack }}
        />
      </ShopFiltersCard>

      <ShopFiltersCard title="Proizvođač">
        <CheckboxGroup
          value={supplier}
          onChange={(value) => toggleFilter("supplier", value)}
        >
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
      </ShopFiltersCard>
    </section>
  );
};

export default ShopFilters;
