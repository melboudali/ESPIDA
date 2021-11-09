import React from "react";
import styled from "styled-components";
import { shopifyProduct } from "../../types";
import { GatsbyImage } from "gatsby-plugin-image";
const Card = styled.div`
  flex: 305px;
  .gatsby_image {
    width: 100%;
    height: 384px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const Details = styled.div`
  padding: 15px 5px;
`;

const ColorsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 0;
    font-size: 0.75rem;
    line-height: 9px;
    text-transform: capitalize;
    color: var(--grey);
  }
`;

const Colors = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Title = styled.h2`
  margin: 10px 0px;
  font-size: 0.81rem;
  font-weight: 500;
  line-height: 13px;
  text-transform: capitalize;
  color: var(--black);
  text-overflow: ellipsis;
  overflow: hidden;
  width: 90%;
  white-space: nowrap;
`;

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  p {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 16px;
    margin: 0;
    &:first-child {
      color: var(--black);
    }
    &:last-child {
      color: var(--lightGrey);
      text-decoration: line-through;
    }
  }
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 12px 0;
  color: var(--white);
  background-color: var(--black);
  font-weight: 700;
  font-size: 0.8125rem;
  line-height: 9px;
  text-transform: uppercase;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

interface ProductCardProps {
  product: shopifyProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <GatsbyImage image={product.images![0]!.gatsbyImageData} alt={product.images![0]!.altText!} className="gatsby_image" />
      <Details>
        <ColorsWrapper>
          <p>{product.images![0]?.altText}</p>
          <Colors></Colors>
        </ColorsWrapper>
        <Title title={product.title!}>{product.title}</Title>
        <Price>
          <p>${product.variants![0]?.price}</p>
          <p>${product.variants![0]?.compareAtPrice}</p>
        </Price>
      </Details>
      <AddToCartButton onClick={() => console.log("Add to cart")}>add to cart</AddToCartButton>
    </Card>
  );
};

export default ProductCard;
