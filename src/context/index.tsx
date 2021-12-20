import React, { createContext, useEffect, useState } from "react";
import Client from "shopify-buy";
import fetch from "isomorphic-fetch";

const client = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_STORE_URL!,
  storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN!,
});

interface defualtValuesType {
  cart: any[];
  isOpen: boolean;
  loading: boolean;
  onOpen: () => void;
  onClose: () => void;
  addVariantToCart: (variantId: string, quantity: number) => void;
  removeLineItem: () => void;
  updateLineItem: () => void;
  client: any;
  checkout: any;
}

const defaultValues: defualtValuesType = {
  cart: [],
  isOpen: false,
  loading: false,
  onOpen: () => {},
  onClose: () => {},
  addVariantToCart: () => {},
  removeLineItem: () => {},
  updateLineItem: () => {},
  client,
  checkout: {
    id: "",
    lineItems: [],
  },
};

export const StoreContext = createContext(defaultValues);

const isBrowser = typeof window !== `undefined`;
const localStorageKey = `shopify_checkout_id`;

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout);
  //   const [loading, setLoading] = useState(false);
  //   const [didJustAddToCart, setDidJustAddToCart] = useState(false);

  const setCheckoutItem = (checkout: any) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id);
    }

    setCheckout(checkout);
  };

  useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser ? localStorage.getItem(localStorageKey) : null;

      if (existingCheckoutID) {
        try {
          const existingCheckout = await client.checkout.fetch(existingCheckoutID);
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout);
            return;
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, "");
        }
      }

      await client.checkout.create().then((checkout) => {
        // Do something with the checkout
        console.log(checkout);
        setCheckoutItem(checkout);
      });
    };

    initializeCheckout();
  }, []);

  const addVariantToCart = async (variantId: string, quantity: number) => {
    // setLoading(true);

    const checkoutID = checkout.id;

    const lineItemsToUpdate = [
      {
        variantId,
        quantity,
      },
    ];

    return await client.checkout.addLineItems(checkoutID, lineItemsToUpdate).then((res: any) => {
      setCheckout(res);
      //   setLoading(false);
      //   setDidJustAddToCart(true);
      //   setTimeout(() => setDidJustAddToCart(false), 3000);
    });
  };

  //   const removeLineItem = (checkoutID: any, lineItemID: any) => {
  //     setLoading(true);

  //     return client.checkout.removeLineItems(checkoutID, [lineItemID]).then((res: any) => {
  //       setCheckout(res);
  //       setLoading(false);
  //     });
  //   };

  //   const updateLineItem = (checkoutID: any, lineItemID: any, quantity: any) => {
  //     setLoading(true);

  //     const lineItemsToUpdate = [{ id: lineItemID, quantity: parseInt(quantity, 10) }];

  //     return client.checkout.updateLineItems(checkoutID, lineItemsToUpdate).then((res) => {
  //       setCheckout(res);
  //       setLoading(false);
  //     });
  //   };

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addVariantToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
