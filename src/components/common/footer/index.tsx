import React from "react";
import styled from "styled-components";
import SectionTitle from "../title";
import Subscribe from "../../pages/index/subscribe";

const SectionContainer = styled.section`
  margin: 80px 0;
`;

const FooterWrapper = styled.footer`
  background-color: var(--black);
  height: 600px;
  margin-bottom: -110px;
  &:after {
    content: "";
    background-color: var(--white);
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQzOSIgaGVpZ2h0PSIxMTgiIHZpZXdCb3g9IjAgMCAxNDM5IDExOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgNC4yOTIzMUM0OTIuNSAtMzEuODQzOSAxMTEzLjUgMTc3LjA1NCAxNDQwIDQuMjkyMzFWMTE4SDBWNC4yOTIzMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=);
    background-repeat: no-repeat;
    width: 100%;
    height: 118px;
    display: block;
  }
`;

const Footer = () => {
  return (
    <>
      <SectionContainer>
        <SectionTitle title="Subscribe for free shipping on your first order" fontSize="1.125rem" />
        <Subscribe />
      </SectionContainer>
      <FooterWrapper></FooterWrapper>
    </>
  );
};

export default Footer;
