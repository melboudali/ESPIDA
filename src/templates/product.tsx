import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { ShopifyProductQuery } from "../../gatsby-graphql";

const ProductWrapper = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Images = styled.div`
  flex: 2;
`;

const Details = styled.div`
  flex: 1;
`;

interface productProps {
  data: ShopifyProductQuery;
}

const product = ({ data: { productData } }: productProps) => {
  return (
    <ProductWrapper>
      <Images>hello world {productData?.title}</Images>
      <Details>hello world {productData?.title}</Details>
    </ProductWrapper>
  );
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
