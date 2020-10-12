import React from 'react'

import { Container, Content } from '../Dashboard/styles';

import Menu from '../../Components/Menu';

import Page from './page';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu menu2="active" />
      <Content>
        <Page />
      </Content>
    </Container>
  )
}

export default Dashboard
