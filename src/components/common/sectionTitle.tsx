import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  color: var(--balck);
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0.365em;
  text-transform: uppercase;
  text-align: center;
`;

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <Title>{title}</Title>;
};

export default SectionTitle;
