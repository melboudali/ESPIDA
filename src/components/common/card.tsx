import React, { useContext, useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import styled from "styled-components";
import { StoreContext } from "../../context";
import { shopifyProduct, variantType } from "../../types";
import { getColor, getColorsAndImages } from "../../utils";
import PropTypes from "prop-types";

const Card = styled.div`
  --flex: 100% 0 0;
  z-index: 1;
  flex: var(--flex);
  width: 0;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  transition: all 150ms ease-out;
  .gatsby_image {
    width: 100%;
    height: 384px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &:hover {
    z-index: 2;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    transform: translateY(-2px);
  }
  @media (min-width: 451px) {
    --flex: 300px 0 0;
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

const ColorComponentWrapper = styled.button<{ color: string }>`
  position: relative;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 2px solid ${({ color }) => (color !== "#fff" && color !== "#f5f5dc" ? color : "rgba(0, 0, 0, 0.12)")};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const ToolTip = styled.div`
  padding: 5px;
  position: absolute;
  top: -36px;
  left: 50%;
  font-size: 0.8125rem;
  font-weight: 500;
  text-transform: capitalize;
  white-space: nowrap;
  color: var(--white);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  transform: translateX(-50%);
  background: var(--black);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -10px;
    border-top: 5px solid var(--black);
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid transparent;
    transform: translateX(-50%);
  }
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
  }
`;

const NewPrice = styled.p`
  color: var(--black);
`;

const OldPrice = styled.div`
  color: var(--lightGrey);
  text-decoration: line-through;
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

interface ColorComponentProps {
  color: string;
  variant: variantType;
  selectedVariant: variantType;
  setSelectedVariant: Function;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addLineItems } = useContext(StoreContext);
  const [variants] = useState(getColorsAndImages(product.variants!));
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  return (
    <Card>
      <Link to={`/collections/${product.productType}/${product.handle}`}>
        <GatsbyImage image={selectedVariant.image} alt="product_image" className="gatsby_image" />
      </Link>
      <Details>
        <ColorsWrapper>
          <p>{selectedVariant.color}</p>
          <Colors>
            {variants.map(({ id, color, ...rest }) => (
              <ColorComponent
                key={id}
                color={color!}
                variant={{ id, color, ...rest }}
                selectedVariant={selectedVariant}
                setSelectedVariant={setSelectedVariant}
              />
            ))}
          </Colors>
        </ColorsWrapper>
        <Link to={`/collections/${product.productType}/${product.handle}`}>
          <Title title={product.title!}>{product.title}</Title>
          <Price>
            <NewPrice>${selectedVariant.price}</NewPrice>
            {selectedVariant.compareAtPrice && <OldPrice>${selectedVariant.compareAtPrice}</OldPrice>}
          </Price>
        </Link>
      </Details>
      <AddToCartButton onClick={() => addLineItems!(selectedVariant.storefrontId!, 1)}>add to cart</AddToCartButton>
    </Card>
  );
};

const ColorComponent = ({ color, variant, selectedVariant, setSelectedVariant }: ColorComponentProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const onMouseEnterLeave = () => setShowTooltip(!showTooltip);

  return (
    <ColorComponentWrapper
      color={getColor(color)}
      onMouseEnter={onMouseEnterLeave}
      onMouseLeave={onMouseEnterLeave}
      onClick={() => {
        if (selectedVariant !== variant) setSelectedVariant(variant);
      }}
    >
      {showTooltip && <ToolTip>{color}</ToolTip>}
    </ColorComponentWrapper>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

ColorComponent.propTypes = {
  color: PropTypes.string.isRequired,
  variant: PropTypes.object.isRequired,
  selectedVariant: PropTypes.object.isRequired,
  setSelectedVariant: PropTypes.func.isRequired,
};

export default ProductCard;
