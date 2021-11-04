import React from "react";
import Seo from "../components/common/seo";
import Categories from "../components/indexPage/categories";
import SectionTitle from "../components/common/sectionTitle";
import styled from "styled-components";
import ProductCard from "../components/common/productCard";
import { graphql } from "gatsby";
import { AllShopifyProductQuery } from "../../gatsby-graphql";
import { shopifyProduct } from "../types";

const CardsWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const Cards = styled.section`
  margin-bottom: 50px;
`;

interface IndexPageProps {
  data: AllShopifyProductQuery;
}

const IndexPage = ({ data: { allShopifyProduct } }: IndexPageProps) => (
  <>
    <Seo title="Home" />
    <Categories />
    <Cards>
      <SectionTitle title="Best Sellers" />
      <CardsWrapper>
        {allShopifyProduct.nodes.map((node: shopifyProduct) => (
          <ProductCard product={node} />
        ))}
      </CardsWrapper>
    </Cards>
  </>
);

export default IndexPage;

export const query = graphql`
  query allShopifyProduct {
    allShopifyProduct {
      nodes {
        descriptionHtml
        id
        variants {
          availableForSale
          price
          selectedOptions {
            name
            value
          }
        }
        title
        images {
          gatsbyImageData
        }
      }
    }
  }
`;
