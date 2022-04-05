import styled from "styled-components";

export const ContentAccordion = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 4px -2px rgba(0,0,0,0.5);
  .tab {
    width: 100%;
    color: ${ ({theme}) => theme.colors.text };
    overflow: hidden;
    input {
      position: absolute;
      opacity: 0;
      z-index: -1;
    }
    .label {
      display: flex;
      justify-content: space-between;
      padding: 10px 20px 10px 10px;
      background: ${ ({theme}) => theme.colors.gray };
      position: relative;
      font-weight: 500;
      cursor: pointer;
      position: relative;
      i {
        position: absolute;
        right: 10px;
        top: 5px;
        transition: all .2s linear;
      }
      /* Icon */
      &:hover {
        background: ${ ({theme}) => theme.colors.principal };
      }
    }
    .content {
      max-height: 0;
      padding: 0 1em;
      color: ${ ({theme}) => theme.opacity.text[90] };
      transition: all .2s linear;
      background: ${ ({theme}) => theme.colors.white };
    }
  }

  // :checked
  input:checked {
    + .label {
      background: ${ ({theme}) => theme.colors.principal };
      color: ${ ({theme}) => theme.colors.white };
      i {
        transform: rotate(90deg);
      }
    }
    ~ .content {
      max-height: 100%;
      padding: 1em;
    }
  }

`