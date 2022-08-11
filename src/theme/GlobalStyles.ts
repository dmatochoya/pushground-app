import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
    }

    body {
      font-family: Poppins, sans-serif;
    }

    input {
      outline: none;
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }
`;

export default GlobalStyles;
