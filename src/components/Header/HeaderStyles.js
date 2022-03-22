import styled from "styled-components";

export const ContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  background: ${({ theme }) => theme.colors.white  };
  box-shadow: ${({ theme }) => theme.shadow.box};
  z-index: 10;
  position: relative;
  .contentBrand {
    width: 120px;
    img {
      width: 100%;
    }
  }
  .navMenuMobile {
    width: 30px;
    i {
      line-height: 30px;
    }
  }
`
