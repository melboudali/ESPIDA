import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomLinkWrapper = styled(Link)`
  position: relative;
  color: var(--black);
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 10px;
  text-transform: uppercase;
  &:before {
    content: "";
    position: absolute;
    width: 0;
    bottom: -10px;
    height: 2px;
    background-color: var(--black);
    left: 0;
    right: 0;
    margin: 0 auto;
    transition: width 300ms ease-in-out;
  }
  &:hover {
    &:before {
      width: 100%;
    }
  }
`;

interface CustomLinkProps {
  to: string;
  children: string;
}

const CustomLink = ({ children, to }: CustomLinkProps) => (
  <CustomLinkWrapper to={to} aria-label={children}>
    {children}
  </CustomLinkWrapper>
);

CustomLink.propTypes = { to: PropTypes.string.isRequired, children: PropTypes.string.isRequired };

export default CustomLink;
