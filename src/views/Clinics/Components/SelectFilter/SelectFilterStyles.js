import styled from "styled-components";

export const ContentSelectFilter = styled.div`
  
  .custom-select {
    position: relative;
    width: 230px;
    input[name="select"] {
      width: 100%;
      background: ${ ({theme}) => theme.opacity.white[40] };
      border-radius: ${ ({theme}) => theme.rounded.xs };
      padding: 6px 17px;
    }
    i {
      position: absolute;
      right: 10px;
      top: 0;
      color: ${ ({theme}) => theme.colors.principal };
    }

    .list {
      position: relative;
      box-shadow: ${ ({theme}) => theme.shadow.box };
      border-radius: ${ ({theme}) => theme.rounded.bottom } ;
      padding: 10px 17px;
      overflow: hidden;
      .item {
        margin: 0 0 10px;
        &:last-child {
          margin: 0;
        }
      }
    }


  }


`