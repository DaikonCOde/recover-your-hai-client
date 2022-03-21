import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
    font-size: ${({ theme }) => theme.text.paragraph};
    font-weight: 300;
  }

  body { 
    padding: 0;
    margin: 0;
  }

  button {
    border: none;
  }

  ${'' /* icons */}
  i {
    display: inline-block;
    svg {
      font-size: 30px;
      vertical-align: middle;
    }
  }

  ${'' /* titles */}

  h1, h2, h3, h4, h5, h6, p {
    margin: 1rem 0;
  }

  p {
    font-weight: 300;
  }

  span {
    display: inline-block;
  }

  ${'' /* lists */}
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ${'' /* inputs */}
  input, textarea {
    border: none;
    outline: none;

  }

  ${'' /* Links */}
  a {
    text-decoration: none;
    display: inline-block;
    color: inherit;
  }
`