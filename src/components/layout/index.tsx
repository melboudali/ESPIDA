import React from "react";
import GlobalStyles from "../../styles/globalStyles";
import styled from "styled-components";
import Navbar from "../common/navbar";

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

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  /* padding: 120px 0 50px; */
  /* FIXME: fix the padding later */
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
    <Main>{children}</Main>
  </>
);

export default Layout;
