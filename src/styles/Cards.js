import styled from "styled-components";

export const StyleCard = styled.article`
  width: 85%;
  margin: 30px auto; 
  border-radius: ${ ({ theme }) => theme.rounded.xs};
  overflow: hidden;
  box-shadow: ${ ({ theme }) => theme.shadow.box};
  background: ${ ({ theme }) => theme.colors.white};
  .imgCard {
    height: 160px;
    img { 
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .bodyCard {
    padding: 10px 20px 20px;
    .title {
      font-size: ${({ theme }) => theme.text.secon_title};
      font-weight: 600;
      text-align: center;
      margin: 0 0 1rem;
    }
  } 
`