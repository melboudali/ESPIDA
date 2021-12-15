import React, { useState } from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import { ShopifyProductQuery } from "../../gatsby-graphql";
import { GatsbyImage } from "gatsby-plugin-image";
// import Client from "shopify-buy";
// import fetch from "isomorphic-fetch";
import { getColorsAndImages, getColor, getSize } from "../utils/index";

const ProductWrapper = styled.section`
  --gap: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 40px;
  gap: var(--gap);
  @media (min-width: 750px) {
    --gap: unset;
  }
`;

const Images = styled.div`
  --flex: 100%;
  --flexDirection: column;
  --height: fit-content;
  display: flex;
  flex-direction: var(--flexDirection);
  flex: var(--flex);
  justify-content: center;
  gap: 20px;
  height: var(--height);
  @media (min-width: 750px) {
    --flex: 60%;
    --flexDirection: row;
    --height: 600px;
  }
`;

const MainImage = styled.div`
  --width: 100%;
  --order: 1;
  --height: 400px;
  height: var(--height);
  width: var(--width);
  order: var(--order);
  .gatsby_image {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  @media (min-width: 750px) {
    --width: 599px;
    --order: 2;
    --height: 600px;
  }
`;

const OtherImages = styled.div`
  --order: 2;
  --height: 124px;
  --flexDirection: row;
  --width: calc(100vw - 20px);
  width: var(--width);
  display: flex;
  flex-direction: var(--flexDirection);
  gap: 20px;
  order: var(--order);
  height: var(--height);
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  @media (min-width: 750px) {
    --order: 1;
    --height: 600px;
    --flexDirection: column;
    --width: fit-content;
  }
`;

const SmallImage = styled.button<{ isSelected: boolean }>`
  .gatsby_image {
    height: 124px;
    width: 124px;
    border-radius: 10px;
    border: 3px solid ${({ isSelected }) => (isSelected ? "rgba(0, 0, 0, .4)" : "var(--white)")};
    object-fit: cover;
  }
`;

const Details = styled.div`
  --flex: 100%;

  flex: var(--flex);
  @media (min-width: 750px) {
    --flex: 40%;
  }
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;

  p {
    padding: 6px 10px;
    margin: 0;
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
  line-height: 20px;
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
  align-items: center;
  p {
    margin: 0;
    font-size: 0.625rem;
    line-height: 8px;
    text-transform: capitalize;
    color: #6b6b6b;
  }
`;

const Stars = styled.div`
  ${RateFlex}
`;

const Prices = styled.div`
  display: flex;
  gap: 10px;
  margin: 20px 0;
`;

const PriceStyle = css`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 23px;
  margin: 0;
`;

const NewPrice = styled.p`
  ${PriceStyle}
  color: var(--black);
`;

const OldPrice = styled.p`
  ${PriceStyle}
  text-decoration: line-through;
  color: #989898;
`;

const Description = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 17px;
  text-transform: capitalize;
  color: #4f4f4f;
`;

const ColorAndSizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0 0;
  p {
    margin: 0;
    font-weight: 700;
    font-size: 0.8125rem;
    line-height: 11px;
    text-transform: uppercase;
    color: #282828;
  }
`;

const ColorAndSizeWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const ColorElement = styled.button<{ color: string; isSelected: boolean }>`
  position: relative;
  background-color: ${({ color }) => color};
  height: 16px;
  width: 16px;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  &:after {
    position: absolute;
    content: "";
    height: 65%;
    width: 65%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid ${({ color, isSelected }) => (isSelected ? (color === "#fff" ? "var(--black)" : "var(--white)") : color)};
    border-radius: 30px;
  }
`;

const Size = styled.button<{ isSelected: boolean }>`
  font-size: 0.6875rem;
  line-height: 8px;
  text-transform: uppercase;
  padding: 6px 5px;
  color: ${({ isSelected }) => (isSelected ? "var(--white)" : "#262626")};
  background: ${({ isSelected }) => (isSelected ? "var(--black)" : "#f3f3f3")};
  border: 1px solid #bebebe;
`;

const AddToCart = styled.button`
  width: calc(100% - 34px);
  margin: 30px 17px 0;
  padding: 15px 0;
  background-color: var(--black);
  color: var(--white);
  font-weight: 300;
  font-size: 1.125rem;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
`;

