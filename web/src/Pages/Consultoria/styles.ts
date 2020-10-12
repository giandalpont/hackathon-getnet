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

  
  .sugestoes {
    display: flex;
  }
`;
