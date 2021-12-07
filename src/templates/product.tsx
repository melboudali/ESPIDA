import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { ShopifyProductQuery } from "../../gatsby-graphql";
import { GatsbyImage } from "gatsby-plugin-image";
import { getColorsAndImages } from "../utils/index";

const ProductWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const Images = styled.div`
  display: flex;
  flex: 0 0 60%;
  gap: 20px;
  height: 600px;
`;

const MainImage = styled.div`
  height: 600px;
  width: 599px;
  .gatsby_image {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

const OtherImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 600px;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const SmallImage = styled.div<{ selected: boolean }>`
  .gatsby_image {
    height: 124px;
    width: 124px;
    border-radius: 10px;
    border: 3px solid ${({ selected }) => (selected ? "rgba(0, 0, 0, .4)" : "var(--white)")};
    object-fit: cover;
  }
`;

const Details = styled.div`
  flex: 0 0 40%;
`;

const Tag = styled.p`
  font-size: 0.6875rem;
  line-height: 8px;
  text-transform: uppercase;
  color: var(--black);
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
            <SmallImage
              selected={image === selectedImage}
              onClick={() => {
                if (image !== selectedImage) return setSelectedImage(image);
              }}
            >
              <GatsbyImage key={id} image={image} alt="product_image" className="gatsby_image" />
            </SmallImage>
          ))}
        </OtherImages>
        <MainImage>
          <GatsbyImage image={selectedImage} alt="product_image" className="gatsby_image" />
        </MainImage>
      </Images>
      <Details>
        <h1></h1>
        {productData?.title}
      </Details>
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
