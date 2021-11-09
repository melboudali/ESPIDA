import { Link } from "gatsby";
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
    transform: scale(1.01);
    transform-origin: 10% 3100%;
    z-index: 2;
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

const Content = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  h1 {
    margin: 0;
    font-weight: 700;
    font-size: 6rem;
    line-height: 111px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--white);
  }
  a {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 21px;
    letter-spacing: 0.365em;
    text-transform: uppercase;
    color: var(--white);
    padding: 21px 73px;
    border: 4px solid var(--white);
  }
`;

interface SectionTitleProps {
  title: string;
  children?: React.ReactNode;
  link?: string;
}

const SectionTitle = ({ title, children, link }: SectionTitleProps) => {
  if (children && link)
    return (
      <TitleWithBg>
        {children}
        <Content>
          <h1>{title}</h1>
          <Link to={link}>shop now</Link>
        </Content>
      </TitleWithBg>
    );
  return <Title>{title}</Title>;
};

export default SectionTitle;
