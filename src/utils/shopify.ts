"use server";
import { gql, GraphQLClient } from "graphql-request";
import { Cart } from "~/types/cart";
import { Product, Products, ProductVariant } from "~/types/products";

const graphQLClient = new GraphQLClient(process.env.SHOPIFY_ENDPOINT ?? "", {
  headers: {
    "X-Shopify-Storefront-Access-Token": process.env.SHOPIFY_API_TOKEN ?? "",
  },
});

export async function getAllProducts(): Promise<Products> {
  const getAllProductsQuery = gql`
    {
      products(first: 250) {
        edges {
          node {
            id
            title
            handle
            category {
              id
              name
            }
            priceRange {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              altText
              url
            }
            options {
              id
              name
              optionValues {
                id
                name
              }
            }
          }
        }
      }
    }
  `;

  try {
    const getAllProductsResult: { products: Products } =
      await graphQLClient.request(getAllProductsQuery);
    return getAllProductsResult?.products;
  } catch (err: unknown) {
    if (typeof err === "string") throw new Error(err, undefined);
    throw err;
  }
}

export const getProduct = async (id: string): Promise<Product> => {
  const productQuery = gql`
    query getProduct($id: ID!) {
      product(id: $id) {
        id
        title
        availableForSale
        description
        priceRange {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
        featuredImage {
          url
          altText
        }
        images(first: 5) {
          edges {
            node {
              id
              url
              altText
            }
            cursor
          }
        }
        options {
          id
          name
          optionValues {
            id
            name
          }
        }
        variants(first: 10) {
          edges {
            node {
              availableForSale
              id
              selectedOptions {
                name
                value
              }
              image {
                altText
                height
                width
                id
                url
              }
              price {
                amount
                currencyCode
              }
              title
            }
          }
        }
      }
    }
  `;
  const variables = {
    id,
  };
  try {
    const data: { product: Product } = await graphQLClient.request(
      productQuery,
      variables
    );
    return data?.product;
  } catch (err) {
    if (typeof err === "string") throw new Error(err);
    throw err;
  }
};

export async function addToCart(
  itemId: string,
  quantity: number | string
): Promise<Cart> {
  if (typeof quantity === "string") quantity = parseInt(quantity);

  const createCartMutation = gql`
    mutation createCart($cartInput: CartInput) {
      cartCreate(input: $cartInput) {
        cart {
          id
        }
      }
    }
  `;
  const variables = {
    cartInput: {
      lines: [
        {
          quantity: quantity,
          merchandiseId: itemId,
        },
      ],
    },
  };
  try {
    return await graphQLClient.request(createCartMutation, variables);
  } catch (err) {
    if (typeof err === "string") throw new Error(err);
    throw err;
  }
}

export async function updateCart(
  cartId: string,
  itemId: string,
  quantity: string
): Promise<Cart> {
  const updateCartMutation = gql`
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
        }
      }
    }
  `;
  const variables = {
    cartId: cartId,
    lines: [
      {
        quantity: parseInt(quantity),
        merchandiseId: itemId,
      },
    ],
  };
  try {
    return await graphQLClient.request(updateCartMutation, variables);
  } catch (err) {
    if (typeof err === "string") throw new Error(err);
    throw err;
  }
}

export async function removeProductFromCartPromise(
  cartId: string,
  itemId: string
): Promise<Cart> {
  const remoteProductFromCartMutation = gql`
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
        }
        userErrors {
          field
          message
        }
      }
    }
  `;
  const variables = {
    cartId: cartId,
    lineIds: [itemId],
  };

  try {
    return await graphQLClient.request(
      remoteProductFromCartMutation,
      variables
    );
  } catch (err) {
    if (typeof err === "string") throw new Error(err);
    throw err;
  }
}

export async function retrieveCart(cartId: string): Promise<Cart> {
  const cartQuery = gql`
    query cartQuery($cartId: ID!) {
      cart(id: $cartId) {
        id
        createdAt
        updatedAt
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              cost {
                amountPerQuantity {
                  amount
                  currencyCode
                }
                totalAmount {
                  amount
                  currencyCode
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                  image {
                    altText
                    height
                    width
                    id
                    url
                  }
                  product {
                    id
                    title
                  }
                  title
                }
              }
            }
          }
        }
        estimatedCost {
          totalAmount {
            amount
          }
        }
      }
    }
  `;
  const variables = {
    cartId,
  };
  try {
    const data: { cart: Cart } = await graphQLClient.request(
      cartQuery,
      variables
    );
    return data?.cart;
  } catch (err) {
    if (typeof err === "string") throw new Error(err);
    throw err;
  }
}

export const getCheckoutUrl = async (cartId: string): Promise<any> => {
  const getCheckoutUrlQuery = gql`
    query checkoutURL($cartId: ID!) {
      cart(id: $cartId) {
        checkoutUrl
      }
    }
  `;
  const variables = {
    cartId: cartId,
  };

  try {
    return await graphQLClient.request(getCheckoutUrlQuery, variables);
  } catch (err) {
    if (typeof err === "string") throw new Error(err);
    throw err;
  }
};
