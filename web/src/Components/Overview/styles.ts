import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  h1 {
      color: #252733;
    }

  h3 {
    color: #9FA2B4;
  }

  .cards {
    display: flex;
  }
`;

export const Cards = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: 2rem;
    margin: .3rem;
    font-weight: 700;
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .card {
    flex: 1;

    background-color: #fff;
    border: 1px solid #DFE0EB;
    border-radius: 10px;

    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

  }
`;

export const Chart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  height: 50%;
  border: 1px solid #DFE0EB;
  border-radius: 10px;
  background-color: #fff;
  color: #252733;

  span{
    color: #9FA2B4;
  }

  .chart {
    flex: 2.5;
    padding: 1rem;

    img {
      width: 100%;
    }
  }

  .data {
    flex: 1;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 1.4em;
      margin: .3rem;
      font-weight: 700;
    }

    h3 {
      font-size: 1rem;
      font-weight: 600;
    }

    .item {
      flex: 1;
      border-left: 1px solid #DFE0EB;
      border-bottom: 1px solid #DFE0EB;
      padding: .8rem;
      text-align: center
    }
  }
`;
