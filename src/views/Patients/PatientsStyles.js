import styled from "styled-components";
import { SectionLight } from "../../styles/Sections";


export const ContentPatients = styled(SectionLight)`
  .header .title {
    span {
      color: ${ ({theme}) => theme.colors.principal };
      font-size: inherit;
      font-weight: inherit;
    }
  }

  .listPatients {
    margin: 55px 0 0;

    .patient {
      box-shadow: ${ ({theme}) => theme.shadow.box };
      border-radius: ${ ({theme}) => theme.rounded.xs };
      padding: 30px 20px;
      margin: 0 0 30px 0;
      .title {
        color: ${ ({theme}) => theme.colors.principal };
        margin: 0 0 20px 0;
      }
      .beforeAndAfter {
        min-width: 270px;
      }
    }

  }
`