import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomLinkWrapper = styled(Link)`
  --customLinkFont: 2rem;
  --customLinkLetterSpacing: 6px;
  --lineHeight: 37px;
  position: relative;
  font-size: var(--customLinkFont);
  letter-spacing: var(--customLinkLetterSpacing);
  font-weight: 500;
  line-height: var(--lineHeight);
  text-transform: uppercase;
  color: var(--black);
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    margin: 0 auto;
    right: 0;
    bottom: -10px;
    left: 0;
    background-color: var(--black);
    transition: width 300ms ease-in-out;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
  @media (min-width: 750px) {
    --customLinkFont: 0.9rem;
    --customLinkLetterSpacing: 1.6px;
    --lineHeight: 10px;
  }
`;

interface CustomLinkProps {
  to: string;
  children: string;
  closeModal?: () => void;
  menuIsOpen?: boolean;
}

const CustomLink = ({ children, to, closeModal, menuIsOpen }: CustomLinkProps) => (
  <CustomLinkWrapper
    to={to}
    onClick={() => {
      if (menuIsOpen && closeModal) {
        closeModal();
      }
    }}
  >
    {children}
  </CustomLinkWrapper>
);

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
  menuIsOpen: PropTypes.bool,
};

export default CustomLink;
