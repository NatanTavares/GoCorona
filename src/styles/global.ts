import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: ${({ theme }) => theme.palette.bg.main};
    overflow-x: hidden;
  }

  body,
  input,
  textarea {
    font: ${({ theme }) => theme.font.paraph};
  }

  h1,
  h2,
  h3 {
    font: ${({ theme }) => theme.font.title};
  }

  button {
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.94);
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
