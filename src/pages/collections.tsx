import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { AllCollectionsProductsQuery } from "../../gatsby-graphql";
import ProductCard from "../components/common/card";
import PageTitle from "../components/common/pageTitle";
import { shopifyProduct } from "../types";

const Wrapper = styled.section`
  margin-top: 40px;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
`;

interface CollectionsProps {
  data: AllCollectionsProductsQuery;
}

const Collections = ({
  data: {
    allShopifyProduct: { nodes },
  },
}: CollectionsProps) => {
  return (
    <Wrapper>
      <PageTitle quantity={nodes.length}>collections</PageTitle>
      <Cards>
        {nodes.map((node: shopifyProduct) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </Cards>
    </Wrapper>
  );
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
      totalCount
    }
  }
`;
