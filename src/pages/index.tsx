import React from "react";
import Seo from "../components/common/seo";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Categories = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  /* .myImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  } */
`;

const Jackets = styled.div`
  overflow: hidden;
  .cat_img {
    transform: scale(1.1);
    transform-origin: 80% 100%;
  }
`;

const Others = styled.div``;

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
