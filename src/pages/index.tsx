import React from "react";
import Seo from "../components/common/seo";
import Categories from "../components/indexPage/categories";
import SectionTitle from "../components/common/sectionTitle";
import styled from "styled-components";
import ProductCard from "../components/common/productCard";
import { graphql } from "gatsby";
import { AllShopifyProductQuery } from "../../gatsby-graphql";
import { shopifyProduct } from "../types";
import { StaticImage } from "gatsby-plugin-image";

const SectionContainer = styled.section`
  margin: 80px 0;
`;
const Cards = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 60px;
  flex-wrap: wrap;
`;

const Wrapper = styled.div`
  background-color: #fafafa;
`;

interface IndexPageProps {
  data: AllShopifyProductQuery;
}

const IndexPage = ({ data: { bestSellers, newReleases } }: IndexPageProps) => (
  <>
    <Seo title="Home" />
    <Categories />
    <SectionContainer>
      <SectionTitle title="Best Sellers" />
      <Cards>
        {bestSellers.nodes.map((node: shopifyProduct) => (
          <ProductCard key={node.id} product={node} />
        ))}
        {/* <ProductCard key={bestSellers.nodes[0].id} product={bestSellers.nodes[0]} /> */}
      </Cards>
    </SectionContainer>
    <SectionContainer>
      <SectionTitle title="new releases" link="/collections/new-releases">
        <StaticImage
          src="https://images.unsplash.com/photo-1542219550-2da790bf52e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80"
          alt="new releases"
          className="img"
        />
      </SectionTitle>
      <Cards>
        {newReleases.nodes.map((node: shopifyProduct) => (
          <ProductCard key={node.id} product={node} />
        ))}
      </Cards>
    </SectionContainer>
    <SectionContainer>
      <Wrapper>
        <SectionTitle title="See what others have to say" />
      </Wrapper>
    </SectionContainer>
  </>
);

export default IndexPage;

export const query = graphql`
  query allShopifyProduct {
    bestSellers: allShopifyProduct(
      filter: { collections: { elemMatch: { title: { eq: "best sellers" } } } }
      limit: 4
      sort: { order: DESC, fields: createdAt }
    ) {
      nodes {
        ...AllShopifyProductFragment
      }
    }
    newReleases: allShopifyProduct(
      filter: { collections: { elemMatch: { title: { eq: "new releases" } } } }
      limit: 8
      sort: { order: DESC, fields: createdAt }
    ) {
      nodes {
        ...AllShopifyProductFragment
      }
    }
  }

  fragment AllShopifyProductFragment on ShopifyProduct {
    id
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
    variants {
      id
      price
      compareAtPrice
      title
      image {
        gatsbyImageData
      }
    }
    publishedAt
  }
`;
