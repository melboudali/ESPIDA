import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { AllCollectionsProductsQuery } from "../../gatsby-graphql";
import Seo from "../components/common/seo";
import PageTitle from "../components/common/pageTitle";
import ProductCard from "../components/common/card";
import { shopifyProduct } from "../types";
import PropTypes from "prop-types";

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
}: CollectionsProps) => (
  <>
    <Seo title="Collections" location="/collections" />
    <PageTitle quantity={nodes.length}>collections</PageTitle>
    <Cards>
      {nodes.map((node: shopifyProduct) => (
        <ProductCard key={node.id} product={node} />
      ))}
    </Cards>
  </>
);

Collections.propTypes = {
  data: PropTypes.object.isRequired,
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
