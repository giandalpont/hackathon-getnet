import styled from 'styled-components';

export const Container = styled.div`
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
