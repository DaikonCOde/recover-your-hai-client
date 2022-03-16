import styled from "styled-components";

export const ContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 10px;
  background: ${({ theme }) => theme.colors.white  };
  box-shadow: ${({ theme }) => theme.shadow.box};
  z-index: 10;
  position: relative;
`
export const ContentLogo = styled.div`
  width: 140px;
  img {
    width: 100%;
  }
`

export const NavMenuMobile = styled.div`
  width: 30px;
  i {
    cursor: pointer;
  }
`