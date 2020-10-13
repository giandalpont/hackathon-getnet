import React from 'react';
import { Link } from 'react-router-dom';
import TopMenu from '../../Components/TopMenu';
import { Text, Volta } from './styles';


const Trilha: React.FC = () => {
  return (
    <>
        <TopMenu title="Trilhas de conhecimento"/>
        <Text>
          <h2>Capital de giro</h2>
          <p>Para que o seu empreendimento funcione 100%, você vai precisar pagar diversas despesas mensais, chamadas de custos fixos, como contas de água, luz, telefone, aluguel, salários, estoque e manutenção de equipamentos.</p>
          <p>O importante é lembrar que você deverá pagar todas essas despesas mesmo que a sua empresa não fature nada ou não fature o suficiente naquele mês. Por isso, é necessário ter sempre um capital de giro.</p>

          <h3>Mas o que significa capital de giro?</h3>
          <p>Capital de giro é uma reserva de recursos financeiros que a empresa tem para assumir todos os custos operacionais e manter a empresa em pleno funcionamento. Uma expectativa razoável é manter reserva de capital de giro para os próximos seis meses (é só somar os custos e despesas fixos de um mês e multiplicar por seis).</p>
          <p>O capital de giro está no seu estoque, no que o seu cliente comprou a prazo, no caixa ou na sua conta bancária. Um exemplo: quanto mais a sua empresa comprar estoque ou vender a prazo, mais capital de giro precisará ter para pagar as contas.</p>
          <p>Quando sobra capital, você pode ficar tranquilo. Mas, se você precisar gastar mais do que tem, a sua empresa terá que pedir empréstimos, o que pode gerar dívidas e diminuir sua margem de lucro.</p>

          <h4>Material de Apoio:</h4>
          <p>
            <a download="Cálculo do Capital de Giro" href="https://www.caixa.gov.br/Downloads/educacao-financeira/calculo_capital_giro.xlsm?Web=1">Planilha: Cálculo do Capital de Giro</a>
          </p>

        </Text>
        <Volta>
          <div>
            <Link to ="/trilha-de-conhecimento/nocao-de-educacao-financeira">
              Planejamento Financeiro
            </Link>
          </div>
          <div>
            <Link to ="/trilha-de-conhecimento/fluxo-de-caixa">
              Fluxo de caixa
            </Link>
          </div>
        </Volta>
      </>
  );
}

export default Trilha;
