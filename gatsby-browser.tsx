import React from "react";
import { StoreProvider } from "./src/context";
import Layout from "./src/components/layout";

interface wrapPageElementInterface {
  element: React.ReactNode;
  props: object;
}

export const wrapPageElement = ({ element, props }: wrapPageElementInterface) => (
  <StoreProvider>
    <Layout {...props}>{element}</Layout>
  </StoreProvider>
);
