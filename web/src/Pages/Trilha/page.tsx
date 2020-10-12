import React from 'react';
import { Container, BoxTrilha } from './styles';

import iconInvestimento from '../../assets/icons/investimento.svg'
import TopMenu from '../../Components/TopMenu';

const Page: React.FC = () => {
  return (
    <Container>
      <TopMenu title="Trilhas de conhecimento"/>
      <BoxTrilha>
        <h2>Noção de Educação Financeira</h2>
        <div>
          <div className="box">
            <div>
              <img src={iconInvestimento} alt="Investimento"/>
              <span className="line"></span>
            </div>
            <h3>Investimento inicial</h3>
          </div>
          <div className="box">
            <div>
              <div className="cicle"></div>
              <span className="line"></span>
            </div>
            <h3 className="m-t-30">Capital de giro</h3>
          </div>
          <div className="box">
            <div>
              <div className="cicle"></div>
              <span className="line"></span>
            </div>
            <h3 className="m-t-30">Fluxo de caixa</h3>
          </div>
          <div className="box">
            <div>
              <div className="cicle"></div>
              <span className="line"></span>
            </div>
            <h3 className="m-t-30">Pró-labore</h3>
          </div>
          <div className="pontos">
            50 pontos
          </div>
        </div>

        <span className="btn">COMEÇAR </span>
      </BoxTrilha>
      <BoxTrilha>
        <h2>Noção de Educação Financeira</h2>
        <div>
          <div className="box">
            <div>
              <img src={iconInvestimento} alt="Investimento"/>
              <span className="line"></span>
            </div>
            <h3>Investimento inicial</h3>
          </div>
          <div className="box">
            <div>
              <div className="cicle"></div>
              <span className="line"></span>
            </div>
            <h3 className="m-t-30">Capital de giro</h3>
          </div>
          <div className="box">
            <div>
              <div className="cicle"></div>
              <span className="line"></span>
            </div>
            <h3 className="m-t-30">Fluxo de caixa</h3>
          </div>
          <div className="box">
            <div>
              <div className="cicle"></div>
              <span className="line"></span>
            </div>
            <h3 className="m-t-30">Pró-labore</h3>
          </div>
          <div className="pontos">
            50 pontos
          </div>
        </div>
        <span className="btn">COMEÇAR </span>
      </BoxTrilha>
    </Container>
  );
}

export default Page;
