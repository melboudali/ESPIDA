import React from "react";
import { StoreContext } from "../../context";
import styled from "styled-components";
import GlobalStyles from "../../styles/globalStyles";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import PropTypes from "prop-types";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Banner = styled.div`
  --fontSize: 0.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 41px;
  color: var(--white);
  background-image: linear-gradient(to right, #a14df0, #5e4df0);
  text-align: center;
  font-weight: 500;
  font-size: var(--fontSize);
  line-height: 16px;
  @media (min-width: 750px) {
    --fontSize: 1rem;
  }
`;

const NavbarWrapper = styled.header`
  display: unset;
`;

const Main = styled.main`
  max-width: 1280px;
  width: 100%;
  margin: 40px auto 0;
  padding: 0 10px;
  flex: 1;
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
      <Body>
        <NavbarWrapper>
          <Banner>Free U.S. Shipping & Returns $150+ | Free Intl Shipping $200+ </Banner>
          <Navbar />
        </NavbarWrapper>
        <Main>{children}</Main>
        <Footer />
      </Body>
      {loading && (
        <Loading>
          <p>Loading ...</p>
        </Loading>
      )}
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
