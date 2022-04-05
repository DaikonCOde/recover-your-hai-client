import styled from "styled-components";


export const ContentModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: ${({theme}) => theme.index[12] };
  .modal {
    width: 90%;
    position: absolute;
    background: ${({theme}) => theme.colors.white };
    left: 20px;
    top: 20px;
    height: 94%;
    padding: 40px 20px;
    .close {
      position: absolute;
      top: -15px;
      right: -10px;
      background: ${ ({theme}) => theme.colors.white };
      border-radius: 50%;
      padding: 3px;
      box-shadow: ${ ({theme}) => theme.shadow.box };
      color: ${ ({theme}) => theme.colors.principal };
      text-align: center;
      width: 30px;
      height: 30px;
      svg {
        font-size: 20px;
        line-height: 30px;
      }
    }
  }

`
