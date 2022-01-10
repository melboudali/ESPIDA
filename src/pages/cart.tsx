import React, { useContext } from "react";
import { StaticImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";
import { StoreContext } from "../context";
import Seo from "../components/common/seo";
import PageTitle from "../components/common/pageTitle";
import PropTypes from "prop-types";

const CartAndCheckoutWrapper = styled.div`
  --flexDirection: column;
  display: flex;
  flex-direction: var(--flexDirection);
  gap: 40px;
  margin-top: 40px;
  @media (min-width: 750px) {
    --flexDirection: row;
  }
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
  --imageWidth: 100px;
  --padding: 5px;
  position: relative;
  display: flex;
  gap: 20px;
  margin-top: 10px;
  padding: var(--padding);
  border-radius: 10px;
  .remove {
    ${ButtonStyle}
    z-index:1;
    position: absolute;
    top: var(--padding);
    right: var(--padding);
    width: 36px;
    height: 40px;
  }
  img {
    border-radius: 10px;
    width: var(--imageWidth);
  }
  &:nth-child(odd) {
    background: #7951e614;
  }
  &:nth-child(even) {
    background: #fff;
  }
  @media (min-width: 750px) {
    --imageWidth: 200px;
    --padding: 10px;
  }
`;

const Details = styled.div`
  --headingSize: 0.9rem;
  --pSize: 0.7rem;
  --priceSize: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 100%;
  gap: var(--padding);
  font-weight: 500;
  h3 {
    width: calc(100% - 50px);
    margin: 0;
    line-height: 20px;
    text-transform: capitalize;
    color: var(--black);
    font-size: var(--headingSize);
  }
  p {
    margin: 0;
    font-size: var(--pSize);
    color: #aaa;
    span {
      margin: 0 10px;
    }
  }
  .price {
    font-size: var(--priceSize);
    color: #7056d1;
  }
  @media (min-width: 750px) {
    --headingSize: 1rem;
    --pSize: 0.8rem;
    --priceSize: 1.1rem;
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
    svg {
      fill: #6d6d6d;
    }
  }
`;

const Checkout = styled.div`
  --sticky: relative;
  --top: unset;
  position: var(--sticky);
  top: var(--top);
  height: fit-content;
  flex: calc(100% - (60% + 40px));
  margin-top: 11px;
  border-radius: 10px;
  background-color: #000;
  padding: 10px;
  h3 {
    margin: 0 0 10px;
    font-size: 1.1rem;
    text-transform: capitalize;
    letter-spacing: 3px;
    font-weight: 500;
    color: var(--white);
    border-bottom: 1px solid #575757;
    padding-bottom: 10px;
  }
  @media (min-width: 750px) {
    --sticky: sticky;
    --top: 76px;
  }
`;

const OrderSummaryItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  margin-bottom: 20px;
  padding: 0 20px;
  p {
    margin: 0;
    display: flex;
    align-items: center;
    &:first-child {
      color: #d8d8d8;
    }
    &:last-child {
      font-size: 1.2rem;
      font-weight: 500;
      color: #ffffff;
    }
  }
`;

const CheckoutButton = styled.a`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    background-image: linear-gradient(to left, #a14df0, #5e4df0);
    color: var(--white);
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
`;

const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 80px 0 120px;
  .img {
    width: 200px;
  }
  p {
    margin: 30px 0 0;
    font-size: 1.2rem;
    font-weight: 300;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
`;

interface OrderSummaryItemType {
  title: string;
  price: string;
}

const Cart = () => {
  const { checkout, quantity, updateLineItems, removeLineItems } = useContext(StoreContext);
  const totalPrice = checkout.lineItems.reduce((total, item: any) => total + item.variant.price * item.quantity, 0);

  return (
    <>
      <Seo title="Cart" location="/cart" />
      <PageTitle quantity={quantity}>shopping Cart</PageTitle>
      {!!quantity ? (
        <CartAndCheckoutWrapper>
          <CartItems>
            {checkout.lineItems.map((item: any) => (
              <CartItem key={item.variant.id}>
                <button className="remove" onClick={() => removeLineItems!(item.id)}>
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
                  <p className="price">${(item.variant.price * item.quantity).toFixed(2)}</p>
                  <Quantity>
                    <button onClick={() => updateLineItems!(item.id, item.quantity - 1)}>
                      <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2H0V0H12V2Z" />
                      </svg>
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => updateLineItems!(item.id, item.quantity + 1)}>
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
            <h3>order summary</h3>
            <OrderSummaryItem title="subtotal" price={`$${totalPrice.toFixed(2)}`} />
            <OrderSummaryItem title="shipping estimate" price="free" />
            <CheckoutButton href={(checkout as any).webUrl} target="_blank">
              <div>checkout</div>
            </CheckoutButton>
          </Checkout>
        </CartAndCheckoutWrapper>
      ) : (
        <EmptyCart>
          <StaticImage src="../images/cart.png" alt="" className="img" />
          <p>no roducts in the cart</p>
        </EmptyCart>
      )}
    </>
  );
};

const OrderSummaryItem = ({ title, price }: OrderSummaryItemType) => (
  <OrderSummaryItemWrapper>
    <p>{title}</p>
    <p>{price}</p>
  </OrderSummaryItemWrapper>
);

OrderSummaryItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Cart;
