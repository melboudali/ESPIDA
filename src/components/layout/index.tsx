import React from "react";
import GlobalStyles from "../../styles/GlobalStyles";
import styled from "styled-components";
import Navbar from "../common/navbar";
import CustomLink from "../common/navbar/customLink";

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 41px;
  width: 100%;
  color: var(--white);
  background-color: var(--black);
  font-weight: 500;
  line-height: 16px;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <GlobalStyles />
    <header>
      <Banner>Free U.S. Shipping & Returns $150+ | Free Intl Shipping $200+ </Banner>
      <Navbar />
    </header>
    <main>{children}</main>
  </>
);

export default Layout;
