import styled from "styled-components";

const TitleSection = styled.section`
  color: ${({ theme }) => theme.colors.title};
  overflow: hidden;
  .header {
    margin: 0 0 30px 0;
    .title {
      font-size: ${({ theme }) => theme.text.title};
      text-align: center;
      line-height: 40px;
      font-weight: 500;
    }
    .subTitle {
      font-size: ${({ theme }) => theme.text.sub_title};
      text-align: center;
      line-height: 20px;
    }
  }
`

export const SectionLight = styled(TitleSection)`
  padding: 40px 15px;
  background: ${({ theme }) => theme.colors.white};

`

export const SectionGray = styled(TitleSection)`
  padding: 40px 15px;
  background: ${({ theme }) => theme.opacity.white[40]}
`