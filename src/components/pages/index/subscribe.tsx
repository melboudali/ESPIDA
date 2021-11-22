import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 40px;
  p {
    line-height: 9px;
    text-align: center;
    text-transform: capitalize;
    &:nth-child(1) {
      font-size: 1.125rem;
    }
    &:nth-child(3) {
      font-size: 0.875rem;
      a {
        color: var(--black);
        text-decoration: underline;
        font-weight: 700;
      }
    }
  }
  form {
    margin: 50px 0 20px;
    input {
      &:nth-child(1) {
        border: none;
      }
      &:nth-child(3) {
      }
    }
  }
`;

interface SubscribeProps {}

const Subscribe = ({}: SubscribeProps) => {
  return (
    <Wrapper>
      <p>
        Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun
        updates.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submited");
        }}
      >
        <input placeholder="enter your email address" type="email" name="emil" id="email" />
        <input type="submit" value="sign up" />
      </form>
      <p>
        Note: You can opt-out at any time. See our <Link to="#">Privacy Policy</Link> and <Link to="#">Terms</Link>.
      </p>
    </Wrapper>
  );
};

export default Subscribe;
