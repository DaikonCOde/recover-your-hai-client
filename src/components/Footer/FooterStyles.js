import styled from "styled-components";

export const ContentFooter = styled.footer`
  background: ${({ theme }) => theme.colors.dark};
  padding: 40px 15px;
  .title {
    font-size: ${({ theme }) => theme.text.title};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-weight: 500;
  }
  .paragraph {
    color: ${({ theme }) => theme.colors.white};
  }

  .form  {
    margin: 40px auto;
    width: 80%;
    input, textarea {
      border-radius: ${({ theme }) => theme.rounded.xs};;
      background: ${({ theme }) => theme.colors.white};
      padding: 8px 20px;
      margin: 0 0 10px 0;
      width: 100%;
    }
    textarea {
      height: 100px;
    }
  }

  .networks {
    display: flex;
    gap: 30px;
    .title {
      font-size: ${({ theme }) => theme.text.sub_title};
      color: ${({ theme }) => theme.colors.white};
      font-weight: 400;
    }
    .contact {
      .item {
        display: flex;
        align-items: center;
        margin: 0 0 5px 0;
        i {
          color: ${({ theme }) => theme.colors.principal};
          svg {
            font-size: 25px;
          }
        }
        span {
          display: inline-block;
          margin: 0 0 0 10px;
          color: ${({ theme }) => theme.colors.white}
        }
      }
    }
  }
`