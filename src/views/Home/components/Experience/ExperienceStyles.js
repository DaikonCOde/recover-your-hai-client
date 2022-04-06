import styled from "styled-components";
import { SectionGray } from '../../../../styles/Sections';

export const ContentExperience = styled(SectionGray)`
  .header {
    img {
      height: 70px;
      width: 230px;
      object-fit: cover;
      display: block;
      margin: 0 auto;
    }
  }
  .body {
    .video {
      width: 100%;
      margin: 0 0 30px 0;
      iframe {
        width: 100%;
        height: 220px;
      }
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