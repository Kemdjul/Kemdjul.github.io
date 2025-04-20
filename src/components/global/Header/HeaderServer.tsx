"use server";
import React from "react";
import Header from "./Header";
import { retrieveCart } from "~/utils/shopify";

const HeaderServer = () => {
  async function fetchCartProducts(cartId: string): Promise<any> {
    "use server";

    return retrieveCart(
      process.env.SHOPIFY_ENDPOINT ?? "",
      process.env.SHOPIFY_API_TOKEN ?? "",
      cartId
    );
  }

  return (
    <>
      <Header fetchCartProducts={fetchCartProducts} />
    </>
  );
};

export default HeaderServer;
