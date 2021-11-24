import React from "react";
import styled from "styled-components";
import SectionTitle from "../title";
import Subscribe from "../../pages/index/subscribe";

const SectionContainer = styled.section`
  margin: 80px 0;
`;

const FooterWrapper = styled.footer``;

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
