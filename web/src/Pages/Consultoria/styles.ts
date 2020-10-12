import styled from 'styled-components';

export const Container = styled.div`
  color: #252733;
`;

export const Categorias = styled.div`
  
  .categorias {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 5px;
    margin-top: 1rem;
  }

  .card {
    flex: 0 0 150px;
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

    transition: .2s;
    cursor: pointer;

    div {
      margin-bottom: .5rem;
    }
  }

  .card:hover {
    border: 1px solid rgba(254, 0, 0, 0.7);
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
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    gap: 5px;

    .card {
      flex: 0 1 250px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      background-color: #fff;
      border: 1px solid #DFE0EB;
      border-radius: 10px;
      text-align: center;

      img {
        width: 85%;
      }

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
        transition: .2s;
      }

      button:hover {
        background-color: #FED8D8;
      }
    }
  }

  .vermais {
    ::before {
        content: "";
        position: absolute;
        height: 1px;
        background: #DFE0EB;
        left: 30%;
        right: 10%;
        margin: -30px auto;
        
      }

    margin-top: 50px;
    color: #9FA2B4;
    display: grid;
    place-items: center;
    cursor: pointer
  }
`;
