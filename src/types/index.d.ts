export type shopifyProduct = {
  descriptionHtml?: string | null | undefined;
  id: string;
  title?: string | null | undefined;
  variants?:
    | Array<
        | {
            availableForSale?: boolean | null | undefined;
            price?: string | null | undefined;
            selectedOptions?:
              | Array<{ name?: string | null | undefined; value?: string | null | undefined } | null | undefined>
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
  images?: Array<{ gatsbyImageData: any } | null | undefined> | null | undefined;
};
