import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
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

const ButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartItem = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
  margin-top: 10px;
  padding: 10px;
  border-radius: 10px;
  .remove {
    ${ButtonStyle}
    z-index:1;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  img {
    border-radius: 10px;
    width: 200px;
  }

  &:nth-child(odd) {
    background: #7951e614;
  }

  &:nth-child(even) {
    background: #fff;
  }
`;

const Details = styled.div`
  position: relative;
  flex: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  }
  .price {
    font-size: 1.1rem;
    color: #7056d1;
  }
`;

const Quantity = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 15px;
  p {
    font-size: 1.1rem;
    color: #6d6d6d;
  }
  button {
    ${ButtonStyle}
    background-color: var(--white);
    border: 1px solid #6845e424;
    border-radius: 5px;
    width: 36px;
    height: 30px;
    cursor: pointer;
    svg {
      fill: #6d6d6d;
    }
  }
`;

const Checkout = styled.div`
  flex: calc(100% - (60% + 50px));
`;

interface Props {}

const cart = (props: Props) => {
  const { checkout, removeLineItem } = useContext(StoreContext);

  const items = checkout ? checkout.lineItems : [];

  const quantity = items.reduce((total: any, item: any) => {
    return total + item.quantity;
  }, 0);

  console.log(checkout);

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
                <button
                  className="remove"
                  onClick={() => {
                    removeLineItem!(item.variant.id);
                    console.log("clicked");
                  }}
                >
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
                  <p className="price">${item.variant.price}</p>
                  <Quantity>
                    <button>
                      <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2H0V0H12V2Z" />
                      </svg>
                    </button>
                    <p>{item.quantity}</p>
                    <button>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5 5V0H7V5H12V7H7V12H5V7H0V5H5Z" />
                      </svg>
                    </button>
                  </Quantity>
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
