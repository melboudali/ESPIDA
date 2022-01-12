import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import useSubscribe from "../../../hooks/useSubscribe";

const Wrapper = styled.div`
  --padding: 0 10px;
  --lineHeight: 25px;
  --alignText: start;
  --flexDirection: column;
  --alignItems: center;
  --justifyContent: start;
  --width: 100%;
  --greyColor: #4a4a4a;
  --secGreyColor: #cacaca;
  margin-top: 40px;
  padding: var(--padding);
  p {
    margin: 0;
    text-align: var(--alignText);
    text-transform: capitalize;
    line-height: var(--lineHeight);
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
    margin: 50px auto 20px;
    display: flex;
    flex-direction: var(--flexDirection);
    align-items: var(--alignItems);
    justify-content: var(--justifyContent);
    gap: 30px;
    input {
      font-size: 1.125rem;
      color: var(--greyColor);
      border-color: var(--greyColor);
      border-style: solid;
      border-width: 0 0 3px;
      outline: none;
      &[type="email"] {
        width: var(--width);
        height: 50px;
        padding: 0 0 0 5px;
        font-size: 1.125rem;
        &::placeholder {
          color: var(--secGreyColor);
          text-transform: uppercase;
        }
      }
      &[type="submit"] {
        width: 110px;
        height: 50px;
        padding: 0;
        background-color: var(--greyColor);
        font-size: 1.125rem;
        text-align: center;
        text-transform: uppercase;
        color: var(--white);
        cursor: pointer;
      }
    }
  }
  @media (min-width: 750px) {
    --flexDirection: row;
    --alignItems: start;
    --justifyContent: center;
    --width: 585px;
    --lineHeight: 9px;
    --alignText: center;
    --padding: 0;
  }
`;

const Subscribe = () => {
  const { email, loading, isSuccess, isError, errorMsg, onChange, onSubmit } = useSubscribe();

  return (
    <Wrapper>
      <p>
        Join our email list and be the first to know about new limited edition products, material innovations, and lots of other fun
        updates.
      </p>
      <form onSubmit={onSubmit}>
        <input value={email} onChange={onChange} placeholder="enter your email address" type="email" name="email" id="mce-EMAIL" />
        <input type="submit" value={loading ? "loading" : "sign up"} />
      </form>
      {isSuccess && <p style={{ color: "green" }}>Wow, new friends. Stay tuned, we’ll get in touch soon.</p>}
      {isError && errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      <p>
        Note: You can opt-out at any time. See our <Link to="#">Privacy Policy</Link> and <Link to="#">Terms</Link>.
      </p>
    </Wrapper>
  );
};

export default Subscribe;
