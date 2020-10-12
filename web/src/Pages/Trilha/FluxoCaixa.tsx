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
          <h2>Fluxo de caixa</h2>
          <p>Para saber como andam as receitas e despesas, atuais e futuras, você deve se valer de um tipo de controle chamado fluxo de caixa.</p>

          <h3>Fluxo de caixa</h3>
          <p>De forma simples, podemos dizer que fluxo de caixa é um instrumento que o empresário usa para acompanhar a situação financeira da sua empresa. Para fazer o seu, basta criar um relatório com informações sobre toda a movimentação de dinheiro gasto ou recebido pela sua empresa em um determinado período de tempo.</p>

          <h3>Dúvidas frequentes</h3>
          <h4><strong>O que devo registrar no fluxo de caixa?</strong></h4>
          <ul>
            <li>Todas as previsões: tanto as previsões de gastos fixos, como aluguel, conta de luz e de água, quanto as previsões de recebimentos futuros, por exemplo, parcelas a receber, vendas planejadas, entre outros;</li>
            <li>Todos os recebimentos (vendas): não se trata só de vendas. Pode, por exemplo, haver recebimento de rendimento de aplicações;</li>
            <li>Todos os pagamentos (compras): não se trata só de compras. Pode, por exemplo, haver pagamento de despesas bancárias e pagamento de impostos.</li>
          </ul>

          <h4><strong>Por que é importante manter um fluxo de caixa?</strong></h4>
          <p>É com o auxílio desse relatório que você pode prever algumas situações financeiras e planejar de forma organizada como resolver problemas, reduzir despesas, desencalhar estoques, realizar investimentos, negociar dilatação de prazo com um fornecedor, solicitar empréstimos e outras medidas para que possíveis dificuldades financeiras sejam minimizadas ou evitadas.</p>

          <h4><strong>Qual o período ideal para fazer essa análise? </strong></h4>
          <p>Seu processo de análise pode ser diário, semanal ou mensal. Recomenda-se, no entanto, que a existência do saldo final seja confirmada diariamente.</p>
          <p>Saldos negativos devem ser analisados para descobrir as causas (atraso nos recebimentos, alta taxa de inadimplência, queda nas vendas, prazo de recebimento muito longo e prazo de pagamento curto, etc).</p>
          <p>Saldos positivos elevados também sugere a necessidade de melhorar a organização financeira, pois a empresa pode estar deixando de receber juros em aplicações ou de negociar melhores condições de pagamento junto a fornecedores.</p>
          <p>Clique aqui para baixar uma planilha do SEBRAE que auxiliará na elaboração do seu fluxo de caixa.</p>


          <h4>Material de Apoio:</h4>
          <p>
            <a download="Cálculo do Capital de Giro" href="https://www.caixa.gov.br/Downloads/educacao-financeira/calculo_capital_giro.xlsm?Web=1">​Planilha: Fluxo de caixa</a>
            <br/>
            <a download="Apuração de resultados" href="https://www.caixa.gov.br/Downloads/educacao-financeira/apuracao_resultados.xlsx">Planilha: Apuração de resultados</a>
            <br/>
            <a download="Demonstrativo do resultado" href="https://www.caixa.gov.br/Downloads/educacao-financeira/demonstrativo_resultados.xlsx">Planilha: Demonstrativo do resultado</a>
          </p>

        </Text>
        <Volta>
          <div>
            <Link to ="/trilha-de-conhecimento/nocao-de-educacao-financeira">
              Planejamento Financeiro
            </Link>
          </div>
          <div>
            <Link to ="/trilha-de-conhecimento/pro-labore">
              Pró-labore
            </Link>
          </div>
        </Volta>
      </Content>
    </Container>
  );
}

export default Trilha;
