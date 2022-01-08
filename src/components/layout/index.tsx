import React from "react";
import { StoreContext } from "../../context";
import GlobalStyles from "../../styles/globalStyles";
import styled from "styled-components";
import Navbar from "../common/navbar";
import Footer from "../common/footer";

const Banner = styled.div`
  --fontSize: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 41px;
  width: 100%;
  color: var(--white);
  background-color: var(--black);
  text-align: center;
  font-weight: 500;
  font-size: var(--fontSize);
  line-height: 16px;
  @media (min-width: 750px) {
    --fontSize: 1rem;
  }
`;

const Main = styled.main`
  max-width: 1280px;
  margin: 40px auto 0;
  padding: 0 10px;
`;

const Loading = styled.div`
  position: fixed;
  z-index: 5;
  bottom: 20px;
  right: 20px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--white);
  background-image: linear-gradient(to left, #a14df0, #5e4df0);
  padding: 15px 25px;
  p {
    margin: 0;
  }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { loading } = React.useContext(StoreContext);
  return (
    <>
      <GlobalStyles />
      <header>
        <Banner>Free U.S. Shipping & Returns $150+ | Free Intl Shipping $200+ </Banner>
        <Navbar />
      </header>
      <Main>{children}</Main>
      <Footer />
      {loading && (
        <Loading>
          <p>Loading ...</p>
        </Loading>
      )}
    </>
  );
};

export default Layout;
