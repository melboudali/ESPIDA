import React from "react";
import styled from "styled-components";
import { shopifyProduct } from "../../types";

const Card = styled.div`
  width: 305px;
  height: 300px;
  background-color: red;
  border-radius: 10px;
`;

interface ProductCardProps {
  product: shopifyProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return <Card>{product.title}</Card>;
};

export default ProductCard;
