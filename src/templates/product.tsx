import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { ShopifyProductQuery } from "../../gatsby-graphql";
import { GatsbyImage } from "gatsby-plugin-image";
import { getVariantImage } from "../utils/index";

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
  height: 600px;
  .gatsby_image {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const OtherImages = styled.div``;

interface productProps {
  data: ShopifyProductQuery;
}

interface smallImageProps {
  gatsbyImageData: any;
}

const product = ({ data: { productData } }: productProps) => {
  return (
    <ProductWrapper>
      <Images>
        <OtherImages>
          {productData?.variants?.map((variant) => {
            if (variant?.image) return <SmallImage gatsbyImageData={variant.image.gatsbyImageData} />;
          })}
        </OtherImages>
        <MainImage>
          <GatsbyImage image={productData?.variants![0]?.image?.gatsbyImageData} alt="product_image" className="gatsby_image" />
        </MainImage>
      </Images>
      <Details>hello world {productData?.title}</Details>
    </ProductWrapper>
  );
};

const SmallImage = ({ gatsbyImageData }: smallImageProps) => {
  return (
    <div>
      <GatsbyImage image={gatsbyImageData} alt="product_image" className="gatsby_image" />
    </div>
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
