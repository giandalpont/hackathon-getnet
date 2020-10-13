import React from 'react'

import { Container, Content } from './styles'

import Menu from '../../Components/Menu';

import Overview from '../Overview'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu menu1="active" />
      <Content>
        <Overview />
      </Content>
    </Container>
  )
}

export default Dashboard
