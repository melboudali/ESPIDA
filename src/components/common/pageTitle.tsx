import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.h1`
  --fontSize: 1.8rem;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin: 0;
  font-size: var(--fontSize);
  font-weight: 700;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  line-height: 35px;
  color: #000;
  @media (min-width: 375px) {
    --fontSize: 1.875rem;
  }
`;

const ItemsCount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  font-size: 0.6875rem;
  letter-spacing: normal;
  line-height: 13px;
  color: #000;
  border-radius: 5px;
  background: #adadad;
`;

interface PageTitleProps {
  children: string;
  quantity?: number;
}

const PageTitle = ({ children, quantity }: PageTitleProps) => (
  <Wrapper>
    {children}
    {!!quantity && <ItemsCount>{quantity}</ItemsCount>}
  </Wrapper>
);

PageTitle.propTypes = {
  children: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};

export default PageTitle;
