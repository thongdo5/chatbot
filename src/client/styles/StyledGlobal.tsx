import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Manrope', sans-serif;
  }

  p {
    margin: unset;
    padding: unset;
  }

  .row {
    --bs-gutter-x: 0;
  }
`;

export default StyledGlobal;
