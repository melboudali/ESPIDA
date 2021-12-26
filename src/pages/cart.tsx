import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { StoreContext } from "../context";

const CartWrapper = styled.section`
  margin-top: 40px;
`;

const Title = styled.h1`
  --fontSize: 1.8rem;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0;
  font-size: var(--fontSize);
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  line-height: 35px;
  color: #000;
  @media (min-width: 375px) {
    --fontSize: 1.875rem;
  }
`;

const ItemsCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  font-size: 0.6875rem;
  letter-spacing: normal;
  line-height: 13px;
  color: #000;
  border-radius: 5px;
  background: #adadad;
`;

interface Props {}

const cart = (props: Props) => {
  const { checkout } = React.useContext(StoreContext);

  const items = checkout ? checkout.lineItems : [];

  const quantity = items.reduce((total: any, item: any) => {
    return total + item.quantity;
  }, 0);
  console.log(items[0]);
  return (
    <CartWrapper>
      <Title>
        Shopping Cart
        {!!quantity && <ItemsCount>{quantity}</ItemsCount>}
      </Title>

      <a href={checkout.webUrl} target="_blank">
        click me
      </a>
      {items && (
        <div>
          {checkout.lineItems.map((qtty: any) => (
            <div key={qtty.id}>
              <p>title: {qtty.title}</p>
              <p>quantity: {qtty.quantity}</p>
              <p>variant id: {qtty.variant.id}</p>
              {/* {qtty.variant.image && (
                <GatsbyImage image={qtty.variant.image} alt="product_image" className="gatsby_image" style={{ width: "100px" }} />
              )} */}
              <img src={qtty.variant.image.src} alt="jackets" style={{ width: "100px" }} />
              <p>variant title: {qtty.variant.title}</p>
              <p>variant price: {qtty.variant.price}</p>
            </div>
          ))}
        </div>
      )}
    </CartWrapper>
  );
};

export default cart;
