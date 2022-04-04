import styled from "styled-components";
import { SectionLight } from "../../../../styles/Sections";

export const ContentStories = styled(SectionLight)`
  
  .body {
    .contentSlides {
      margin: 30px auto;
      width: 100%;
      min-height: 280px;
      overflow: hidden;
      position: relative;
    }
    .resultsSlide {
      display: flex;
      flex-wrap: nowrap;
      transition: all .5s linear;
    }

    .contentArrows {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    .arrow {
      position: absolute;
      top: calc(50% - 25px);
      color: ${({ theme }) => theme.colors.principal};
      svg {
        font-size: 50px;
      }
    }

    .arrowLeft {
      left: 0;
    }
    .arrowRight {
      right: 0;
    }

  }

`