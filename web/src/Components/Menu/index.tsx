import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

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

const Menu: React.FC = () => {
  const [menuMob, setMenuMob] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>(window.location.pathname);

  const handleClick = () => {
    setCurrentPage(window.location.pathname)
  }

  return (
    <Container>
      <section>
        <Menumobile isMobile={menuMob} onClick={() => setMenuMob(!!true)}>
          <img src={logoGetnet} alt="GetNet"/>
        </Menumobile>
        <div>
          <img src={logoGetnet} alt="GetNet"/>
        </div>

        <ul >
          <li 
            className={clsx({"active": currentPage === "/"})} 
            onClick={handleClick}
          >
            <Link to="/">
              <img src={iconPizza} alt="Visão Geral"/> Visão Geral
            </Link>
          </li>
          <li><img src={iconFinanceiro} alt="Financeiro"/> Financeiro</li>
          <li><img src={iconEstoque} alt="Estoque"/> Estoque</li>
          <li><img src={iconFornecedores} alt="Fornecedores"/> Fornecedores</li>
          <li><img src={iconRelatorio} alt="Relatório"/> Relatório</li>
          <li 
            className={clsx({"active": currentPage === "/consultoria"})}
            onClick={handleClick}
          >
            <Link to="/consultoria">
              <img src={iconConsultoria} alt="Consultoria"/> Consultoria
            </Link>
          </li>
          <li 
            className={clsx({"active": currentPage === "/trilha-de-conhecimento"})}
            onClick={handleClick}
          >
            <Link to="/trilha-de-conhecimento" >
              <img src={iconTrilha} alt="Trilhas"/> Trilhas
            </Link>
          </li>
          <hr/>
          <li><img src={iconConfiguracao} alt="Configuração"/> Configuração</li>
          <li><img src={iconServicos} alt="Serviços"/> Serviços</li>

        </ul>
      </section>
    </Container>
  )
}

export default Menu;
