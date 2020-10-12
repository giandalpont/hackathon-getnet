import React, { useState } from 'react'

import { Container, Content } from './styles'

import Menu from '../../Components/Menu';

import Overview from '../../Components/Overview'
import Trilha from '../Trilha'
import Consultoria from '../Consultoria'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu menu1="active" />
      <Content>
        <Consultoria />
      </Content>
    </Container>
  )
}

export default Dashboard
