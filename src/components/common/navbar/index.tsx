import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { StoreContext } from "../../../context";
import CustomLink from "./customLink";

const NavbarWrapper = styled.div`
  width: 100%;
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
  width: 33.33%;
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
  flex: 33.33%;
  justify-content: start;
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
  width: 33.33%;
`;
const Logo = styled(Link)`
  width: fit-content;
`;

const Navbar = () => {
  const { checkout } = React.useContext(StoreContext);

  const items = checkout ? checkout.lineItems : [];

  const quantity = items.reduce((total: any, item: any) => {
    return total + item.quantity;
  }, 0);

  return (
    <NavbarWrapper>
      <Nav>
        <Menu>
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
          <Logo to="/">
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
          </Logo>
        </LogoWrapper>
        <RightMenu animation={quantity > 0}>
          {/* <button onClick={() => console.log("button clicked")}>
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.319 12.9075C16.7628 9.76895 16.542 5.22832 13.6569 2.34314C10.5327 -0.781048 5.46734 -0.781048 2.34315 2.34314C-0.78105 5.46734 -0.78105 10.5327 2.34315 13.6569C5.22833 16.5421 9.769 16.7628 12.9075 14.3191C12.921 14.3344 12.9351 14.3494 12.9497 14.364L17.1924 18.6066C17.5829 18.9972 18.2161 18.9972 18.6066 18.6066C18.9971 18.2161 18.9971 17.583 18.6066 17.1924L14.364 12.9498C14.3493 12.9352 14.3343 12.9211 14.319 12.9075ZM12.2426 3.75736C14.5858 6.1005 14.5858 9.89946 12.2426 12.2427C9.8995 14.5858 6.1005 14.5858 3.75736 12.2427C1.41421 9.89946 1.41421 6.1005 3.75736 3.75736C6.1005 1.41421 9.8995 1.41421 12.2426 3.75736Z"
                fill="black"
              />
            </svg>
          </button> */}
          {/* <Link to="/account">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.3428 1.52719C12.4306 0.542344 11.1565 0 9.75027 0C8.33652 0 7.05824 0.539062 6.15027 1.51781C5.23246 2.50734 4.78527 3.85219 4.89027 5.30437C5.09839 8.16937 7.27855 10.5 9.75027 10.5C12.222 10.5 14.3984 8.16984 14.6098 5.30531C14.7162 3.86625 14.2662 2.52422 13.3428 1.52719ZM18.0003 21H1.50027C1.2843 21.0028 1.07042 20.9574 0.874189 20.8672C0.677959 20.7769 0.504316 20.6441 0.365893 20.4783C0.0612056 20.1141 -0.0616069 19.6167 0.0293306 19.1137C0.424956 16.9191 1.65964 15.0755 3.60027 13.7812C5.32433 12.6323 7.50824 12 9.75027 12C11.9923 12 14.1762 12.6328 15.9003 13.7812C17.8409 15.075 19.0756 16.9186 19.4712 19.1133C19.5621 19.6162 19.4393 20.1136 19.1346 20.4778C18.9963 20.6437 18.8226 20.7766 18.6264 20.867C18.4302 20.9573 18.2163 21.0028 18.0003 21Z"
                fill="black"
              />
            </svg>
          </Link> */}
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
