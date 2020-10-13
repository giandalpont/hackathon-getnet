import React from 'react'

import { Container, Content } from './styles/App';

import Menu from './Components/Menu';
import Router from './Router';


export const App: React.FC = () => {
  return (
    <Container>
      <Menu />
      <Content>
        <Router />
      </Content>
    </Container>
  )
}