// const client = Client.buildClient(
//   {
//     domain: process.env.GATSBY_SHOPIFY_STORE_URL,
//     storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
//   },
//   fetch
// );

interface ProductProps {
  data: ShopifyProductQuery;
  pageContext: { id: string };
}

const Product = ({ data: { productData }, pageContext: { id } }: ProductProps) => {
  const [variants] = useState(getColorsAndImages(productData?.variants!));
  const [selectedVariant, setSelectedVariant] = useState(productData?.variants![0]);
  const [selectedSize, setSelectedSize] = useState(getSize(productData?.variants!)[0].size);

  const addToCart = () => {
    console.log({ ...selectedVariant, id, title: productData?.title, size: selectedSize, variantId: selectedVariant?.id });
  };

  return (
    <ProductWrapper>
      <Images>
        <OtherImages>
          {variants.map(({ id, image }) => (
            <SmallImage
              key={id}
              aria-label="image"
              isSelected={image === selectedVariant?.image?.gatsbyImageData}
              onClick={() => {
                if (image !== selectedVariant?.image) setSelectedVariant(productData?.variants?.find((variant) => variant?.id === id));
              }}
            >
              <GatsbyImage key={id} image={image} alt="product_image" className="gatsby_image" />
            </SmallImage>
          ))}
        </OtherImages>
        <MainImage>
          <GatsbyImage image={selectedVariant?.image?.gatsbyImageData} alt="product_image" className="gatsby_image" />
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
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.2319 5.13554L10.1358 4.53917L8.30526 0.83423C8.1407 0.503166 7.81972 0.335815 7.49873 0.335815C7.1797 0.335815 6.86095 0.500927 6.69583 0.83423L4.86477 4.53889L0.768315 5.1347C0.0337067 5.24104 -0.260696 6.14468 0.27186 6.6624L3.2352 9.54486L2.53389 13.6161C2.43427 14.1977 2.89854 14.6642 3.4185 14.6642C3.55647 14.6642 3.69835 14.6314 3.83464 14.5592L7.49929 12.6372L11.1637 14.5598C11.2997 14.6312 11.4413 14.6636 11.5787 14.6636C12.0992 14.6636 12.5643 14.1988 12.4647 13.617L11.7642 9.54542L14.7281 6.66352C15.2609 6.1458 14.9665 5.24188 14.2319 5.13554ZM10.825 8.5833L10.3179 9.07639L10.4377 9.77266L10.984 12.9476L8.12587 11.4478L7.49957 11.1193L7.50041 2.24272L8.92848 5.1333L9.24136 5.7666L9.94127 5.86846L13.138 6.33386L10.825 8.5833Z"
                fill="#6B6B6B"
              />
            </svg>
          </Stars>
          <p>606 Reviews</p>
        </Rate>
        <Prices>
          <NewPrice>${selectedVariant?.price}</NewPrice>
          {selectedVariant?.compareAtPrice && <OldPrice>${selectedVariant?.compareAtPrice}</OldPrice>}
        </Prices>
        <Description>{productData?.description}</Description>
        <ColorAndSizeContainer>
          <p>color: {selectedVariant?.title?.split(" /")[0]}</p>
          <ColorAndSizeWrapper>
            {variants.map(({ id, color }) => (
              <ColorElement
                aria-label={color}
                key={id}
                color={getColor(color!)}
                isSelected={id === selectedVariant?.id}
                onClick={() => {
                  if (id !== selectedVariant?.id) setSelectedVariant(productData?.variants?.find((variant) => variant?.id === id));
                }}
              />
            ))}
          </ColorAndSizeWrapper>
        </ColorAndSizeContainer>
        <ColorAndSizeContainer>
          <p>size: {selectedSize}</p>
          <ColorAndSizeWrapper>
            {getSize(productData?.variants!).map(({ id, size }) => (
              <Size key={id} aria-label={size} isSelected={selectedSize === size} onClick={() => setSelectedSize(size)}>
                {size}
              </Size>
            ))}
          </ColorAndSizeWrapper>
        </ColorAndSizeContainer>
        <AddToCart aria-label="add to cart" onClick={addToCart}>
          add to cart
        </AddToCart>
      </Details>
    </ProductWrapper>
  );
};

export default Product;

export const query = graphql`
  query shopifyProduct($id: String) {
    productData: shopifyProduct(id: { eq: $id }) {
      title
      description
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
