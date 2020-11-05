import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url(http://fonts.googleapis.com/earlyaccess/droidarabickufi.css);

  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  * {
    font: inherit;
  }

  html {
      box-sizing: border-box;
      font-size: 62.7%;
      font-family: ${(p) => p.theme.fonts.primary};
  }

  body {
      background: blue;
      background: ${(p) => p.theme.colors.background};
      color: ${(p) => p.theme.colors.text};
      font-size: 1.4rem;
  }

  ol, ul {
    list-style: none;
  }

  button, input, textarea, select {
    margin: 0;
    outline: none;
  }

  button, a {
    cursor: pointer;
    text-decoration: none;
  }

  button {
    border: none;
  }

  img, video, svg {
    max-width: 100%;
    max-height: 100%;
  }

  .ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (pointer: fine) and (hover: hover) {
    *::-webkit-scrollbar-track {
      border-radius: 1rem;
    }

    *::-webkit-scrollbar {
      width: 0.6rem;
      height: 0.6rem;
    }

    *::-webkit-scrollbar-thumb {
      border-radius: 18px;
      background-color: ${(p) => p.theme.colors.gray_3};

      &:active {
        background-color: ${(p) => p.theme.colors.gray_4};
      }

    }
  }

`

export default GlobalStyles
