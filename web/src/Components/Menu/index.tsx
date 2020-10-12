import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Menumobile } from './styles';

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

interface MenuProps {
  menu1?: string
  menu2?: string
  menu3?: string
}

const Menu: React.FC<MenuProps> = ({ menu1, menu2, menu3 }) => {
  const [menuMob, setMenuMob] = useState(false);

  return (
    <Container>
      <Menumobile isMobile={menuMob} onClick={() => setMenuMob(!!true)}>
        <img src={logoGetnet} alt="GetNet"/>
      </Menumobile>
      <div>
        <img src={logoGetnet} alt="GetNet"/>
      </div>

      <ul >
        <li className={menu1}>
          <Link to="/">
            <img src={iconPizza} alt="Visão Geral"/> Visão Geral
          </Link>
        </li>
        <li><img src={iconFinanceiro} alt="Financeiro"/> Financeiro</li>
        <li><img src={iconEstoque} alt="Estoque"/> Estoque</li>
        <li><img src={iconFornecedores} alt="Fornecedores"/> Fornecedores</li>
        <li><img src={iconRelatorio} alt="Relatório"/> Relatório</li>
        <li className={menu2}>
          <Link to="/consultoria">
            <img src={iconConsultoria} alt="Consultoria"/> Consultoria
          </Link>
        </li>
        <li className={menu3}>
          <Link to="/trilha-de-conhecimento" >
            <img src={iconTrilha} alt="Trilhas"/> Trilhas
          </Link>
        </li>
        <hr/>
        <li><img src={iconConfiguracao} alt="Configuração"/> Configuração</li>
        <li><img src={iconServicos} alt="Serviços"/> Serviços</li>

      </ul>
    </Container>
  )
}

export default Menu;
