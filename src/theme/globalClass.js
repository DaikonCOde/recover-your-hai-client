import { createGlobalStyle } from 'styled-components'

export const GlobalClass = createGlobalStyle`
  .paragraph {
    font-size: ${({ theme }) => theme.text.paragraph};
    color: ${({ theme }) => theme.opacity.text[90]};
    line-height: ${({ theme }) => theme.l_height.paragraph};
    text-align: center;
  }

  ${'' /* custom titles */}
  h3.subTitle {
    font-size: ${({ theme }) => theme.text.secon_title};
    font-weight: 600;
    text-align: center;
    margin: 0 0 1rem;
  }
  h2.title {
    font-size: ${({ theme }) => theme.text.title};
    text-align: center;
    line-height: 40px;
    font-weight: 500;
    margin: 0 0 1rem;
  }

  h5.label {
    font-size: 12px;
    font-weight: 500;
  }
  p.label {
    font-size: 14px;
    color: ${ ({ theme }) => theme.colors.text };
  }

  ${'' /* active nav */}

  .activeRoute {
    color: ${({ theme }) => theme.colors.principal};
    font-weight: 500;
  }


  ${'' /* custom styles */}
  .overlay {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: ${ ({ theme }) => theme.opacity.text[20]};
    z-index: ${ ({ theme}) => theme.index[10] };
  }

`;