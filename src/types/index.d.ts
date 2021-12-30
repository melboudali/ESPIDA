import { CreateShopifyProductQuery } from "../types";

export interface resType {
  data?: CreateShopifyProductQuery;
}

export interface postType {
  handle?: string | null;
  id: string;
  productType?: string | null;
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
  description?: string | null;
  tags?: Array<string | null | undefined> | null;
  handle?: string | null;
  productType?: string | null;
  publishedAt?: any | null;
  collections?: Array<{ title?: string | null } | null | undefined> | null;
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
