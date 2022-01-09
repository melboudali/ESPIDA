import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const TitleWithBg = styled.div`
  --width: calc(100% - 20px);
  --height: 300px;
  margin: 0 auto 60px;
  width: var(--width);
  height: var(--height);
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  z-index: 1;
  .img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  @media (min-width: 750px) {
    --width: 100%;
    --height: 589px;
  }
`;

const Title = styled(Link)<{ fontSize: string }>`
  color: var(--balck);
  display: flex;
  justify-content: center;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0.365em;
  text-transform: uppercase;
  &:hover {
    color: #9c50ff;
  }
`;

const Content = styled.div`
  --fontSize: 2rem;
  --padding: 15px 50px;
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
    font-size: var(--fontSize);
    line-height: 111px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--white);
  }
  a {
    --color: var(--white);
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 21px;
    letter-spacing: 0.365em;
    text-transform: uppercase;
    color: var(--color);
    padding: var(--padding);
    border: 4px solid var(--white);
    &:hover {
      --color: var(--black);
      background-color: var(--white);
    }
  }
  @media (min-width: 750px) {
    --fontSize: 6rem;
    --padding: 21px 73px;
  }
`;

interface SectionTitleProps {
  title: string;
  children?: React.ReactNode;
  fontSize: string;
}

const SectionTitle = ({ title, fontSize, children }: SectionTitleProps) => {
  if (children)
    return (
      <TitleWithBg>
        {children}
        <Content>
          <h1>{title}</h1>
          <Link to="/collections/new-releases">shop now</Link>
        </Content>
      </TitleWithBg>
    );
  return (
    <Title fontSize={fontSize} to="/collections/best-selling">
      {title}
    </Title>
  );
};

SectionTitle.defaultProps = {
  fontSize: "1.5rem",
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default SectionTitle;
