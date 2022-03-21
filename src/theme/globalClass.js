import { createGlobalStyle } from 'styled-components'

export const GlobalClass = createGlobalStyle`
  .paragraph {
    font-size: ${({ theme }) => theme.text.paragraph};
    color: ${({ theme }) => theme.opacity.text[90]};
    line-height: ${({ theme }) => theme.l_height.paragraph};
    text-align: center;
  }

  ${'' /* custom titles */}
  h4.label {
    font-size: 12px;
    font-weight: 500;
  }
  
  ${'' /* active nav */}

  .activeRoute {
    color: ${({ theme }) => theme.colors.principal};
    font-weight: 500;
  }
`;