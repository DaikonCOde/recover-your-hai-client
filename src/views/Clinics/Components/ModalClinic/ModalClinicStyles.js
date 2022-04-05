import styled from "styled-components";

export const ContentModalClinic = styled.div`

  max-height: 100%;
  overflow-y: auto;
  .title {
    color: ${ ({theme}) => theme.colors.principal };
  }
  .subTitle {
    margin: 0 0 2rem;
  }
  .brand {
    margin: 30px 0 60px;
    img {
      width: 180px;
      margin: 0 auto;
      display: block;
    }
  }
  .about, .priceRange, .location, .gallery {
    margin: 0 0 40px 0;
  }
  .priceRange {
    .list {
      display: flex;
      gap: 30px;
      justify-content: center;
      margin: 30px 0 0;
      .item {
        background: ${ ({theme}) =>  theme.colors.gray };
        border-radius: ${ ({theme}) => theme.rounded.xs };
        padding: 10px 16px;
        color: ${ ({theme}) => theme.opacity.text[90] };
        font-weight: 500;
      }
    }
  }

  .location {

    .map {
      margin: 20px 0 0;
      width: 100%;
      height: 250px;
      background: #333;
    }
  }

  .gallery {
    .list {
      display:flex;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 30px 0 0;
      gap: 15px;
      .item {
        width: 140px;
        height: 140px;
        border-radius: ${ ({theme}) => theme.rounded.xs };
        background: #333;
      }
    }
  }
`