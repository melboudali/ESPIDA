import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import styled, { css } from "styled-components";

const CategoriesWrapper = styled.section`
  display: flex;
  gap: 40px;
  margin-top: 40px;
`;

const CommunStyle = css`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  z-index: 1;
  color: var(--white);
`;

const Jackets = styled(Link)`
  ${CommunStyle}
  height: 500px;
  flex: 743px;
  .img {
    transform: scale(1.3);
    transform-origin: 3% 155%;
    z-index: 2;
  }
  &:before {
    z-index: 3;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--black) 0%, rgba(0, 0, 0, 0) 53.13%);
  }
  p {
    z-index: 4;
    position: absolute;
    margin: 0;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    text-orientation: upright;
    left: 40px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const SweatersAndHoodies = styled.div`
  flex: 497px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SweatersStyle = css`
  transform: scale(1.1);
  transform-origin: 20% 40%;
`;

const HoodiesStyle = css`
  transform: scale(2.1);
  transform-origin: 50% 80%;
`;

const SHComponentWrapper = styled(Link)`
  ${CommunStyle}
  flex: 230px;
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, var(--black) 0%, rgba(0, 0, 0, 0) 40.1%);
    z-index: 3;
  }
  .img {
    ${({ to }) => (to === "/sweaters" ? SweatersStyle : HoodiesStyle)}
    z-index: 2;
  }
  p {
    z-index: 4;
    position: absolute;
    margin: 0;
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;
const Categories = () => (
  <CategoriesWrapper>
    <Jackets to="/jackets">
      <StaticImage
        src="https://images.unsplash.com/photo-1627637454030-5ddd536e06e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
        alt="jackets"
        className="img"
      />
      <p>jackets</p>
    </Jackets>
    <SweatersAndHoodies>
      <SHComponentWrapper to="/sweaters">
        <StaticImage
          src="https://images.unsplash.com/photo-1516826957135-700dedea698c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
          alt="sweaters"
          className="img"
        />
        <p>sweaters</p>
      </SHComponentWrapper>
      <SHComponentWrapper to="/hoodies">
        <StaticImage
          src="https://images.unsplash.com/photo-1569240192190-e37f8b0010be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          alt="hoodies"
          className="img"
        />
        <p>hoodies</p>
      </SHComponentWrapper>
    </SweatersAndHoodies>
  </CategoriesWrapper>
);

export default Categories;
