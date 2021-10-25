import { createGlobalStyle } from "styled-components";
import "./fonts.css";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #ffffff;
    --backgroundColor: var(--white);
  }
  * {
  box-sizing: border-box;
  };
  html {
    position: relative;
    overflow-y: auto;
  }
  body {
    color: var(--black);
    background-color: var(--backgroundColor);
    font-size: 1rem;
    font-weight: 400;
    font-family: "Akzidenz-Grotesk BQ", Arial, Helvetica, sans-serif;
    font-style: normal;
    margin: 0;
  }
  a, a:visited {
    text-decoration: none;
  }
  button{
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }
  .gatsby-image-wrapper img[src*=base64], .gatsby-resp-image-background-image {
    image-rendering: pixelated;
  }
  
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--backgroundColor);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 6px;
    border: 3px solid var(--backgroundColor);
  }
`;

export default GlobalStyles;
