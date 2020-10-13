import React from 'react';
import { Link } from 'react-router-dom';
import TopMenu from '../../Components/TopMenu';
import { Text, Volta } from './styles';


const Trilha: React.FC = () => {
  return (
    <>
        <TopMenu title="Trilhas de conhecimento"/>
        <Text>
          <h2>Planeje as saídas</h2>
          <p>Quando se tem um controle financeiro adequado, é possível planejar as saídas de forma a encaminhar os recursos financeiros de acordo com cada pagamento dos custos fixos, variáveis e ainda recolher os devidos tributos.</p>
          <p>A falta momentânea de recursos pode ser solucionada com um bom planejamento financeiro e um capital de giro que suporte essa atividade empresarial até a entrada dos recebíveis.</p>
          <p>Com o controle de fluxo de caixa, você realiza pagamentos sem a necessidade de recorrer a empréstimos desnecessários e pagar juros altos.​</p>

          <h4>Material de apoio:</h4>
          <p>
            <a download="Controle de pagamento de tributos" href="https://www.caixa.gov.br/Downloads/educacao-financeira/controle_pagamento_tributos.xlsx?Web=1">​Planilha: Controle de pagamento de tributos</a>
            <br/>
          </p>
        </Text>
        <Volta>
          <div>
            <Link to ="/trilha-de-conhecimento/organize-as-entradas">
              Organize as entradas
            </Link>
          </div>
          <div>
            <Link to ="/trilha-de-conhecimento/organize-o-futuro">
              Organize o futuro
            </Link>
          </div>
        </Volta>
      </>
  );
}

export default Trilha;
