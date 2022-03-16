import styled from "styled-components";
import { SectionLight } from '../../../../styles/Sections';

export const ContentHairAdvisor = styled(SectionLight)`

  .listBenefits {
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    .item {
      margin: 0 0 10px 0;
      width: 100%;
      display: flex;
      flex-wrap: nowrap;
      align-items: center;
      i { 
        color: ${({ theme }) => theme.colors.principal };
      }
      span { 
        margin: 0 0 0 10px;
      }
    }
  }

  .duringProccess {
    .card {
      border-radius: ${({ theme }) => theme.rounded.xs};
      width: 100%;
      height: 180px;
      position: relative;
      overflow: hidden;
      margin: 0 0 20px 0;
      box-shadow: ${({ theme }) => theme.shadow.cad};
      &::before {
        content: '';
        position: absolute; 
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${ ({ theme }) => theme.opacity.text[30]}
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;

      }
      span {
        font-size: ${ ({ theme }) => theme.text.secon_title};
        font-weight: 500;
        color: ${ ({ theme }) => theme.colors.white};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .card:last-child {
      margin: 0;
    }
  }
`