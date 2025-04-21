import { Money } from "./shopifyGlobal";

export interface ProductPriceRange {
  minVariantPrice?: Money;
  maxVariantPrice?: Money;
}

export interface ProductImage {
  altText: string;
  height?: number;
  width?: number;
  id: string;
  url: string;
}

export interface Swatch {
  color: string;
}

export interface ProductOptionValue {
  id: string;
  name?: string;
  swatch?: Swatch;
}

export interface ProductOption {
  id: string;
  name?: string;
  optionValues?: ProductOptionValue[];
}

export interface ProductSelectedOption {
  name?: string;
  value?: string;
}

export interface ProductVariant {
  availableForSale?: boolean;
  id: string;
  image?: ProductImage;
  product?: Product;
  selectedOptions?: ProductSelectedOption[];
  title?: string;
  price?: Money;
}

export interface ProductVariantsEdge {
  cursor?: string;
  node: ProductVariant;
}

export interface ProductVariants {
  edges: ProductVariantsEdge[];
}

export interface ImageNode {
  cursor?: string;
  node: ProductImage;
}

export interface Images {
  edges: ImageNode[];
}

export interface TaxonomyCategory {
  id: string;
  name?: string;
  ancestors?: TaxonomyCategory;
}

export interface Product {
  availableForSale?: boolean;
  compareAtPriceRange?: ProductPriceRange;
  priceRange?: ProductPriceRange;
  category?: TaxonomyCategory;
  description?: string;
  featuredImage?: ProductImage;
  images?: Images;
  id: string;
  options?: ProductOption[];
  title?: string;
  variants?: ProductVariants;
  color?: string;
  size?: string;
  quantity?: number;
}
export interface ProductsEdge {
  cursor?: string;
  node: Product;
}

export type FilterType = "BOOLEAN" | "LIST" | "PRICE_RANGE";
export interface FilterValue {
  count?: number;
  id: string;
  input?: JSON;
  label?: string;
  swatch?: Swatch;
}

export interface Filter {
  id: string;
  label?: string;
  type?: FilterType;
  values?: FilterValue[];
}

export interface Products {
  edges: ProductsEdge[];
  filters?: Filter[];
}
