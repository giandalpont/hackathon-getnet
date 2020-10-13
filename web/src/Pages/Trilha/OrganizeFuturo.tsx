import React from 'react';
import { Link } from 'react-router-dom';
import TopMenu from '../../Components/TopMenu';
import { Text, Volta } from './styles';


const Trilha: React.FC = () => {
  return (
    <>
        <TopMenu title="Trilhas de conhecimento"/>
        <Text>
          <h2>Organize o futuro</h2>
          <p>Para que você possa continuar crescendo em qualquer atividade empresarial, é fundamental ter controles financeiros apurados, buscar cursos de capacitação e habilitar as pessoas que trabalham na sua empresa.</p>
          <p>Em função da competitividade, torna-se necessário desenvolver todas as suas potencialidades e estar atento aos aspectos econômicos, tendências, concorrência, novos produtos e nichos de mercado.</p>
          <p>Ser pioneiro em algumas dessas potencialidades pode ampliar as suas oportunidades de se tornar bem-sucedido no mundo dos negócios. Por isso, não esqueça: planeje, estude e garanta que seu empreendimento tenha vida longa e lucrativa.​</p>
          <h2>Por que utilizar planilhas de controle</h2>
          <p>Fazer a gestão de uma empresa significa movimentar os recursos para alcançar os objetivos, o que é um desafio diário e requer habilidade e conhecimento.</p>
          <p>A utilização de planilhas pode ajudar os empreendedores a organizar as informações e ter melhores condições de analisar a saúde financeira da empresa, calcular o retorno sobre o investimento e controlar o estoque, as contas a pagar e a receber.</p>
          <p>Com informações precisas e atualizadas é possível ter mais agilidade e eficiência para encontrar respostas que solucionem problemas de gestão e assim tomar as melhores decisões.</p>
        </Text>
        <Volta>
          <div>
            <Link to ="/trilha-de-conhecimento/planeje-as-saidas">
              Planeje as saídas
            </Link>
          </div>
          <div>
            <Link to ="/trilha-de-conhecimento">
              Finalizar
            </Link>
          </div>
        </Volta>
      </>
  );
}

export default Trilha;
