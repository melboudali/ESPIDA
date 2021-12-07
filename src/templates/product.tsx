import React from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
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

const Tags = styled.div`
  display: flex;
  gap: 10px;

  p {
    padding: 6px 10px;
    border: 1px solid #d7d7d7;
    border-radius: 30px;
    font-size: 0.6875rem;
    line-height: 8px;
    text-transform: uppercase;
    color: var(--black);
  }
`;

const ProductTitle = styled.h1`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 15px;
  text-transform: uppercase;
  color: #282828;
  margin: 10px 0 20px;
`;

const RateFlex = css`
  display: flex;
  gap: 6px;
`;

const Rate = styled.div`
  ${RateFlex}
  p {
    font-size: 0.625rem;
    line-height: 8px;
    text-transform: capitalize;
    color: #6b6b6b;
    align-self: flex-end;
  }
`;

const Stars = styled.div`
  ${RateFlex}
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
        <Tags>
          <p>{productData?.productType}</p>
          {productData?.collections?.map((collection) => (
            <p key={collection?.id}>{collection?.title}</p>
          ))}
        </Tags>
        <ProductTitle>{productData?.title}</ProductTitle>
        <Rate>
          <Stars>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.99524 0.521791L5.08239 4.40022L0.802649 5.02416C0.0351658 5.13548 -0.272413 6.08165 0.284158 6.62358L3.38046 9.64078L2.64812 13.9029C2.5163 14.6734 3.32773 15.2504 4.00733 14.8901L7.83596 12.8777L11.6646 14.8901C12.3442 15.2475 13.1556 14.6734 13.0238 13.9029L12.2915 9.64078L15.3878 6.62358C15.9443 6.08165 15.6368 5.13548 14.8693 5.02416L10.5895 4.40022L8.67668 0.521791C8.33395 -0.16953 7.3409 -0.178317 6.99524 0.521791Z"
                fill="#6B6B6B"
              />
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.99524 0.521791L5.08239 4.40022L0.802649 5.02416C0.0351658 5.13548 -0.272413 6.08165 0.284158 6.62358L3.38046 9.64078L2.64812 13.9029C2.5163 14.6734 3.32773 15.2504 4.00733 14.8901L7.83596 12.8777L11.6646 14.8901C12.3442 15.2475 13.1556 14.6734 13.0238 13.9029L12.2915 9.64078L15.3878 6.62358C15.9443 6.08165 15.6368 5.13548 14.8693 5.02416L10.5895 4.40022L8.67668 0.521791C8.33395 -0.16953 7.3409 -0.178317 6.99524 0.521791Z"
                fill="#6B6B6B"
              />
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.99524 0.521791L5.08239 4.40022L0.802649 5.02416C0.0351658 5.13548 -0.272413 6.08165 0.284158 6.62358L3.38046 9.64078L2.64812 13.9029C2.5163 14.6734 3.32773 15.2504 4.00733 14.8901L7.83596 12.8777L11.6646 14.8901C12.3442 15.2475 13.1556 14.6734 13.0238 13.9029L12.2915 9.64078L15.3878 6.62358C15.9443 6.08165 15.6368 5.13548 14.8693 5.02416L10.5895 4.40022L8.67668 0.521791C8.33395 -0.16953 7.3409 -0.178317 6.99524 0.521791Z"
                fill="#6B6B6B"
              />
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.99524 0.521791L5.08239 4.40022L0.802649 5.02416C0.0351658 5.13548 -0.272413 6.08165 0.284158 6.62358L3.38046 9.64078L2.64812 13.9029C2.5163 14.6734 3.32773 15.2504 4.00733 14.8901L7.83596 12.8777L11.6646 14.8901C12.3442 15.2475 13.1556 14.6734 13.0238 13.9029L12.2915 9.64078L15.3878 6.62358C15.9443 6.08165 15.6368 5.13548 14.8693 5.02416L10.5895 4.40022L8.67668 0.521791C8.33395 -0.16953 7.3409 -0.178317 6.99524 0.521791Z"
                fill="#6B6B6B"
              />
            </svg>
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.99524 0.521791L5.08239 4.40022L0.802649 5.02416C0.0351658 5.13548 -0.272413 6.08165 0.284158 6.62358L3.38046 9.64078L2.64812 13.9029C2.5163 14.6734 3.32773 15.2504 4.00733 14.8901L7.83596 12.8777L11.6646 14.8901C12.3442 15.2475 13.1556 14.6734 13.0238 13.9029L12.2915 9.64078L15.3878 6.62358C15.9443 6.08165 15.6368 5.13548 14.8693 5.02416L10.5895 4.40022L8.67668 0.521791C8.33395 -0.16953 7.3409 -0.178317 6.99524 0.521791Z"
                fill="#6B6B6B"
              />
            </svg>
          </Stars>
          <p></p>
        </Rate>
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
        id
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
