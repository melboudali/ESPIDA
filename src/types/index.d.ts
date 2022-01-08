import { CreateShopifyProductQuery } from "../types";

export interface resPostType {
  data?: CreateShopifyProductQuery;
}

export interface resCollectionType {
  data?: CreateShopifyCollectionQuery;
}

export interface postType {
  handle?: string | null;
  id: string;
  productType?: string | null;
}

export interface collectionType {
  id: string;
  title?: string | null;
  handle?: string | null;
}

export type variantType = {
  id: string;
  color?: string;
  image?: any;
  size?: string;
  storefrontId?: string | null;
  price?: string | null;
  compareAtPrice?: string | null;
};

export type variantsType = Array<
  | {
      id: string;
      price?: string | null;
      compareAtPrice?: string | null;
      title?: string | null;
      storefrontId?: string | null;
      image?: { gatsbyImageData: any } | null;
    }
  | null
  | undefined
>;

export type shopifyProduct = {
  id: string;
  title?: string | null;
  handle?: string | null;
  productType?: string | null;
  images?: Array<{ altText?: string | null; gatsbyImageData: any } | null | undefined> | null;
  variants?: Array<
    | {
        id: string;
        price?: string | null;
        compareAtPrice?: string | null;
        title?: string | null;
        storefrontId?: string | null;
        image?: { gatsbyImageData: any } | null;
      }
    | null
    | undefined
  > | null;
};
