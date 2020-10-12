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
          <h2>Pró-labore</h2>

          <h3>O que é pró-labore?</h3>
          <p>Pró-labore significa “pelo trabalho” e corresponde à remuneração destinada aos sócios que trabalham na empresa ou, na maioria dos casos, ao sócio-administrador.</p>
          <p>Pró-labore é diferente do que se denomina salário, pois sobre ele não existem regras obrigatórias em relação a 13º salário, férias, FGTS, etc. Os benefícios trabalhistas são opcionais e devem ser acordados.</p>

          <h3>Como determinar o valor do pró-labore?</h3>

          <ul>
            <li>Defina as atividades que o sócio desempenha na sua empresa;</li>
            <li>Pesquise no mercado qual a média salarial de um profissional que realiza as mesmas atividades e considere pagar esse valor mensalmente;Estabeleça o pró-labore no contrato social e lance-o como uma despesa administrativa da sua empresa.  </li>
          </ul>

          <h3>Impostos</h3>
          <p>Normalmente, são cobrados dois impostos sobre o pró-labore:</p>
          <ul>
            <li>IRPF (Imposto de Renda de Pessoa Física) - de acordo com a tabela progressiva da Receita Federal.</li>
            <li>INSS – retém-se 11% sobre a remuneração paga ao sócio (respeitando o teto de contribuição do INSS). As empresas que não são optantes pelo Simples Nacional são obrigadas a recolher INSS patronal de 20% em conjunto com os 11% descontados do sócio.</li>
          </ul>

        </Text>
        <Volta>
          <div>
            <Link to ="/trilha-de-conhecimento/fluxo-de-caixa">
              Fluxo de caixa
            </Link>
          </div>
          <div>
            <Link to ="/trilha-de-conhecimento">
              Finalizar
            </Link>
          </div>
        </Volta>
      </Content>
    </Container>
  );
}

export default Trilha;
