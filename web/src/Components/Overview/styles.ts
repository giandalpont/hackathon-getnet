import styled from 'styled-components';

export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3rem;
  margin-bottom: 2rem;
  
  

  color: #252733;

  .title {
    font-size: 1.4rem;
    font-weight: 700;
  }
  .items {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

export const Container = styled.div`
  min-width: calc(100vw - 255px);
  max-height: 100vh;
  padding: 1rem 2rem;
  overflow-y: hidden;

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
      width: 80%;
    }
  }

  .data {
    flex: 1;

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
      border-left: 1px solid #DFE0EB;
      border-bottom: 1px solid #DFE0EB;
      padding: .8rem;  
      text-align: center
    }
  }
`;
