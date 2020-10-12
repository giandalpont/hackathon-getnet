import styled from 'styled-components';

export const Container = styled.div`
  color: #252733;
`;

export const Categorias = styled.div`
  
  .categorias {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.8rem;
    margin-top: 1rem;
  }

  .card {
    flex: 1 1 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    background-color: #fff;
    border: 1px solid #DFE0EB;  
    border-radius: 10px;
    padding: 2rem .3rem;

    font-weight: 300;
    font-size: 14px;

    div {
      margin-bottom: .5rem;
    }
  }
`;

export const Recomendacao = styled.div`
  .title {
    margin-top: 2rem;
    font-size: 24px;
  }

  .subtitle {
    margin-bottom: 2rem;
    font-size: 16px;
  }
  
  .sugestoes {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;

    .card {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background-color: #fff;
      border: 1px solid #DFE0EB;
      border-radius: 10px;
      text-align: center;

      h1 {
        font-size: 19px;
        font-weight: 700;
        color: #9FA2B4;
      }

      .nome {
        font-weight: bold;
      }

      .cargo {
        font-size: 14px;
      }

      button {
        margin: 1rem 0;
        height: 40px;
        border: 1px solid;
        border-radius: 100px;
        width: 100%;
        background: none;
        font-size: 16px;
        color: #FE0000;
      }
    }
  }
`;
