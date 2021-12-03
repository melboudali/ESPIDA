import { graphql } from "gatsby";
import React from "react";
import { ShopifyProductQuery } from "../../gatsby-graphql";

interface productProps {
  data: ShopifyProductQuery;
}

const product = ({ data: { productData } }: productProps) => {
  return <div>hello world {productData?.title}</div>;
};

export default product;

export const query = graphql`
  query shopifyProduct($id: String) {
    productData: shopifyProduct(id: { eq: $id }) {
      title
      collections {
        title
      }
      productType
      variants {
        compareAtPrice
        price
        image {
          gatsbyImageData
        }
      }
    }
  }
`;
