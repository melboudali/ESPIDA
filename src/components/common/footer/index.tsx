import React from "react";
import styled from "styled-components";
import SectionTitle from "../title";
import Subscribe from "../../pages/index/subscribe";

const SectionContainer = styled.section`
  margin: 80px 0;
`;

const FooterWrapper = styled.footer`
  position: relative;
  background-color: var(--black);
  height: 600px;
  z-index: 0;
  &:after {
    content: "";
    position: absolute;
    background-color: var(--white);
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQzOSIgaGVpZ2h0PSIxMTgiIHZpZXdCb3g9IjAgMCAxNDM5IDExOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgNC4yOTIzMUM0OTIuNSAtMzEuODQzOSAxMTEzLjUgMTc3LjA1NCAxNDQwIDQuMjkyMzFWMTE4SDBWNC4yOTIzMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=);
    background-repeat: no-repeat;
    width: 100%;
    height: 118px;
    top: 0;
    z-index: -1;
  }
`;

const About = styled.div`
  color: var(--white);
  padding-top: 80px;
  h3 {
    color: var(--white);
  }
`;

const Footer = () => {
  return (
    <>
      <SectionContainer>
        <SectionTitle title="Subscribe for free shipping on your first order" fontSize="1.125rem" />
        <Subscribe />
      </SectionContainer>
      <FooterWrapper>
        <About>
          <h3>about</h3>
          <p>
            We're here to prove that fashion can be a force for good. Through our commitment to sustainable materials, ethical
            manufacturing, and a zero-plastic policy, we're always searching for better ways to put the planet first.
          </p>
          <ul>
            <li>
              <a href="https://www.facebook.com/">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 12C24 5.37097 18.629 0 12 0C5.37097 0 0 5.37097 0 12C0 17.9894 4.38823 22.9539 10.125 23.8548V15.4689H7.07661V12H10.125V9.35613C10.125 6.34887 11.9153 4.68774 14.6574 4.68774C15.9706 4.68774 17.3439 4.92194 17.3439 4.92194V7.87355H15.8303C14.34 7.87355 13.875 8.79871 13.875 9.74758V12H17.2031L16.6708 15.4689H13.875V23.8548C19.6118 22.9539 24 17.9894 24 12Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.0027 5.8454C8.59743 5.8454 5.85075 8.59208 5.85075 11.9973C5.85075 15.4026 8.59743 18.1492 12.0027 18.1492C15.4079 18.1492 18.1546 15.4026 18.1546 11.9973C18.1546 8.59208 15.4079 5.8454 12.0027 5.8454ZM12.0027 15.9969C9.80212 15.9969 8.00312 14.2032 8.00312 11.9973C8.00312 9.79141 9.79677 7.99777 12.0027 7.99777C14.2086 7.99777 16.0022 9.79141 16.0022 11.9973C16.0022 14.2032 14.2032 15.9969 12.0027 15.9969ZM19.8412 5.59375C19.8412 6.39152 19.1987 7.02867 18.4062 7.02867C17.6085 7.02867 16.9713 6.38617 16.9713 5.59375C16.9713 4.80134 17.6138 4.15884 18.4062 4.15884C19.1987 4.15884 19.8412 4.80134 19.8412 5.59375ZM23.9157 7.05008C23.8247 5.12794 23.3856 3.42532 21.9775 2.02253C20.5747 0.619743 18.8721 0.180703 16.9499 0.0843279C14.9689 -0.0281093 9.03112 -0.0281093 7.05008 0.0843279C5.1333 0.175349 3.43068 0.614389 2.02253 2.01718C0.614389 3.41997 0.180703 5.12259 0.0843279 7.04473C-0.0281093 9.02577 -0.0281093 14.9635 0.0843279 16.9446C0.175349 18.8667 0.614389 20.5693 2.02253 21.9721C3.43068 23.3749 5.12794 23.8139 7.05008 23.9103C9.03112 24.0228 14.9689 24.0228 16.9499 23.9103C18.8721 23.8193 20.5747 23.3803 21.9775 21.9721C23.3803 20.5693 23.8193 18.8667 23.9157 16.9446C24.0281 14.9635 24.0281 9.03112 23.9157 7.05008ZM21.3564 19.0702C20.9388 20.1196 20.1303 20.9281 19.0755 21.351C17.496 21.9775 13.7481 21.8329 12.0027 21.8329C10.2572 21.8329 6.50396 21.9721 4.92984 21.351C3.88042 20.9334 3.07195 20.1249 2.64897 19.0702C2.02253 17.4907 2.16709 13.7428 2.16709 11.9973C2.16709 10.2519 2.02789 6.49861 2.64897 4.92448C3.06659 3.87507 3.87507 3.06659 4.92984 2.64361C6.50931 2.01718 10.2572 2.16174 12.0027 2.16174C13.7481 2.16174 17.5014 2.02253 19.0755 2.64361C20.1249 3.06124 20.9334 3.86972 21.3564 4.92448C21.9828 6.50396 21.8383 10.2519 21.8383 11.9973C21.8383 13.7428 21.9828 17.496 21.3564 19.0702Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M26.5125 5.98123C26.5313 6.24372 26.5313 6.50626 26.5313 6.76875C26.5313 14.775 20.4375 24 9.30001 24C5.86874 24 2.68126 23.0062 0 21.2813C0.487518 21.3375 0.956221 21.3563 1.4625 21.3563C4.2937 21.3563 6.89999 20.4 8.98125 18.7688C6.31874 18.7125 4.08749 16.9688 3.31872 14.5687C3.69375 14.625 4.06873 14.6625 4.46252 14.6625C5.00625 14.6625 5.55004 14.5874 6.05626 14.4563C3.28127 13.8937 1.19995 11.4562 1.19995 8.51249V8.43752C2.00617 8.88752 2.94375 9.16877 3.93743 9.20622C2.30617 8.1187 1.23747 6.26247 1.23747 4.16246C1.23747 3.03748 1.53741 2.00623 2.06244 1.10622C5.04371 4.78122 9.52498 7.18118 14.5499 7.44372C14.4562 6.99372 14.3999 6.52502 14.3999 6.05626C14.3999 2.71872 17.0999 0 20.4562 0C22.1999 0 23.7749 0.731248 24.8812 1.9125C26.2499 1.65001 27.5624 1.14374 28.7249 0.450003C28.2749 1.85628 27.3187 3.03754 26.0624 3.78748C27.2812 3.6563 28.4625 3.31872 29.5499 2.85002C28.7251 4.04997 27.6938 5.11868 26.5125 5.98123Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </About>
      </FooterWrapper>
    </>
  );
};

export default Footer;
