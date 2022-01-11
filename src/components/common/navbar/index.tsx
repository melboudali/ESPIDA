import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { StoreContext } from "../../../context";
import CustomLink from "./customLink";

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  background: var(--white);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  z-index: 4;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  height: 66px;
  padding: 0 10px;
`;

const Menu = styled.button`
  --display: block;
  --paddingLeft: 10px;
  display: var(--display);
  align-items: center;
  flex: 33.33%;
  text-align: start;
  padding-left: var(--paddingLeft);
  @media (min-width: 750px) {
    --display: none;
    --paddingLeft: 0;
  }
`;

const LeftMenu = styled.div`
  --flex: none;
  display: var(--flex);
  align-items: center;
  justify-content: start;
  flex: 33.33%;
  & > a:not(:nth-child(1)) {
    margin-left: 28px;
  }
  @media (min-width: 750px) {
    --flex: flex;
  }
`;

const RightMenu = styled.div<{ animation: boolean }>`
  --paddingRight: 23px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 33.33%;
  padding-right: var(--paddingRight);
  & a {
    display: flex;
    position: relative;
    svg {
      align-self: center;
    }
    p {
      position: absolute;
      font-size: 0.8rem;
      font-weight: 500;
      line-height: 9px;
      background-color: var(--black);
      color: var(--white);
      border-radius: 50%;
      padding: 4px 5px;
      margin: 0;
      top: -13px;
      right: -13px;
      ${({ animation }) => animation && "animation: bounce 1.5s linear infinite;"}
      @keyframes bounce {
        0%,
        20%,
        40%,
        60%,
        80%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
    }
  }
  @media (min-width: 750px) {
    --paddingRight: 13px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 33.33%;
`;

const Navbar = () => {
  const { quantity } = React.useContext(StoreContext);

  return (
    <NavbarWrapper>
      <Nav>
        <Menu aria-label="menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2H22" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 9H16" stroke="black" strokeWidth="3" strokeLinecap="round" />
            <path d="M2 16H10" stroke="black" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </Menu>
        <LeftMenu>
          <CustomLink to="/collections/shirts">shirts</CustomLink>
          <CustomLink to="/collections/coats">coats</CustomLink>
          <CustomLink to="/collections/bottoms">bottoms</CustomLink>
          <CustomLink to="/collections/sneakers">sneakers</CustomLink>
          <CustomLink to="/collections">collections</CustomLink>
        </LeftMenu>
        <LogoWrapper>
          <Link to="/">
            <svg width="114" height="47" viewBox="0 0 114 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line
                y1="-1.5"
                x2="58.2606"
                y2="-1.5"
                transform="matrix(0.960751 -0.277412 0.416369 0.909196 1.6123 47)"
                stroke="black"
                strokeWidth="3"
              />
              <line
                y1="-1.5"
                x2="58.261"
                y2="-1.5"
                transform="matrix(0.960764 0.277368 -0.416311 0.909222 56.025 30.8378)"
                stroke="black"
                strokeWidth="3"
              />
              <line x1="56.7448" y1="30.8378" x2="56.7448" y2="19.6486" stroke="black" strokeWidth="3" />
              <path
                d="M63.4595 11.1892C63.4595 15.7017 59.7851 19.3784 55.2297 19.3784V22.3784C61.4318 22.3784 66.4595 17.3688 66.4595 11.1892C66.4595 5.00957 61.4318 0 55.2297 0C49.0277 0 44 5.00957 44 11.1892H47C47 6.67665 50.6743 3 55.2297 3C59.7851 3 63.4595 6.67665 63.4595 11.1892Z"
                fill="black"
              />
            </svg>
          </Link>
        </LogoWrapper>
        <RightMenu animation={quantity > 0}>
          <Link to="/cart">
            <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7 17.5C7.41421 17.5 7.75 17.1642 7.75 16.75C7.75 16.3358 7.41421 16 7 16C6.58579 16 6.25 16.3358 6.25 16.75C6.25 17.1642 6.58579 17.5 7 17.5Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 17.5C17.9142 17.5 18.25 17.1642 18.25 16.75C18.25 16.3358 17.9142 16 17.5 16C17.0858 16 16.75 16.3358 16.75 16.75C16.75 17.1642 17.0858 17.5 17.5 17.5Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M1 1H4L6.25 13.75H18.25" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M6.25 10.75H17.9425C18.0292 10.7501 18.1133 10.7201 18.1804 10.6651C18.2475 10.6101 18.2934 10.5336 18.3105 10.4486L19.6605 3.69859C19.6714 3.64417 19.67 3.588 19.6566 3.53414C19.6431 3.48029 19.6179 3.43009 19.5827 3.38717C19.5475 3.34426 19.5032 3.30969 19.453 3.28597C19.4028 3.26225 19.348 3.24996 19.2925 3.25H4.75"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>{quantity}</p>
          </Link>
        </RightMenu>
      </Nav>
    </NavbarWrapper>
  );
};

export default Navbar;
