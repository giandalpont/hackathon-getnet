import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const BoxTrilha = styled.div`
  background: #FFFFFF;
  border: 1px solid #DFE0EB;
  box-sizing: border-box;
  border-radius: 10px;
  height: 311px;

  margin-top:40px;

  padding: 21px 39px 31px 39px;
  color: #40424C;

  h2 {
    font-size: 19px;
    line-height: 24px;
    letter-spacing: 0.4px;
  }
  .btn {
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.4px;

    border: 1px solid #FE0000;
    padding: 10px 20px;
    width: 220px;
    border-radius: 30px;
    display: block;
    margin: 0 auto;
    margin-top: 30px;
    color: #FE0000;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #FED8D8;
      border-color: #FED8D8;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;

    .pontos {
      background: #FE0000;
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      letter-spacing: 0.3px;
      height: 40px;
      width: 20%;

      border-radius: 10px;
      color: #fff;

      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    .box {

      img {
        width: 80px;
        height: 80px;
      }
      div {
        display: flex;
        justify-content: center;
      }
      .line {
        background: #FE0000;
          border: 2px solid red;
          width: 332px;
          margin-top: 40px;
          position: absolute;
          z-index: 0;
          margin-left: 381px;
          @media screen and (max-width: 1450px) {
            width: 256px;
            margin-left: 321px;
          }
      }
      .cicle {
        background: #FE0000;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-top: 17px;
      }
      .m-t-30 {
        margin-top: 33px;
      }
      h3 {
        margin-top: 20px;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        letter-spacing: 0.4px;
        font-weight: bold;
        color: #40424C;
      }
    }
  }
`
