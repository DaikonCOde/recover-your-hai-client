import styled from "styled-components";

export const ContentModalPatients =  styled.div`
  max-height: 100%;
  overflow-y: auto;
  padding: 0 0 20px 0;
  .title {
    margin: 0 0 40px 0;
    color: ${ ({theme}) => theme.colors.principal };
  }
  .subTitle {
    margin: 0 0 2rem;
  }
  .clinic, .result, .dataPatient, .beforeTreatment {
    margin: 0 0 40px ;
  }
  .clinic {
    img {
      width: 180px;
      margin: 0 auto;
      display: block;
    }
  }

  .result {
    .beforeAndAfter {
      min-width: 260px;
    }
  }
  .dataPatient {
    .list {
      .item {
        margin: 0 auto 10px;
        width: 210px;
        gap: 10px;
        display: flex;
        .label {
          color: ${ ({theme}) => theme.colors.principal };
          font-size: ${ ({theme}) => theme.text.sub_title };
          font-weight: 500;
          display: inline-block;
          width: 80px;
        }
        .data {
          font-size: ${ ({theme}) => theme.text.sub_title };
          
        }
      }
    }
  }


  .photo {
    min-width: 200px;
    width: 200px;
    height: 200px;
    border-radius: ${ ({theme}) => theme.rounded.xs };
    background: #333;
  }

  .beforeTreatment {
    .listPhotos {
      display: flex;
      gap: 20px;
      overflow-x: auto;
      padding: 0 50px 10px;
    }
  }

  .afterTreatment {
    .listPhotos {
      .contentPhoto {
        margin: 0 auto 30px;
        .photo {
          margin: 0 auto;
        }
        .timeLater {
          display: block;
          margin: 20px auto 0;
          border-radius: ${ ({theme}) => theme.rounded.xs };
          background: ${ ({theme}) => theme.colors.principal };
          padding: 10px 50px;
          width: fit-content;
          color: ${ ({theme}) => theme.colors.white };
          font-weight: 500;
        } 
      }
    }
  }

  .experience {
    margin: 50px 0 0 ;
    .subTitle {
      color: ${ ({theme}) => theme.colors.principal };
    }
    .video {
      width:  100%;
      height: 200px;
      background: #333;
    }
  }
  

`