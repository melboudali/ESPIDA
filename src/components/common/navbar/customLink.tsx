import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomLinkWrapper = styled(Link)`
  position: relative;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 10px;
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
`;

interface CustomLinkProps {
  to: string;
  children: string;
}

const CustomLink = ({ children, to }: CustomLinkProps) => <CustomLinkWrapper to={to}>{children}</CustomLinkWrapper>;

CustomLink.propTypes = { to: PropTypes.string.isRequired, children: PropTypes.string.isRequired };

export default CustomLink;
