import styled from "styled-components";

import { SectionLight } from '../../styles/Sections';

export const ContentFAQs = styled(SectionLight)`
  .header  {
    margin: 0 0 50px 0;
    .title {
      margin: 0 0 20px 0;
    }
  }

  .listQuestions {
    margin: 0 0 30px 0;
    h3.subTitle {
      color: ${ ({theme}) => theme.colors.principal };
      margin: 0 0 20px ;
    }
  }
`