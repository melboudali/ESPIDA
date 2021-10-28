import React from "react";
import Seo from "../components/common/seo";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Slider = styled.div`
  height: 500px;
  width: 100%;
  .myImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IndexPage = () => (
  <>
    <Seo title="Home" />
    <Slider>
      <StaticImage
        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1376&q=80"
        alt=""
        className="myImage"
      />
    </Slider>
  </>
);

export default IndexPage;
