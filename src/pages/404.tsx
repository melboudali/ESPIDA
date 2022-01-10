import React from "react";
import Seo from "../components/common/seo";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin: 40px;

  h1 {
    margin: 0;
    font-size: 7rem;
    background: -webkit-linear-gradient(#5e4df0, #a14df0);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    margin: 0;
    color: #707070;
    font-size: 1.2rem;
    font-weight: 500;
  }
`;

const NotFoundPage = () => (
  <>
    <Seo title="404" />
    <Wrapper>
      <h1>404</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128">
        <path d="M64 0a64 64 0 0164 64H0A64 64 0 0164 0z" fill="#F4E0FF" />
        <path fill="#38434f" d="M60 0h58v118H60z" />
        <path d="M118 0h4a6 6 0 016 6v112h-10V0z" fill="#56687a" />
        <path fill="#1d2226" d="M69 77h24v29H69z" />
        <circle cx="70.5" cy="11.5" r="1.5" fill="#fff" />
        <circle cx="73.5" cy="11.5" r="1.5" fill="#fff" />
        <circle cx="76.5" cy="11.5" r="1.5" fill="#e7592f" />
        <circle cx="79.5" cy="11.5" r="1.5" fill="#fff" />
        <circle cx="82.5" cy="11.5" r="1.5" fill="#fff" />
        <circle cx="85.5" cy="11.5" r="1.5" fill="#fff" />
        <circle cx="88.5" cy="11.5" r="1.5" fill="#fff" />
        <circle cx="91.5" cy="11.5" r="1.5" fill="#fff" />
        <circle cx="94.5" cy="11.5" r="1.5" fill="#e7592f" />
        <circle cx="97.5" cy="11.5" r="1.5" fill="#fff" />
        <circle cx="100.5" cy="11.5" r="1.5" fill="#e7592f" />
        <circle cx="103.5" cy="11.5" r="1.5" fill="#fff" />
        <circle cx="70.5" cy="35.5" r="1.5" fill="#fff" />
        <circle cx="76.5" cy="35.5" r="1.5" fill="#fff" />
        <circle cx="79.5" cy="35.5" r="1.5" fill="#fff" />
        <circle cx="82.5" cy="35.5" r="1.5" fill="#95abc1" />
        <circle cx="88.5" cy="35.5" r="1.5" fill="#95abc1" />
        <circle cx="70.5" cy="41.5" r="1.5" fill="#fff" />
        <circle cx="73.5" cy="41.5" r="1.5" fill="#fff" />
        <circle cx="76.5" cy="41.5" r="1.5" fill="#fff" />
        <circle cx="79.5" cy="41.5" r="1.5" fill="#95abc1" />
        <circle cx="82.5" cy="41.5" r="1.5" fill="#fff" />
        <circle cx="85.5" cy="41.5" r="1.5" fill="#fff" />
        <circle cx="88.5" cy="41.5" r="1.5" fill="#e7592f" />
        <circle cx="70.5" cy="47.5" r="1.5" fill="#e7592f" />
        <circle cx="73.5" cy="47.5" r="1.5" fill="#fff" />
        <circle cx="76.5" cy="47.5" r="1.5" fill="#e7592f" />
        <circle cx="79.5" cy="47.5" r="1.5" fill="#fff" />
        <circle cx="82.5" cy="47.5" r="1.5" fill="#fff" />
        <circle cx="70.5" cy="53.5" r="1.5" fill="#fff" />
        <circle cx="73.5" cy="53.5" r="1.5" fill="#95abc1" />
        <circle cx="76.5" cy="53.5" r="1.5" fill="#fff" />
        <circle cx="79.5" cy="53.5" r="1.5" fill="#95abc1" />
        <circle cx="82.5" cy="53.5" r="1.5" fill="#fff" />
        <circle cx="70.5" cy="17.5" r="1.5" fill="#e7592f" />
        <circle cx="73.5" cy="17.5" r="1.5" fill="#fff" />
        <circle cx="76.5" cy="17.5" r="1.5" fill="#fff" />
        <circle cx="79.5" cy="17.5" r="1.5" fill="#95abc1" />
        <circle cx="82.5" cy="17.5" r="1.5" fill="#fff" />
        <circle cx="85.5" cy="17.5" r="1.5" fill="#fff" />
        <circle cx="88.5" cy="17.5" r="1.5" fill="#fff" />
        <circle cx="94.5" cy="17.5" r="1.5" fill="#fff" />
        <circle cx="97.5" cy="17.5" r="1.5" fill="#95abc1" />
        <circle cx="103.5" cy="17.5" r="1.5" fill="#fff" />
        <circle cx="70.5" cy="23.5" r="1.5" fill="#fff" />
        <circle cx="76.5" cy="23.5" r="1.5" fill="#fff" />
        <circle cx="79.5" cy="23.5" r="1.5" fill="#fff" />
        <circle cx="82.5" cy="23.5" r="1.5" fill="#fff" />
        <circle cx="85.5" cy="23.5" r="1.5" fill="#fff" />
        <circle cx="88.5" cy="23.5" r="1.5" fill="#e7592f" />
        <circle cx="70.5" cy="29.5" r="1.5" fill="#95abc1" />
        <circle cx="73.5" cy="29.5" r="1.5" fill="#fff" />
        <circle cx="76.5" cy="29.5" r="1.5" fill="#e7592f" />
        <circle cx="79.5" cy="29.5" r="1.5" fill="#fff" />
        <circle cx="82.5" cy="29.5" r="1.5" fill="#fff" />
        <circle cx="85.5" cy="29.5" r="1.5" fill="#fff" />
        <circle cx="88.5" cy="29.5" r="1.5" fill="#fff" />
        <circle cx="91.5" cy="29.5" r="1.5" fill="#fff" />
        <circle cx="94.5" cy="29.5" r="1.5" fill="#fff" />
        <path fill="#0d2135" d="M31 61h15l3-11H34l-3 11z" />
        <path fill="#0d2135" d="M24.6 60h21v1h-21z" />
        <path d="M32.6 59h12.86c.15-.56 2.06-7.72 2.14-8H34.74z" fill="#a8d4ff" />
        <path fill="#f4fbfe" d="M34.6 58h9.43l1.57-6h-9.43l-1.57 6z" />
        <path fill="#1b4481" d="M35.6 53h9.8l.2-1h-9.81l-.19 1z" />
        <path fill="#0d2135" d="M34.6 56h5.79l.27-1h-5.79l-.27 1z" />
        <path fill="#d6cec2" d="M27 63h5v41h-5z" />
        <path
          d="M42.57 118.65V120H16.51v-1.35l9.89-1a1.88 1.88 0 001.68-1.88V104H31v11.76a1.89 1.89 0 001.68 1.88zM14 61h32v3H14z"
          fill="#6e6558"
        />
        <circle cx="41.5" cy="121.5" r="1.5" fill="#0d2135" />
        <circle cx="29.5" cy="121.5" r="1.5" fill="#0d2135" />
        <path fill="#955646" d="M1.42 116l.58-2h6l-1 2-.49 3.91-4.38-.59-.71-3.32z" />
        <path d="M1.42 116c2.93.28 2.94 1.7 5.58 0 1.63 4.88 5.31 2.24 6.1 7l-11.9-1.55a1 1 0 01-.84-1.23z" fill="#0d2135" />
        <path d="M4 70c1.34 11.25 3 25 3 25l-5 19 7 1s5-15.11 6.66-24S16 70 16 70z" fill="#474747" />
        <path
          d="M20.86 27c-.79-6.46-10.32-7.6-12.46-1.31A63.23 63.23 0 017 33a12.8 12.8 0 01-2 4l8 2c.56-5.33 5-.37 6-4.68.34-1.15 1.15-.67 1.39-1.32s-.16-2.08.34-3.28a6.61 6.61 0 00.13-2.72z"
          fill="#955646"
        />
        <path d="M20.27 26a.46.46 0 01.07.07s-.06-.07-.07-.07zM19.88 25.84h.15z" fill="#2d1c17" />
        <path
          d="M10.4 30.62c1-.15 1.12-.32 1.75-1.53.68-1.68 3.93-1.27 3.09 1.27 2.32.26.34-2.55 2.27-2.72.87-.07.84-1 1.07-1.24.42-.38 1-.06 1.42.12.59.25 1.34.54 1.82-.19.59-.89-.4-1.76-1-2.34A11 11 0 0018 22c-3.09-1.43-6.83-1-8.77.73a7 7 0 00-1.85 2.82A6.6 6.6 0 007 27.78V33a3.91 3.91 0 002.91-1.35z"
          fill="#2d1c17"
        />
        <path d="M10.24 117.73l.28-3.15h5.88a5 5 0 00-.16 3.15v2.42l-4.94-.1z" fill="#955646" />
        <path d="M10.24 117.73c3.29 0 3.27 2.07 6 0 3 2.75 5.64 2.36 7 3.54a1 1 0 01-.69 1.73H11.08a1 1 0 01-1-1z" fill="#0d2135" />
        <path d="M18 70l2.23 10.11c2.16 7.42 0 19.57 0 19.57L18 115H9l2-23C2 78.27 2 70 2 70z" fill="#5B5B5B" />
        <path
          d="M13 39c1 2.82 3.27 4.74 4.19 7.28S18 51.45 18 56v14H2l-1-1a3.41 3.41 0 01-1-2.41V49.37C.69 38.28 5 37 5 37z"
          fill="#6B7BE4"
        />
        <path d="M5.53 57a4.41 4.41 0 003.91 4h19.78s.09-1.81-2.22-2c-.76-.06-4 0-4 0l-11-3v-6H4z" fill="#955646" />
        <path
          d="M51.66 93A6.68 6.68 0 0145 86.5V64h1v22.5a5.67 5.67 0 005.66 5.5A5.43 5.43 0 0057 86.5v-.74h1v.74a6.44 6.44 0 01-6.34 6.5z"
          fill="#8a8f6c"
        />
        <path
          d="M50.51 108a7.61 7.61 0 01-7.51-7.68V64h1v36.32a6.5 6.5 0 1013 0V79.37a5 5 0 015-5 5 5 0 015 5v18a2.5 2.5 0 105 0V77h1v20.36a3.52 3.52 0 01-3.49 3.64A3.57 3.57 0 0166 97.36v-18a4 4 0 10-8 0v20.95a7.59 7.59 0 01-7.49 7.69z"
          fill="#e16745"
        />
        <rect x="79" y="87" width="7" height="12" rx="1" fill="#8a8f6c" />
        <path fill="#65684e" d="M82 77h1v10h-1z" />
        <path fill="#c7f1b2" d="M80 89h5v3h-5z" />
        <path fill="#38434f" d="M81 90h3v1h-3z" />
        <path fill="#c0d1e2" d="M100 121h6v3h-6zM109.16 123.43l-1.82-.21L109 118h2l3 4-4.84 1.43z" />
        <path d="M108 103.82l-9.62-2.6a4 4 0 00-4.9 4.23l.28 3.55h14.54z" fill="#111111" />
        <path
          d="M108 104l-2 1.6-14 3.47a6 6 0 00-4.53 5.4 6.05 6.05 0 005.06 6.5l14.83 2.24L111 115h4.11c6.54 0 10-4.48 9.89-11z"
          fill="#000"
        />
        <path d="M93 128h13v-5c-3.14 0-3.38 2.11-6 0-2.74 1.8-3.61 1.8-7.55 3.31-.85.32-.37 1.69.55 1.69z" fill="#0d2135" />
        <path
          d="M105.56 128h6.91l2.66-7.56c.42-1.16.1-2.49-1.13-2.44h-3c-1 2.83.78 3.69-1.84 5.43.64 3.44-2.72 1.48-3.6 4.57z"
          fill="#0d2135"
        />
        <path
          d="M109.64 72.47a29 29 0 00-.48-4.39 6 6 0 00-4.79-4.08 6.12 6.12 0 00-6.64 7.56 24.68 24.68 0 011 3c.06.72.22 1.34 1 1.34.88.22 1 1.5 1.73 2 .91.64 2.36-.1 3.21.61.65.54.54 1.55.35 2.37l8.66-2.65a7.43 7.43 0 01-4.04-5.76z"
          fill="#de9885"
        />
        <path d="M80 100h11v3H79v-2a1 1 0 011-1z" fill="#56687a" />
        <path
          d="M107.4 90.42L93 98.69a9 9 0 00-2.26.07L87 100a.58.58 0 00-.34.77.55.55 0 00.61.33l2.77-.43a.51.51 0 01.58.73 1.31 1.31 0 01-.51.45c-.14.09-1.9 1.18-1.91 1.16h-1.5a.38.38 0 00-.29.61h-.47a.4.4 0 000 .79h.83l-.83.34c-.44.17-.22.89.24.75a8.42 8.42 0 004.82-2c2-1.88 3-1.88 3-1.88l15-4z"
          fill="#de9885"
        />
        <path
          d="M112 77.07l-.9-1.62a1 1 0 00-1.48-.31l-4.72 3.56v3.51L101 94l4.32.85L108 104h17c0-12.18-5.93-22.35-13-26.93z"
          fill="#9463DD"
        />
        <path
          d="M117.41 70.58c-.85-3.19-5.49-5.16-8-2.58-1.15-5.48-7.54-5.23-10.45-2.78-1.15 1-1.28 1.93-1.92 3.5a2.64 2.64 0 00.71 3.21l2.65-1.26a4.33 4.33 0 01-.3-1.67 4 4 0 002.55 2.23 1.44 1.44 0 012.61-1.11c.19.3 1.65 3 2.73 3a9.22 9.22 0 001.76-.39v-2.48c1.06.32 1.81 1.87 2.66 3 2.24 2.86 6 4 8.85.4.03.02-3.15-.65-3.85-3.07z"
          fill="#fce2ba"
        />
      </svg>
      <p>Ooops! You weren't supposed to see this.</p>
    </Wrapper>
  </>
);

export default NotFoundPage;
