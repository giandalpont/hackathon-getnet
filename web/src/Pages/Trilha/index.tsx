import React from 'react';
import Menu from '../../Components/Menu';
import { Container, Content } from '../Dashboard/styles';
import Page from './page'

const Trilha: React.FC = () => {
  return (
    <Container>
      <Menu menu3="active" />
      <Content>
        <Page />
      </Content>
    </Container>
  );
}

export default Trilha;
