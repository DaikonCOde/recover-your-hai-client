import { createGlobalStyle } from 'styled-components'

export const GlobalClass = createGlobalStyle`
  .paragraph {
    font-size: ${({ theme }) => theme.text.paragraph};
    color: ${({ theme }) => theme.opacity.text[90]};
    line-height: 18px;
    text-align: center;
  }
  
`;