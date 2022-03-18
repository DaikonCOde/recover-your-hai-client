import styled from "styled-components";

export const ContentHero = styled.div`
  width: 100%;
  min-height: 90vh;
  background: url( ${ props => props.port } );
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding: 100px 15px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(54.42deg, #EBEBEB 11.09%, rgba(255, 255, 255, 0) 85.13%);
    /* z-index: 1; */
}
`

export const Title = styled.div`
position: relative;
  .title {
    font-size: ${({ theme }) => theme.text.hero};
    line-height: ${({ theme }) => theme.l_height.hero};
    font-weight: 700;
  }
  .subTitle {
    font-size: ${({ theme }) => theme.text.sub_title};
    font-weight: 400;
  }
  .paragraph {
    font-size: ${({ theme }) => theme.text.paragraph };
    color: ${({ theme }) => theme.opacity.text[90]};
    font-weight: 300;
    margin: 30px 0 60px;
    width: 90%;
  }
`

export const ContentCTA = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 50px;
  position: relative;
  .media {
    display: flex;
    border: 2px solid ${({ theme}) => theme.colors.principal  };
    padding: 5px 15px;
    border-radius: ${ ({ theme }) => theme.rounded.xs};
    transition: all .3s linear;
    i {
      border-radius: 50%;
      font-size: 30px;
      color: ${({ theme }) => theme.colors.white };
      text-align: center;
      line-height: 0;
      svg {
        vertical-align: inherit;
      }
    }
    span {
      font-size: ${({ theme }) => theme.text.paragraph};
      line-height: 25px;
      display: inline-block;
      margin: 0 0 0 10px;
      color: ${({ theme }) => theme.colors.white };

    }
    &:hover i {
      color: ${({ theme }) => theme.colors.white };
    }
    &:hover {
      background: ${({ theme }) => theme.colors.principal };
    }
  }
`