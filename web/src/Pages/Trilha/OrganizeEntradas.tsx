import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../Components/Menu';
import TopMenu from '../../Components/TopMenu';
import { Container, Content } from '../Dashboard/styles';
import { Text, Volta } from './styles';


const Trilha: React.FC = () => {
  return (
    <Container>
      <Menu menu3="active" />
      <Content>
        <TopMenu title="Trilhas de conhecimento"/>
        <Text>
          <h2>Organize as entradas</h2>
          <p>Saber quanto sua empresa fatura é fundamental para o desenvolvimento de seu negócio. As entradas são o oxigênio necessário para prover seus custos fixos, variáveis, pagamentos de tributos e muitas outras despesas.</p>
          <p>Para isso, identifique e organize seus recebimentos e prazos de forma que o seu fluxo de caixa combine perfeitamente com os seus compromissos financeiros (pagamento de fornecedores, funcionários, bancos e quaisquer outras despesas).</p>
          <p>Sem essas informações básicas, o empreendedor não pode tomar decisões de investimentos ou pagar suas contas, e acaba com dívidas por falta de controle financeiro e por não saber exatamente o quanto ganh</p>
          <h4>Material de apoio:</h4>
          <p>
            <a download="Cálculo do preço de venda" href="https://www.caixa.gov.br/Downloads/educacao-financeira/calculo_preco_venda.xlsx?Web=1">Planilha: Cálculo do preço de venda</a>
            <br/>
          </p>
        </Text>
        <Volta>
          <div>
            <Link to ="/trilha-de-conhecimento/defina-o-objetivo">
              Defina o objetivo
            </Link>
          </div>
          <div>
            <Link to ="/trilha-de-conhecimento/planeje-as-saidas">
              Planeje as saídas
            </Link>
          </div>
        </Volta>
      </Content>
    </Container>
  );
}

export default Trilha;
