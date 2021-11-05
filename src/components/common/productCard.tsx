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

interface ProductCardProps {
  product: shopifyProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card>
      <GatsbyImage image={product.images![0]!.gatsbyImageData} alt={product.images![0]!.altText!} className="gatsby_image" />
      {product.title}
    </Card>
  );
};

export default ProductCard;
