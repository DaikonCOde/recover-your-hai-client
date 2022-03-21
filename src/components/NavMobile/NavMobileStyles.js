import styled from "styled-components";

export const ContentNavMobile = styled.nav`
  width: 300px;
  min-height: 100vh;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background: ${ ({ theme }) => theme.colors.white};
  z-index: ${ ({ theme}) => theme.index[11] };
  padding: 30px 20px;

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 30px 0;
    h4.label {
      margin: 0;
    }
    i > svg {
      font-size: 25px;  
    }
  }

  .listMenu {
    li {
      margin: 0 0 15px 0;
      i {
        margin: 0 10px 0 0;
      }
    }
  }

`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: ${ ({ theme }) => theme.opacity.text[20]};
  z-index: ${ ({ theme}) => theme.index[10] };
`