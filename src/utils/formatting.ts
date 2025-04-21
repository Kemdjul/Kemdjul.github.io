import { CartEdge } from "~/types/cart";
import { Product, ProductVariantsEdge } from "~/types/products";

export const formatToProductVariant = (
  product: Product,
  variant: ProductVariantsEdge
): CartEdge => {
  return {
    node: {
      cost: {
        amountPerQuantity: {
          amount: variant.node.price?.amount ?? "",
          currencyCode: "EUR",
        },
        totalAmount: {
          amount: variant.node.price?.amount ?? "",
          currencyCode: "EUR",
        },
      },
      id: variant.node.id,
      product: product,
      merchandise: {
        id: variant.node.id,
        image: variant.node.image,
        product: product,
        selectedOptions: variant.node.selectedOptions,
        title: variant.node.title,
        price: variant.node.price,
      },
      quantity: 1,
      title: `${variant.node.selectedOptions[0].value} / ${variant.node.selectedOptions[1].value}`,
    },
  };
};
