import React from 'react'

import { Container, Menu, Content } from './styles'

import logoGetnet from '../../assets/getnet-logo.svg'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Menu>
        <div>
          <img src={logoGetnet} alt="GetNet"/>
        </div>
        <ul>
          <li><img src="" alt="Visão Geral"/> Visão Geral</li>
          <li><img src="" alt="Financeiro"/> Financeiro</li>
          <li><img src="" alt="Estoque"/> Estoque</li>
          <li><img src="" alt="Fornecedores"/> Fornecedores</li>
          <li><img src="" alt="Relatório"/> Relatório</li>
          <li><img src="" alt="Consultoria"/> Consultoria</li>
          <li><img src="" alt="Trilhas"/> Trilhas</li>
          <span></span>
          <li><img src="" alt="Configuração"/> Configuração</li>
          <li><img src="" alt="Serviços"/> Serviços</li>

        </ul>
      </Menu>
      <Content>

      </Content>
    </Container>
  )
}

export default Dashboard
