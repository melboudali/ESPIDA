import React from "react";
import Seo from "../components/common/seo";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

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

const Jackets = styled.div`
  position: relative;
  overflow: hidden;
  height: 718px;
  flex: 743px;
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
      <Jackets>
        <StaticImage
          src="https://images.unsplash.com/photo-1627637454030-5ddd536e06e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          alt="Jackets"
          className="cat_img"
        />
      </Jackets>
      <Others></Others>
    </Categories>
  </>
);

export default IndexPage;
