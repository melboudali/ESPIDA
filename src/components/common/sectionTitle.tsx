import React from "react";
import styled, { css } from "styled-components";

const TitleWithBg = styled.div`
  margin: 0 0 60px;
  width: 100%;
  height: 589px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  z-index: 1;
  .img {
    transform: scale(1.1);
    transform-origin: 85% 380%;
  }
`;

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
  children?: React.ReactNode;
  link?: string;
}

const SectionTitle = ({ title, children, link }: SectionTitleProps) => {
  if (children) return <TitleWithBg>{children}</TitleWithBg>;
  return <Title>{title}</Title>;
};

export default SectionTitle;
