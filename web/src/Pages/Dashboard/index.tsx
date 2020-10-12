import React, { useState } from 'react'

import { Container, Content } from './styles'

import Menu from '../../Components/Menu';

import Overview from '../../Components/Overview'

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
