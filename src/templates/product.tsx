import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { ShopifyProductQuery } from "../../gatsby-graphql";
import { GatsbyImage } from "gatsby-plugin-image";
import { getColorsAndImages } from "../utils/index";

const ProductWrapper = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`;

const Images = styled.div`
  flex: 0 0 60%;
  display: flex;
  align-items: center;
  gap: 20px;
  height: 600px;
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

const OtherImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SmallImage = styled.div<{ selected: boolean }>`
  .gatsby_image {
    width: 127px;
    height: 127px;
    object-fit: cover;
    border-radius: 10px;
    border: 2px solid ${({ selected }) => (selected ? "red" : "green")};
  }
`;

interface productProps {
  data: ShopifyProductQuery;
}

const product = ({ data: { productData } }: productProps) => {
  const [selectedImage, setSelectedImage] = React.useState(productData?.variants![0]?.image?.gatsbyImageData);
  return (
    <ProductWrapper>
      <Images>
        <OtherImages>
          {getColorsAndImages(productData?.variants!).map(({ id, image }) => (
            <SmallImage selected={image === selectedImage}>
              <GatsbyImage key={id} image={image} alt="product_image" className="gatsby_image" />
            </SmallImage>
          ))}
        </OtherImages>
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
        id
        title
        compareAtPrice
        price
        image {
          gatsbyImageData
        }
      }
    }
  }
`;
