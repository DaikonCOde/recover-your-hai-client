import styled from "styled-components";

export const ContentRangeFilter = styled.div`
  
  input[type="range"] {
    appearance: none;
    background: ${({ theme }) => theme.colors.gray};
    border-radius: 10px;
    width: 100%;
    height: 12px;

  }
  input[type="range"]::-webkit-slider-thumb {
    background: ${ ({ theme }) => theme.colors.principal };
    width: 18px;
    height: 18px;
    border-radius: 50%;
    -webkit-appearance:none;
    
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
      bottom: -18px;
      white-space: nowrap;
    }
  }
`