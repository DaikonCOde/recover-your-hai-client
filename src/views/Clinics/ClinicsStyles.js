import styled from "styled-components";
import { SectionLight } from "../../styles/Sections";


export const ContentClinics = styled(SectionLight)`
  position: relative;
  
  .flag {
    position: fixed;
    top: 120px;
    right: 0;
    border-radius: 10px 0 0 10px;
    background: ${({ theme }) => theme.colors.principal};
    color: ${({ theme }) => theme.colors.white};
    padding: 6px; 
    i > svg {
      font-size: 25px;
    }
  }
`