import { graphql } from "gatsby";
import React from "react";
import { CollectionQuery } from "../../gatsby-graphql";
import styled from "styled-components";
import PageTitle from "../components/common/pageTitle";
import { shopifyProduct } from "../types";
import ProductCard from "../components/common/card";

const Cards = styled.div`
  --justifyContent: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: var(--justifyContent);
  gap: 20px;
  margin-top: 60px;
  @media (min-width: 750px) {
    --justifyContent: start;
  }
`;

interface Props {
  pageContext: { id: string; title: string };
  data: CollectionQuery;
}

const Collection = ({
  pageContext: { title },
  data: {
    collectionProducts: { nodes },
  },
}: Props) => {
  return (
    <>
      <PageTitle quantity={nodes.length}>{title}</PageTitle>
      <Cards>
        {nodes.map((node: shopifyProduct) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </Cards>
    </>
  );
};

export default Collection;

export const query = graphql`
  query collection($id: String) {
    collectionProducts: allShopifyProduct(
      filter: { collections: { elemMatch: { id: { eq: $id } } } }
      sort: { order: DESC, fields: createdAt }
    ) {
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
