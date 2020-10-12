import React from 'react';
import { Container, Topo, BoxTrilha } from './styles';

import imgMaria from '../../assets/maria-dasilva.png'
import iconInvestimento from '../../assets/icons/investimento.svg'
import iconTrilhaeee from '../../assets/icons/trilha-nocao-financeira.svg'
import TopMenu from '../../Components/TopMenu';

const Trilha: React.FC = () => {
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
            <h3>Capital de giro</h3>
          </div>
          <div className="box">
            <div>
              <div className="cicle"></div>
              <span className="line"></span>
            </div>
            <h3>Fluxo de caixa</h3>
          </div>
          <div className="box">
            <div>
              <div className="cicle"></div>
              <span className="line"></span>
            </div>
            <h3>Pró-labore</h3>
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
            <h3>Capital de giro</h3>
          </div>
          <div className="box">
            <div>
              <div className="cicle"></div>
              <span className="line"></span>
            </div>
            <h3>Fluxo de caixa</h3>
          </div>
          <div className="box">
            <div>
              <div className="cicle"></div>
              <span className="line"></span>
            </div>
            <h3>Pró-labore</h3>
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

export default Trilha;
