import styled from "styled-components";

export const ContentSlide = styled.div`

  min-width: calc(100vw - 60px);
  height: 300px;
  overflow: hidden;
  position: relative;
  margin: 0 15px;
  #before {
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: relative;
  }

  #after {
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 10px 15px #10101020;
  }

  .label {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${ ({ theme }) => theme.text.sub_title};
    font-weight: 500;
    position: absolute;
    bottom: 20px;
    z-index: 2;
  }

  .labelBefore {
    left: 20px;
  }

  .labelAfter {
    right: 20px;
  }

  input[type="range"] {
    -webkit-appearance:none;
    -moz-appearance:none;
    position: absolute;
    top: 0;
    left: -6%;
    right: -10px;
    height: 100%;
    width: 110%;
    background: transparent;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance:none;
    width: 25px; 
    height: 25px;   
    background: ${ ({ theme }) => theme.colors.white };
    border-radius: 50%;
    position: relative;
    z-index: 3;
  }

`