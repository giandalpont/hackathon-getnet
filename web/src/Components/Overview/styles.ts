import styled from 'styled-components';

export const Container = styled.div`

  .cards {
    display: flex;
  }
`;

export const Cards = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
  gap: 2rem;

  font-weight: 700;

  .card {
    flex: 1;

    background-color: #fff;
    border: 1px solid #DFE0EB;
    border-radius: 10px;

    padding: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;


    h1 {
      color: #252733;
    }

    h3 {
      color: #9FA2B4;
    }
  }
`;

export const Chart = styled.div`
  background-color: #fff;
  width: 100%;
  height: 100%;
`;
