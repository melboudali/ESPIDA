import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { ShopifyProductQuery } from "../../gatsby-graphql";
import { GatsbyImage } from "gatsby-plugin-image";

const ProductWrapper = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const Images = styled.div`
  flex: 0 0 60%;
`;

const Details = styled.div`
  flex: 0 0 40%;
`;

const MainImage = styled.div`
  width: 599px;

  .gatsby_image {
    width: 599px;
  }
`;

const OtherImages = styled.div``;

interface productProps {
  data: ShopifyProductQuery;
}

const product = ({ data: { productData } }: productProps) => {
  return (
    <ProductWrapper>
      <Images>
        <OtherImages></OtherImages>
        <MainImage>
          <GatsbyImage image={productData?.variants![0]?.image?.gatsbyImageData} alt="product_image" className="gatsby_image" />
        </MainImage>
      </Images>
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
