import React from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN!,
  domain: process.env.GATSBY_SHOPIFY_STORE_URL!,
});

interface defualtValuesType {
  addLineItems?: (variantId: string | number, quantity: number) => Promise<void>;
  removeLineItems?: (lineItemID: string) => Promise<void>;
  updateLineItems?: (lineItemID: string, quantity: number) => Promise<void>;
  client: any;
  checkout: Client.Cart;
  loading: boolean;
}

interface StoreProviderProps {
  children: React.ReactNode;
}

const defaultValues: defualtValuesType = {
  client,
  checkout: {
    id: "",
    lineItems: [],
    checkoutUrl: "",
    lineItemCount: 0,
    subtotalPrice: "0",
    completedAt: "0",
  },
  loading: false,
};

export const StoreContext = React.createContext(defaultValues);

const isBrowser = typeof window !== `undefined`;
const localStorageKey = `shopify_checkout_id`;
console.log(typeof client);
export const StoreProvider = ({ children }: StoreProviderProps) => {
  const [checkout, setCheckout] = React.useState(defaultValues.checkout);
  const [loading, setLoading] = React.useState(false);

  const setCheckoutItem = (checkout: any) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id);
    }

    setCheckout(checkout);
  };

  React.useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser ? localStorage.getItem(localStorageKey) : "null";

      if (existingCheckoutID && existingCheckoutID !== "null") {
        try {
          const existingCheckout = await client.checkout.fetch(existingCheckoutID);
          if (!existingCheckout.completedAt) return setCheckoutItem(existingCheckout);
        } catch (e) {
          localStorage.setItem(localStorageKey, "null");
        }
      }

      const newCheckout = await client.checkout.create();
      setCheckoutItem(newCheckout);
    };

    initializeCheckout();
  }, []);

  const addLineItems = async (variantId: string | number, quantity: number) => {
    setLoading(true);
    const res = await client.checkout.addLineItems(checkout.id, [
      {
        variantId,
        quantity,
      },
    ]);

    setCheckout(res);
    setLoading(false);
  };

  const removeLineItems = async (lineItemID: string) => {
    setLoading(true);
    const res = await client.checkout.removeLineItems(checkout.id, [lineItemID]);
    setCheckout(res);
    setLoading(false);
  };

  const updateLineItems = async (lineItemID: string, quantity: number) => {
    setLoading(true);
    const res = await client.checkout.updateLineItems(checkout.id, [{ id: lineItemID, quantity }]);
    setCheckout(res);
    setLoading(false);
  };

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addLineItems,
        updateLineItems,
        removeLineItems,
        checkout,
        loading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
