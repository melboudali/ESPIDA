import React from "react";
import Seo from "../components/common/seo";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Categories = styled.div`
  width: 100%;
  display: flex;
  gap: 40px;
  margin-top: 40px;
  /* .myImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
`;

const Jackets = styled(Link)`
  position: relative;
  overflow: hidden;
  height: 718px;
  flex: 743px;
  border-radius: 15px;
  .cat_img {
    transform: scale(1.3);
    transform-origin: 3% 155%;
    z-index: 1;
    width: 100%;
  }
  &:before {
    z-index: 2;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--black) 0%, rgba(0, 0, 0, 0) 53.13%);
  }
  p {
    z-index: 3;
    position: absolute;
    margin: 0;
    color: var(--white);
    font-size: 4rem;
    font-weight: 700;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    text-orientation: upright;
    left: 40px;
    top: 50%;
    transform: translate(0, -50%);
  }
`;

const Others = styled.div`
  flex: 497px;
`;

const Sweaters = styled.div``;

const Hoodies = styled.div``;

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Categories>
      <Jackets to="/jackets">
        <StaticImage
          src="https://images.unsplash.com/photo-1627637454030-5ddd536e06e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Jackets"
          className="cat_img"
        />
        <p>jackets</p>
      </Jackets>
      <Others></Others>
    </Categories>
  </>
);

export default IndexPage;
