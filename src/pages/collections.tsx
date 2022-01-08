import { graphql } from "gatsby";
import React from "react";
import { AllCollectionsProductsQuery } from "../../gatsby-graphql";

interface CollectionsProps {
  data: AllCollectionsProductsQuery;
}

const Collections = ({ data: { allShopifyProduct } }: CollectionsProps) => {
  return <div>Collections page</div>;
};

export default Collections;

export const query = graphql`
  query allCollectionsProducts {
    allShopifyProduct(sort: { order: DESC, fields: createdAt }) {
      nodes {
        id
        title
        handle
        productType
        images {
          altText
          gatsbyImageData
        }
        variants {
          id
          title
          storefrontId
          price
          compareAtPrice
          image {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
