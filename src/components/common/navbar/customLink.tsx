import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";

const CustomLinkWrapper = styled(Link)`
  color: var(--black);
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 10px;
  text-transform: uppercase;
`;

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

const CustomLink = ({ children, to }: CustomLinkProps) => <CustomLinkWrapper to={to}>{children}</CustomLinkWrapper>;

CustomLink.propTypes = { to: PropTypes.string.isRequired, children: PropTypes.node.isRequired };

export default CustomLink;
