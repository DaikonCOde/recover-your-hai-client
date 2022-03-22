import styled from "styled-components";

export const ContentRangeFilter = styled.div`
  p.label {
    font-size: 14px;
    color: ${ ({ theme }) => theme.colors.text };
  }
  input[type="range"] {
    appearance: none;
    background: ${({ theme }) => theme.colors.gray};
    border-radius: 10px;
    width: 100%;
    &::-webkit-slider-thumb {
      background: #333;
      width: 20px;
      height: 20px;
      color: #444;
    }
  }
  .range {
    position: relative;
    width: 80%;
    margin: 20px 0 40px;
    .min, .max {
      font-size: 10px;
      font-weight: 400;
      position: absolute;
      top: -15px;
    }
    .min {
      left: 0;
    }
    .max {
      right: -10px;
    }
    .value {
      font-size: 14px;
      font-weight: 400;
      position: absolute;
      bottom: -15px;
    }
  }
`