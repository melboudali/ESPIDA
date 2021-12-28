import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
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

const CartAndCheckoutWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 40px;
`;

const CartItems = styled.div`
  border-top: 1px solid #ddd;
  flex: 60%;
`;

const CartItem = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  button {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
  }
  img {
    border-radius: 10px;
    width: 200px;
  }

  &:nth-child(odd) {
    background: #efef;
  }

  &:nth-child(even) {
    background: #fff;
  }
`;

const Details = styled.div`
  flex: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  gap: 10px;
  font-weight: 500;
  h3 {
    margin: 0;
    line-height: 20px;
    text-transform: capitalize;
    color: var(--black);
  }
  p {
    margin: 0;
    font-size: 0.8rem;
    color: #aaa;
    span {
      margin: 0 10px;
    }
    &:last-of-type {
      font-size: 1.1rem;
      color: #7056d1;
    }
  }
`;

const Quantity = styled.div``;

const Checkout = styled.div`
  flex: calc(100% - (60% + 50px));
`;

interface Props {}

const cart = (props: Props) => {
  const { checkout } = useContext(StoreContext);

  const items = checkout ? checkout.lineItems : [];

  const quantity = items.reduce((total: any, item: any) => {
    return total + item.quantity;
  }, 0);

  return (
    <CartWrapper>
      <Title>
        Shopping Cart
        {!!quantity && <ItemsCount>{quantity}</ItemsCount>}
      </Title>
      {!!quantity ? (
        <CartAndCheckoutWrapper>
          <CartItems>
            {checkout.lineItems.map((item: any) => (
              <CartItem key={item.variant.id}>
                <button onClick={() => console.log("close")}>
                  {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.22 8.00003L15.845 13.625L13.625 15.845L8.00003 10.22L2.37503 15.845L0.155029 13.625L5.78003 8.00003L0.155029 2.37503L2.37503 0.155029L8.00003 5.78003L13.625 0.155029L15.845 2.37503L10.22 8.00003Z"
                      fill="#aaa"
                    />
                  </svg> */}
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.5858 6.00008L0.292908 1.70718L1.70712 0.292969L6.00001 4.58586L10.2929 0.292969L11.7071 1.70718L7.41423 6.00008L11.7071 10.293L10.2929 11.7072L6.00001 7.41429L1.70712 11.7072L0.292908 10.293L4.5858 6.00008Z"
                      fill="#aaa"
                    />
                  </svg>
                </button>
                <img src={item.variant.image.src} alt={item.title} />
                <Details>
                  <h3>{item.title}</h3>
                  <p>
                    {item.variant.title.split(" / ")[0]}
                    <span>|</span>
                    {item.variant.title.split(" / ")[1]}
                  </p>
                  {/* <p>quantity: {item.quantity}</p> */}
                  {/* {qtty.variant.image && (
                <GatsbyImage image={qtty.variant.image} alt="product_image" className="gatsby_image" style={{ width: "100px" }} />
              )} */}
                  <p>${item.variant.price}</p>
                  <Quantity></Quantity>
                </Details>
              </CartItem>
            ))}
          </CartItems>
          <Checkout>
            <a href={checkout.webUrl} target="_blank">
              click me
            </a>
          </Checkout>
        </CartAndCheckoutWrapper>
      ) : (
        <div>no items</div>
      )}
    </CartWrapper>
  );
};

export default cart;
