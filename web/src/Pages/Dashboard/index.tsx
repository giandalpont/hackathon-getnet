import React, { useState } from 'react'

import { Container, Menu, Content, Menumobile } from './styles'

import logoGetnet from '../../assets/getnet-logo.svg'
import iconPizza from '../../assets/icons/pizza.svg'
import iconFinanceiro from '../../assets/icons/financeiro.svg'
import iconEstoque from '../../assets/icons/estoque.svg'
import iconFornecedores from '../../assets/icons/fornecedores.svg'
import iconRelatorio from '../../assets/icons/relatorio.svg'
import iconConsultoria from '../../assets/icons/consultoria.svg'
import iconConfiguracao from '../../assets/icons/configuracao.svg'
import iconServicos from '../../assets/icons/servicos.svg'
import iconTrilha from '../../assets/icons/trilha.svg'

import Overview from '../../Components/Overview'
import Trilha from '../Trilha'

const Dashboard: React.FC = () => {
  const [menuMob, setMenuMob] = useState(false);
  return (
    <Container>
      <Menu>
        <Menumobile isMobile={menuMob} onClick={() => setMenuMob(!!true)}>
          <img src={logoGetnet} alt="GetNet"/>
        </Menumobile>
        <div>
          <img src={logoGetnet} alt="GetNet"/>
        </div>

        <ul >
          <li className="active"><img src={iconPizza} alt="Visão Geral"/> Visão Geral</li>
          <li><img src={iconFinanceiro} alt="Financeiro"/> Financeiro</li>
          <li><img src={iconEstoque} alt="Estoque"/> Estoque</li>
          <li><img src={iconFornecedores} alt="Fornecedores"/> Fornecedores</li>
          <li><img src={iconRelatorio} alt="Relatório"/> Relatório</li>
          <li><img src={iconConsultoria} alt="Consultoria"/> Consultoria</li>
          <li><img src={iconTrilha} alt="Trilhas"/> Trilhas</li>
          <hr/>
          <li><img src={iconConfiguracao} alt="Configuração"/> Configuração</li>
          <li><img src={iconServicos} alt="Serviços"/> Serviços</li>

        </ul>
      </Menu>
      <Content>
        {/* <Overview /> */}
        <Trilha />
      </Content>
    </Container>
  )
}

export default Dashboard
