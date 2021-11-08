import React from "react";
import styled from "styled-components";
import { shopifyProduct } from "../../types";
import { GatsbyImage } from "gatsby-plugin-image";
const Card = styled.div`
  flex: 305px 4 1;
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
    font-weight: 500;
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
  font-weight: 500;
  font-size: 0.81rem;
  line-height: 13px;
  text-transform: capitalize;
  color: var(--black);
  text-overflow: ellipsis;
  overflow: hidden;
  width: 90%;
  white-space: nowrap;
`;

const PriceWrapper = styled.div``;

const Price = styled.p``;

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
        <PriceWrapper>
          <Price>
            ${product.variants![0]?.price} - <del>{product.variants![0]?.compareAtPrice}</del>
          </Price>
        </PriceWrapper>
      </Details>
    </Card>
  );
};

export default ProductCard;
