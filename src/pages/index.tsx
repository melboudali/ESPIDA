import React from "react";
import Seo from "../components/common/seo";
import Categories from "../components/indexPage/categories";
import SectionTitle from "../components/common/sectionTitle";
import styled from "styled-components";
import ProductCard from "../components/common/productCard";
import { graphql } from "gatsby";
import { AllShopifyProductQuery } from "../../gatsby-graphql";
import { shopifyProduct } from "../types";

const CardsSection = styled.section`
  margin: 80px 0;
`;
const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 60px;
`;

interface IndexPageProps {
  data: AllShopifyProductQuery;
}

const IndexPage = ({ data: { bestSellers, newReleases } }: IndexPageProps) => (
  <>
    <Seo title="Home" />
    <Categories />
    <CardsSection>
      <SectionTitle title="Best Sellers" />
      <Cards>
        {bestSellers.nodes.map((node: shopifyProduct) => (
          <ProductCard product={node} />
        ))}
      </Cards>
    </CardsSection>
  </>
);

export default IndexPage;

export const query = graphql`
  query allShopifyProduct {
    bestSellers: allShopifyProduct(filter: { collections: { elemMatch: { title: { eq: "best sellers" } } } }) {
      nodes {
        title
        description
        tags
        collections {
          title
        }
        images {
          altText
          gatsbyImageData
        }
        publishedAt
      }
    }
    newReleases: allShopifyProduct(filter: { collections: { elemMatch: { title: { eq: "new releases" } } } }) {
      nodes {
        title
        description
        tags
        collections {
          title
        }
        images {
          altText
          gatsbyImageData
        }
        publishedAt
      }
    }
  }
`;
