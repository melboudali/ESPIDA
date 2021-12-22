import React, { useState, useEffect, useContext } from "react";
import Client from "shopify-buy";
const SHOPIFY_CHECKOUT_STORAGE_KEY = "shopify_checkout_id";

const client = Client.buildClient({
  storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN!,
  domain: process.env.GATSBY_SHOPIFY_STORE_URL!,
});

interface defualtValuesType {
  cart: any[];
  addVariantToCart?: (variantId: any, quantity: any) => Promise<void>;
  client: any;
  checkout: any;
}

interface StoreProviderProps {
  children: React.ReactNode;
}

const defaultValues: defualtValuesType = {
  cart: [],
  client,
  checkout: {
    lineItems: [],
  },
};

export const StoreContext = React.createContext(defaultValues);

const isBrowser = typeof window !== `undefined`;
const localStorageKey = `shopify_checkout_id`;

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [checkout, setCheckout] = React.useState(defaultValues.checkout);
  const [loading, setLoading] = React.useState(false);
  const [didJustAddToCart, setDidJustAddToCart] = React.useState(false);

  const setCheckoutItem = (checkout: any) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id);
    }

    setCheckout(checkout);
  };

  React.useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser ? localStorage.getItem(localStorageKey) : null;

      if (existingCheckoutID && existingCheckoutID !== `null`) {
        try {
          const existingCheckout = await client.checkout.fetch(existingCheckoutID);
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout);
            return;
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, null!);
        }
      }

      const newCheckout = await client.checkout.create();
      setCheckoutItem(newCheckout);
    };

    initializeCheckout();
  }, []);

  const addVariantToCart = (variantId: any, quantity: any) => {
    setLoading(true);

    const checkoutID = checkout.id;

    const lineItemsToUpdate = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    return client.checkout.addLineItems(checkoutID, lineItemsToUpdate).then((res: any) => {
      setCheckout(res);
      setLoading(false);
      setDidJustAddToCart(true);
      setTimeout(() => setDidJustAddToCart(false), 3000);
    });
  };

  const removeLineItem = (checkoutID: any, lineItemID: any) => {
    setLoading(true);

    return client.checkout.removeLineItems(checkoutID, [lineItemID]).then((res) => {
      setCheckout(res);
      setLoading(false);
    });
  };

  const updateLineItem = (checkoutID: any, lineItemID: any, quantity: any) => {
    setLoading(true);

    const lineItemsToUpdate = [{ id: lineItemID, quantity: parseInt(quantity, 10) }];

    return client.checkout.updateLineItems(checkoutID, lineItemsToUpdate).then((res: any) => {
      setCheckout(res);
      setLoading(false);
    });
  };

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addVariantToCart,
        checkout,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
