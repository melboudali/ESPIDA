import React from "react";
import styled from "styled-components";
import CustomLink from "./customLink";

const NavbarWrapper = styled.div`
  width: 100%;
  background: var(--white);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  padding: 11px 0;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
`;

const LeftMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 28px;
`;

const RightMenu = styled.div``;

const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    margin: 2px -4px 0 0;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 18px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }
`;

const Navbar = () => (
  <NavbarWrapper>
    <Nav>
      <LeftMenu>
        <CustomLink to="/collections/all">tops</CustomLink>
        <CustomLink to="/collections/all-outerwear/">outerwear</CustomLink>
        <CustomLink to="/collections/all-bottoms">bottoms</CustomLink>
        <CustomLink to="/shop-all/">collections</CustomLink>
      </LeftMenu>
      <Logo>
        <svg width="92" height="37" viewBox="0 0 92 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line
            y1="-1.5"
            x2="46.7056"
            y2="-1.5"
            transform="matrix(0.960483 -0.278339 0.415125 0.909764 1.61227 37)"
            stroke="black"
            strokeWidth="3"
          />
          <line
            y1="-1.5"
            x2="46.7059"
            y2="-1.5"
            transform="matrix(0.960495 0.278296 -0.415067 0.909791 45.221 24)"
            stroke="black"
            strokeWidth="3"
          />
          <line x1="45.5" y1="24" x2="45.5" y2="15" stroke="black" strokeWidth="3" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 9C50 12.3137 47.3137 15 44 15V18C48.9706 18 53 13.9706 53 9C53 4.02944 48.9706 0 44 0C39.0294 0 35 4.02944 35 9H38C38 5.68629 40.6863 3 44 3C47.3137 3 50 5.68629 50 9Z"
            fill="black"
          />
        </svg>
        <p>espida</p>
      </Logo>
      <RightMenu>
        <CustomLink to="/collections/all">tops</CustomLink>
        <CustomLink to="/collections/all-outerwear/">outerwear</CustomLink>
        <CustomLink to="/collections/all-bottoms">bottoms</CustomLink>
        <CustomLink to="/shop-all/">collections</CustomLink>
      </RightMenu>
    </Nav>
  </NavbarWrapper>
);

export default Navbar;
