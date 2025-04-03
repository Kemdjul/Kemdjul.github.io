import { gql, GraphQLClient } from "graphql-request";

export async function getAllProducts(endpoint: string, token: string) {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": token,
    },
  });

  const getAllProductsQuery = gql`
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            handle
            priceRange {
              minVariantPrice {
                amount
              }
            }
            featuredImage {
              altText
              url
            }
          }
        }
      }
    }
  `;

  try {
    const getAllProductsResult =
      await graphQLClient.request(getAllProductsQuery);
    return getAllProductsResult?.products.edges;
  } catch (err) {
    throw new Error(err, undefined);
  }
}

export const getProduct = async (
  endpoint: string,
  token: string,
  id: string
) => {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": token,
    },
  });

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
      }
    }
  `;
  const variables = {
    id,
  };
  try {
    const data = await graphQLClient.request(productQuery, variables);
    return data?.product;
  } catch (err) {
    throw new Error(err);
  }
};

export async function addToCart(
  endpoint: string,
  token: string,
  itemId: string,
  quantity: string
) {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": token,
    },
  });

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
          quantity: parseInt(quantity),
          merchandiseId: itemId,
        },
      ],
    },
  };
  try {
    return await graphQLClient.request(createCartMutation, variables);
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateCart(
  endpoint: string,
  token: string,
  cartId: string,
  itemId: string,
  quantity: string
) {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": token,
    },
  });

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
    throw new Error(err);
  }
}

export async function retrieveCart(
  endpoint: string,
  token: string,
  cartId: string
) {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": token,
    },
  });

  const cartQuery = gql`
    query cartQuery($cartId: ID!) {
      cart(id: $cartId) {
        id
        createdAt
        updatedAt

        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
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
    const data = await graphQLClient.request(cartQuery, variables);
    return data?.cart;
  } catch (err) {
    throw new Error(err);
  }
}

export const getCheckoutUrl = async (
  endpoint: string,
  token: string,
  cartId: string
) => {
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Storefront-Access-Token": token,
    },
  });

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
    throw new Error(err);
  }
};
