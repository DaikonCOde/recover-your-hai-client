import styled from "styled-components";
import { SectionGray } from '../../../../styles/Sections';

export const ContentExperience = styled(SectionGray)`
  .body {
    .video {
      width: 100%;
      height: 200px;
      background: #333;
      margin: 0 0 30px 0;
    }

    .subTitle {
      font-size: ${({ theme}) => theme.text.sub_title };
      line-height: ${({ theme}) => theme.l_height.sub_title };
      color: ${({ theme }) => theme.opacity.text[90]};
      font-weight: 400;
      text-align: center;
    }

    .paragraph {
      margin: 1rem 0 4rem ;
    }
  }
`