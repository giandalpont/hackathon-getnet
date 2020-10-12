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
          <h2>Defina o objetivo</h2>
          <p>Quando você inicia um negócio próprio, precisa ter em mente que uma empresa existe para prover lucros aos seus proprietários e acionistas e, por isso, é importante planejar os objetivos de seu negócio.</p>
          <p>Para isso, é preciso definir muito mais do que a missão, a visão e os valores de uma empresa. Você vai precisar saber também quais sãos seus objetivos e aonde quer chegar.</p>
          <p>É muito semelhante a entrar num táxi quando a primeira pergunta feita pelo motorista é “para onde você deseja ir?”. Se a resposta for “não sei”, dificilmente ele poderá lhe conduzir a algum lugar.</p>
          <p>Então, aproveite esse momento para montar uma planilha na qual você poderá definir objetivos, controlar seus gastos, planejar o futuro, controlar seu fluxo de caixa e muito mais.​</p>
        </Text>
        <Volta>
          <div>
            <Link to ="/trilha-de-conhecimento">
              Voltar
            </Link>
          </div>
          <div>
            <Link to ="/trilha-de-conhecimento/organize-as-entradas">
              Organize as entradas
            </Link>
          </div>
        </Volta>
      </Content>
    </Container>
  );
}

export default Trilha;
