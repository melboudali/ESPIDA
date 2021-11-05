export type shopifyProduct = {
  title?: string | null | undefined;
  description?: string | null | undefined;
  tags?: Array<string | null | undefined> | null | undefined;
  publishedAt?: any | null | undefined;
  collections?: Array<{ title?: string | null | undefined } | null | undefined> | null | undefined;
  images?: Array<{ altText?: string | null | undefined; gatsbyImageData: any } | null | undefined> | null | undefined;
};
